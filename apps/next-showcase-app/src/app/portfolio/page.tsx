import Head from "next/head";
import User from "./user";


export default function FileBasedRouter() {
  return (
    <>
      <Head>
      <title>My page title</title>
      </Head>
      <User/>
    </>
  );
}
