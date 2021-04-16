export const exampleAction = (payload: string) => ({
  type: "EXAMPLE_ACTION" as const,
  payload: payload,
});

// "TRANSMIT" actions are caught by the communicator middleware to send a message to the outside world
export const transmitAction = (msg: string, data: unknown) => ({
  type: "TRANSMIT" as const,
  payload: {
    msg: msg,
    data: data,
  },
});
