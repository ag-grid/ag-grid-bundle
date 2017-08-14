const gulp = require('gulp');
const cp = require('child_process');

gulp.task('start-docs', cb => {
    const env = {
        GRID_SCRIPT_PATH: 'http://localhost:9999/bundle.js'
    };

    const php = cp.spawn('php', ['-S', 'localhost:8080', '-t', 'ag-grid-docs/src'], { stdio: 'inherit', env: env });

    const gulp = cp.spawn('./node_modules/.bin/webpack-dev-server', ['--config', './webpack-docs.config.js'], { stdio: 'inherit' } );

    process.on('exit', () => {
        php.kill();
        gulp.kill();
    })
});

gulp.task('pl', cb => {
    const latestRepos = [ 'ag-grid-dev', 'ag-grid', 'ag-grid-enterprise', 'ag-grid-aurelia', 'ag-grid-react-example', 'ag-grid-angular', 'ag-grid-docs' ];

    const fetch = cp.spawn('git', [ 'submodule',  'update', '--init', '--remote' ], { stdio: 'inherit' });
    
    fetch.on('exit', code => {
        latestRepos.forEach( repo => {
            const reset = cp.spawn('git', [ 'branch',  '-f', 'latest', 'HEAD' ], { stdio: 'inherit', cwd: repo });
            reset.on('exit', code => {
                const co = cp.spawn('git', [ 'checkout',  'latest' ], { stdio: 'inherit', cwd: repo });
            })
        });
    });
});
