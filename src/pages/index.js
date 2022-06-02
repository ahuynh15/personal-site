import Head from "next/head";
import HomePageWrapper from "./home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alvin Huynh</title>
        <meta name="description" content="Alvin Huynh's Personal Site" />
        <link rel="icon" href="/favicon.ico" />

        {/* Google Font Import */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Questrial&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <HomePageWrapper />
      </main>
    </div>
  );
}
