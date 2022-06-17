import { Wallet } from 'ethers';
import { StaticCeloJsonRpcProvider } from '../src.ts';

import { ALFAJORES_FORNO, CELO_DERIVATION_PATH } from './consts';

export function getSigner() {
  console.info('Getting signer');
  const provider = new StaticCeloJsonRpcProvider(ALFAJORES_FORNO);
  const mnemonic = process.env.MNEMONIC;
  if (!mnemonic) throw new Error('No MNEMONIC provided in env');
  const wallet = Wallet.fromMnemonic(mnemonic, CELO_DERIVATION_PATH).connect(
    provider,
  );
  console.info('Signer and provider ready');
  return wallet;
}
