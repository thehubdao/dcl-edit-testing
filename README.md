# DCL Edit Testing Repository
This repository is closely related to [dcl-edit](https://github.com/metagamehub/dcl-edit). It was not included in the main repository, because it would convolute that repository to much.

## Usage
To use this properly you need to put this repository into the same folder as dcl-edit. The folder structure should end up looking like this:

```
repositories
|-  dcl-edit
|   |-  Assets
|   |   ┕-  ...
|   |-  Packages
|   |   ┕-  ...
|   ┕-  ...
|-  dcl-edit-testing
|   ┕-  projects
|       |-  parent-scaling
|       |   |-  ...
|       ┕-  simple-load-test
|           ┕-  ...
┕-  ...
```

## .gitignore
This repository does not contain a .gitignore. This is because there are many different test environments. That might including some, that have `build`, `dist`, or `node_modules` folders. They need to be included in the repository as well.

On the other hand, this might lead to unnecessary files. **Make sure, to only commit files, that are actually relevant to the tests**