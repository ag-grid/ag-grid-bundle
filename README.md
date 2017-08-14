# ag-Grid umbrella repo

The mother of repos, providing snapshots and utilities for orchestrating the rest of the repositories in the [ag-Grid](https://github.com/ag-grid/) org. 

## Usage

Clone the repo

```sh
git clone https://github.com/ag-grid/ag-grid-bundle.git 
```

Currently, only the `latest` branch is functional. 

```sh
git checkout latest
```

Update the submodules:

```sh
git submodule update --init --remote
```

Afterwards, run

```sh
npm install
```

### Tasks

`start-docs` launches a webpack dev server with HMR and ts-loader optimizations enabled. Right now, only the main example is loading from it.

```
gulp start-docs 
```

Afterwards, open `http://localhost:8080` in your browser. Any change in the source should be reflected faster than the current setup. 
