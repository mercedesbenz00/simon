import React, { createContext, useContext, useMemo } from 'react';
import {
  ConnectionProvider,
  WalletProvider,
  useWallet,
  WalletContextState,
} from '@solana/wallet-adapter-react';
import {
  PhantomWalletAdapter,
  SolletWalletAdapter,
  SolletExtensionWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

const WalletContext = createContext();

export const WalletProviderWrapper = ({ children }) => {
  const endpoint = useMemo(() => clusterApiUrl('devnet'), []);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolletWalletAdapter(),
      new SolletExtensionWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletContext.Provider value={useWallet()}>
          {children}
        </WalletContext.Provider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export const useWalletContext = () => useContext(WalletContext);
