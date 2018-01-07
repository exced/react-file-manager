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
| initial | Object. See [Example](https://github.com/exced/react-file-manager/blob/master/src/App.js) | None | true | normalized data map |
| rootId | Number | None | true | Id of root folder |
| onChange | Object => void | None | true | Triggered when file structure changes |
| onChangeRow | (itemId, source, destination) => void | (a,b,c) => {} | false | Triggered when item change of row |
| onChangeColumn | (itemId, source, destination) => void | (a,b,c) => {} | false | Triggered when item change of column |
| renderItem | Object => React.Element | None  | true | Selected item rendering |
| renderPreview | Object => React.Element | None  | true | Selected item preview rendering |

All contributions are welcome.
