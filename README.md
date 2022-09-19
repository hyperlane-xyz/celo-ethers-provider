
# Celo Ethers Provider

This library exports three Ethers.js JSON RPC providers: `CeloJsonRpcProvider`, `StaticCeloJsonRpcProvider`, and `CeloWebsocketProvider`. These providers handle the Celo's block format incompatibility to make them usable with the rest of Ethers.js

## Usage

`yarn install @hyperlane-xyz/celo-ethers-provider`

```js
import { StaticCeloJsonRpcProvider } from 'hyperlane-xyz/celo-ethers-provider';

const provider = new StaticCeloJsonRpcProvider(rpcUrl);
```

## Alternatives

For Celo providers that enable usage of Celo-specific transaction fields, like `feeCurrency`, see [celo-ethers-wrapper](https://github.com/celo-tools/celo-ethers-wrapper).

## Sources

Significant code has been reproduced from
[https://github.com/ethers-io/ancillary-exchain]. Files containing reproduced
code have been tagged with the appropriate license information.
