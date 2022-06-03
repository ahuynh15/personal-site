import { Sidebar } from "@/Common";
import Head from "next/head";
import { HomePageWrapper } from "@/components/HomePageWrapper";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alvin Huynh</title>
        <meta name="description" content="Alvin Huynh's Personal Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-full">
        <div className="ml-16">
          <HomePageWrapper />
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>

        <Sidebar
          anchors={[
            { name: "About", target: "about" },
            { name: "Skills", target: "skills" },
            { name: "Experience", target: "experience" },
            { name: "Education", target: "education" },
            { name: "Contact", target: "contact" },
          ]}
        />
      </main>
    </div>
  );
}
