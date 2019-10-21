import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import { connect } from "react-redux";

import * as exampleActions from "redux/actions/exampleActions";
import { selectors, AppState } from "redux/store";

interface OwnProps {
  exampleProp: string;
}

const mapStateToProps = (state: AppState) => {
  return {
    message: state.example.data,
    messageWithEmphasis: selectors.example.exampleDerivedData(state)
  };
};

const mapDispatchToProps = exampleActions;

type Props = OwnProps &
  ReturnType<typeof mapStateToProps> &
  (typeof mapDispatchToProps);

const ExampleComponent = (props: Props) => {
  const [input, setInput] = useState("");

  return (
    <div className="ExampleComponent">
      <h1>{props.message}</h1>
      <h1>
        <b>{props.messageWithEmphasis}</b>
      </h1>
      <p>{props.exampleProp}</p>
      <div>
        <Input
          onChange={event => setInput(event.target.value)}
          value={input}
        ></Input>
        <Button onClick={() => props.exampleAction(input)}>
          Dispatch Action!
        </Button>
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleComponent);
