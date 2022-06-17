import {
  CeloJsonRpcProvider,
  StaticCeloJsonRpcProvider,
  CeloWebsocketProvider,
} from '../src.ts';

async function testJsonRpc() {
  const provider = new CeloJsonRpcProvider(
    'https://alfajores-forno.celo-testnet.org',
  );
  const num = await provider.getBlockNumber();
  await provider.getBlock(num);
  console.log('Json RPC Ok');
}

async function testStaticJsonRpc() {
  const provider = new StaticCeloJsonRpcProvider(
    'https://alfajores-forno.celo-testnet.org',
  );
  const num = await provider.getBlockNumber();
  await provider.getBlock(num);
  console.log('Static Json RPC Ok');
}

async function testWsRpc() {
  const provider = new CeloWebsocketProvider(
    'wss://alfajores-forno.celo-testnet.org/ws',
  );
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
