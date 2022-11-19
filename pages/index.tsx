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
          <h1 className="text-white text-4xl font-bold mt-[200px]">
            sebastián papanicolau 🙋‍♂️
          </h1>
          <h5 className="text-white mb-9 ">trying out cool stuff</h5>
        </div>
        <Sections />
      </div>
    </>
  );
}
