import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Input } from "@vechaiui/react";

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
      <p>{props.message}</p>
      <p className="mb-4">
        <b>{props.messageWithEmphasis}</b>
      </p>
      <p className="mb-4">{props.exampleProp}</p>
      {parentFolder && parentFolderFileList ? (
        <p className="mb-4">{`The folder ${parentFolder} contains: ${parentFolderFileList.join(
          ", "
        )}`}</p>
      ) : (
        <p className="mb-4">
          {
            "TODO Can't access NodeJS/Electron modules, so this must be running in the browser"
          }
        </p>
      )}
      <div>
        <Input
          className="w-auto mr-2"
          placeholder="Type something!"
          onChange={(event) => setInput(event.target.value)}
          value={input}
        ></Input>
        <Button
          variant="solid"
          color="primary"
          onClick={() => props.exampleAction(input)}
        >
          Dispatch Action!
        </Button>
      </div>
    </div>
  );
}

export default connectComponent(ExampleComponent);
