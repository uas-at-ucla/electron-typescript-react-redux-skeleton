// These "external" actions are never triggered by the user, they will typically come from communicator.ts

// For example:
export const serverConnected = () => ({
  type: "SERVER_CONNECTED" as const,
});

export const serverDisconnected = () => ({
  type: "SERVER_DISCONNECTED" as const,
});

export const exampleMessageReceived = (message: string) => ({
  type: "EXAMPLE_MESSAGE_RECEIVED" as const,
  payload: message,
});
