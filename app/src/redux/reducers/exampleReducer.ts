import produce from "immer";
import { AppAction } from "../actions/actionTypes";

interface ExampleState {
  data: string;
}

const initialState: ExampleState = {
  data: "Initial value"
};

export default produce((draftState: ExampleState, action: AppAction) => {
  switch (action.type) {
    case "EXAMPLE_ACTION": {
      draftState.data = action.payload;
      return;
    }
  }
}, initialState) as (a: any, b: any) => ExampleState;
