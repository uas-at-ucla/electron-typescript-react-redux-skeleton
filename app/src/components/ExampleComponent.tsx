import React, { Component } from "react";
import { Button, Input } from "reactstrap";
import { connect } from "react-redux";

import * as exampleActions from "redux/actions/exampleActions";
import { selector, AppState } from "redux/store";

interface OwnProps {
  exampleProp: string;
}

const mapStateToProps = (state: AppState) => {
  const derivedData = selector(state);
  return {
    message: state.example.data,
    messageWithEmphasis: derivedData.example.exampleDerivedData
  };
};

const mapDispatchToProps = exampleActions;

type Props = OwnProps &
  ReturnType<typeof mapStateToProps> &
  (typeof mapDispatchToProps);

class ExampleComponent extends Component<Props> {
  state = {
    input: ""
  };

  render() {
    return (
      <div className="ExampleComponent">
        <h1>{this.props.message}</h1>
        <h1>
          <b>{this.props.messageWithEmphasis}</b>
        </h1>
        <p>{this.props.exampleProp}</p>
        <div>
          <Input
            onChange={event => this.setState({ input: event.target.value })}
            value={this.state.input}
          ></Input>
          <Button onClick={() => this.props.exampleAction(this.state.input)}>
            Dispatch Action!
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleComponent);
