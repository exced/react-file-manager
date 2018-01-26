// React File Manager
// https://github.com/exced/react-file-manager

import * as React from "react";

declare module "react-file-manager" {

  export interface Types {
    folder: string,
    file: string,
  };

  export interface FileManagerProps extends React.Props {
    map: {
      id: string | number,
      children: Array<string | number>,
      parent: string | number
    },
    rootId: string | number,
    onChange: (map: object) => void,
    onChangeRow?: (target: object, source: object, destination: object) => void,
    onChangeColumn?: (target: object, source: object, destination: object) => void,
    onOutsideDrop: (files) => void,
    renderItem: (item: object, index: number) => React.Component,
    renderPreview: (item: object, index: number) => React.Component,
    itemSelectedColor?: string,
    dropBackgroundColor?: string,
  };

  export default class FileManager extends React.Component<FileManagerProps, {}> {
    deselect: () => void
  };

}
