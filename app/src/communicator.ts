import socketIOClient, { Socket } from "socket.io-client";
import { Dispatch, Middleware, MiddlewareAPI } from "redux";
import { AppAction } from "redux/actions/actionTypes";
import * as externalActions from "redux/actions/externalActions";

// This is an example of how you might use Socket.IO to communicate with the outside world and exchange data with the app using Redux

class Communicator {
  store: MiddlewareAPI;
  socket: Socket;

  constructor(store: MiddlewareAPI) {
    console.log("Initializing communicator");
    this.store = store;
    this.socket = this.initSocket();
  }

  initSocket() {
    this.socket = socketIOClient("ws://localhost:8080", {
      transports: ["websocket"],
    });

    this.socket.on("connect", () => {
      this.store.dispatch(externalActions.serverConnected());
    });

    this.socket.on("disconnect", () => {
      this.store.dispatch(externalActions.serverDisconnected());
    });

    this.socket.on("EXAMPLE_MESSAGE", (message: string) => {
      this.store.dispatch(externalActions.exampleMessageReceived(message));
      alert('Received message: "' + message + '"'); // This is a good place to show alerts
    });

    return this.socket;
  }

  reduxMiddleware(next: Dispatch) {
    return (action: AppAction) => {
      if (action.type === "TRANSMIT") {
        if (action.payload.data != null) {
          this.socket.emit(action.payload.msg, action.payload.data);
        } else {
          this.socket.emit(action.payload.msg);
        }
        console.log("Transmitting", action.payload);
      }
      next(action);
    };
  }
}

export default ((store: MiddlewareAPI) => {
  const communicator = new Communicator(store);
  return communicator.reduxMiddleware.bind(communicator);
}) as Middleware;

/* Example Socket.IO server
const io = require('socket.io')(8080, {
  cors: {
    origin: '*',
  }
});

io.on('connect', socket => socket.emit('EXAMPLE_MESSAGE', "Hi from the server"));
*/
