import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, createClient, chain } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";

const alchemyId = process.env.ALCHEMY_ID;

// Choose which chains you'd like to show
const chains = [chain.mainnet, chain.polygon, chain.polygonMumbai, chain.arbitrum, chain.goerli];

const client = createClient(
  getDefaultClient({
    appName: "Auctioneer",
    alchemyId,
    chains,
  }),
);

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <WagmiConfig client={client}>
    <ConnectKitProvider theme="auto" mode="light" customTheme={{
      "--ck-connectbutton-background": "linear-gradient(180deg, rgba(143, 0, 255, 0.7) 0%, rgba(56, 112, 255, 0.7) 100%);",
      "--ck-connectbutton-color": "#fff",
      "--ck-connectbutton-hover-background": "rgba(56, 112, 255, 0.7)",
      "--ck-connectbutton-hover-color": "#fff",
      "--ck-connectbutton-font-size": "17px",
    }}
    >
    <Component {...pageProps} />
    </ConnectKitProvider>
    </WagmiConfig>
  </>
}

export default MyApp
