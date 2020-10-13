import WebSocket from 'ws'

export class Rnode {
  private socket:WebSocket

  constructor(socket:WebSocket) {
    this.socket = socket
  }
}
