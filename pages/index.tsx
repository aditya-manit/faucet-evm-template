import Head from "next/head";
import Faucet from "../components/Faucet";

export default function Home() {
  return (
    <>
      <Head>
        <title>kingsuper_5818940-1 Faucet</title>
        <meta name="description" content="Testnet Facuet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <Faucet />
      </main>
    </>
  );
}
