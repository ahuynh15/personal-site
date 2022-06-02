import Head from "next/head";
import HomePageWrapper from "./home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alvin Huynh</title>
        <meta name="description" content="Alvin Huynh's Personal Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomePageWrapper />
      </main>
    </div>
  );
}
