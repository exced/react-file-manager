// React Survey Editor
// https://github.com/exced/react-survey-editor

import * as React from "react";

declare module "react-survey-editor" {

    export interface SurveyEditorProps extends React.Props {
        onExport: (value: object) => void;
        initialValue?: object;
        locale?: string;
    }

    export default class SurveyEditor extends React.Component<SurveyEditorProps, {}> {

    }

    // TODO
    export class Reducers extends any {

    }
}
