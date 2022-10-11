import Head from "next/head";
import { Sections } from "../components/sections";

export default function Home() {
  return (
    // 1000px container
    <>
      <Head>
        <title>Sebastián Papanicolau</title>
        <meta name="description" content="Sebastián Papanicolau's Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={"w-[1000px] mx-auto max-w-full"}>
        <div className=" place-content-center py-auto ">
          {/* vertical align center */}
          <h1 className="text-white font-bold text-4xl text-center h-[300px] flex items-center justify-center">
            Sebastián Papanicolau
          </h1>
        </div>
        <Sections />
      </div>
    </>
  );
}
