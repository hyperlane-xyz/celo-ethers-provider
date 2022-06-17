import {
  CeloJsonRpcProvider,
  StaticCeloJsonRpcProvider,
  CeloWebsocketProvider,
} from '../src.ts';
import { ALFAJORES_FORNO, ALFAJORES_FORNO_WS } from './consts';

async function testJsonRpc() {
  const provider = new CeloJsonRpcProvider(ALFAJORES_FORNO);
  const num = await provider.getBlockNumber();
  await provider.getBlock(num);
  console.log('Json RPC Ok');
}

async function testStaticJsonRpc() {
  const provider = new StaticCeloJsonRpcProvider(ALFAJORES_FORNO);
  const num = await provider.getBlockNumber();
  await provider.getBlock(num);
  console.log('Static Json RPC Ok');
}

async function testWsRpc() {
  const provider = new CeloWebsocketProvider(ALFAJORES_FORNO_WS);
  const num = await provider.getBlockNumber();
  await provider.getBlock(num);
  console.log('Websocket Ok');
}

async function main() {
  await testJsonRpc();
  await testStaticJsonRpc();
  await testWsRpc();
  process.exit(0);
}

main()
  .then(() => console.info('Get blocks test complete'))
  .catch(console.error);
