import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

import * as exampleActions from "redux/actions/exampleActions";
import { AppState, selectors } from "redux/store";

interface Props {
  exampleProp: string;
}

const ExampleComponent = (props: Props) => {
  const [input, setInput] = useState("");

  const message = useSelector((state: AppState) => state.example.data);
  const messageWithEmphasis = useSelector(selectors.example.exampleDerivedData);

  const dispatch = useDispatch();

  return (
    <div className="ExampleComponent">
      <h1>{message}</h1>
      <h1>
        <b>{messageWithEmphasis}</b>
      </h1>
      <p>{props.exampleProp}</p>
      <div>
        <Input
          onChange={event => setInput(event.target.value)}
          value={input}
        ></Input>
        <Button onClick={() => dispatch(exampleActions.exampleAction(input))}>
          Dispatch Action!
        </Button>
      </div>
    </div>
  );
};

export default ExampleComponent;
