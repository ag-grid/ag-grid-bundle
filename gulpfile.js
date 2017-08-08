const gulp = require('gulp');
const cp = require('child_process');

gulp.task('start-docs', cb => {
    const php = cp.spawn('php', ['-S', 'localhost:8080', '-t', 'ag-grid-docs/src'], { stdio: 'inherit' })
    const gulp = cp.spawn('gulp', [], { stdio: 'inherit', cwd: 'ag-grid-dev' })

    process.on('exit', () => {
        php.kill();
        gulp.kill();
    })
})
