import WebSocket from 'ws'
import * as http from 'http'
import { EventDispatcher } from 'strongly-typed-events'

import {Rnode} from './rnode'

export class RnodeServer {

  public get onRnodeConnected() {
    return this._onRnodeConnected.asEvent();
  }

  public constructor(port: number) {
    this.server = new WebSocket.Server({
      port: port,
      verifyClient: this.verify
    })
    this.server.on('connection',(client: WebSocket)=>{
      let newRnode = new Rnode(client)
      this.rnodes.push(newRnode)
      this._onRnodeConnected.dispatch(this,newRnode)
    })
    this.server.
  }

  private server: WebSocket.Server
  private rnodes: Rnode[] = []
  private _onRnodeConnected = new EventDispatcher<RnodeServer,Rnode>()

  private verify(
    info: { origin: string; secure: boolean; req: http.IncomingMessage },
    callback: (res: boolean, code?: number, message?: string, headers?: http.OutgoingHttpHeaders) => void
  ) {
    console.log('verify',info)
    callback(true)
  }

}
