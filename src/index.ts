import * as process from 'process'
import {RnodeServer} from './rnode/rnodeServer'

/*
import Nedb from 'nedb'
let rnodes: Nedb
rnodes = new Nedb({ filename: './db/nodes', autoload: true });
*/

let server: RnodeServer

async function main():Promise<void> {
  server = new RnodeServer(8580)
}

main().then(()=>{
  console.log('Initialized',process.uptime())
})
//  process.exit()
