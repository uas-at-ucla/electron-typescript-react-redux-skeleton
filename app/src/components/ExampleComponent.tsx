import React, { useState } from "react";
import { connect } from "react-redux";

import { AppState, selectors } from "redux/store";
import * as exampleActions from "redux/actions/exampleActions";
import { ExtractPropsType } from "utils/reduxUtils";
import { fs, relativePath } from "utils/electronUtils";

const parentFolder = relativePath("../");
const parentFolderFileList =
  fs && parentFolder ? fs.readdirSync(parentFolder) : undefined;

interface OwnProps {
  exampleProp: string;
}

const mapStateToProps = (state: AppState, _props: OwnProps) => {
  return {
    message: state.example.data,
    messageWithEmphasis: selectors.example.exampleDerivedData(state),
  };
};

const mapDispatchToProps = exampleActions;

const connectComponent = connect(mapStateToProps, mapDispatchToProps);
type Props = ExtractPropsType<typeof connectComponent>;

function ExampleComponent(props: Props) {
  const [input, setInput] = useState("");

  return (
    <div className="ExampleComponent">
      <h1>{props.message}</h1>
      <h1>
        <b>{props.messageWithEmphasis}</b>
      </h1>
      <p>{props.exampleProp}</p>
      {parentFolder && parentFolderFileList ? (
        <p>{`The folder ${parentFolder} contains: ${parentFolderFileList.join(
          ", "
        )}`}</p>
      ) : (
        <p>
          {
            "Can't access NodeJS/Electron modules, so this must be running in the browser"
          }
        </p>
      )}
      <div>
        <input
          onChange={(event) => setInput(event.target.value)}
          value={input}
        ></input>
        <button onClick={() => props.exampleAction(input)}>
          Dispatch Action!
        </button>
      </div>
    </div>
  );
}

export default connectComponent(ExampleComponent);
