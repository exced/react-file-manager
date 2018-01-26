# React File Manger

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/exced/react-file-manager/blob/master/LICENSE)
[![Build](https://travis-ci.org/exced/react-file-manager.svg?branch=master)](https://travis-ci.org/exced/react-file-manager)
[![Npm](https://img.shields.io/npm/v/react-file-manager.svg?style=flat)](https://www.npmjs.com/package/react-file-manager)
[![Npm](https://img.shields.io/coveralls/exced/react-file-manager/master.svg?style=flat)](https://coveralls.io/github/exced/react-file-manager)

Multi-column File Manager based on [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd).

## [Live Demo](https://exced.github.io/react-file-manager)

## Install

```bash
yarn add react-file-manager
```

## Build
```bash
yarn lib
```

## Usage

See [Example App](https://github.com/exced/react-file-manager/blob/master/src/App.js)

## API

|    Name     |       Type       |       Default       | Required | Description |
| :----------:| :-------------:  | :-----------------: | :----------:| :------------:|
| map | Files object. See [Example](https://github.com/exced/react-file-manager/blob/master/src/App.js) Mandatory fields : "id", "children", "parent" | None | true | normalized data map (You can use easily setup a normalizr schema. |
| rootId | Number | None | true | Id of root folder |
| onChange | Object => void | None | true | Triggered when file structure changes |
| onChangeRow | (itemId, source, destination) => void | (a,b,c) => {} | false | Triggered when item change of row |
| onChangeColumn | (itemId, source, destination) => void | (a,b,c) => {} | false | Triggered when item change of column |
| onOutsideDrop | (itemId, files) => void | (a,b) => {} | false | Triggered when files from outside are dropped into a column |
| renderItem | Object => React.Element | React.Element  | false | Selected item rendering |
| renderPreview | Object => React.Element | React.Element  | false | Selected item preview rendering |
| itemSelectedColor | String | '#1a53ff'  | false | Item Selected color |
| dropBackgroundColor | String | '#cccdce'  | false | Drop column background color |

## TODO
- [ ] Add tests
- [x] Extended version as default

All contributions are welcome.
