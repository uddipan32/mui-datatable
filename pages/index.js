import Head from "next/head";
import { useState, useRef } from "react";
import MyDataTable from "../dist";

export default function Home() {
  const tableRef = useRef();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`main`}>
        <MyDataTable
          tableRef={tableRef}
          columns={[
            {
              id: "name",
              title: "Name",
            },
          ]}
        />
      </main>
    </>
  );
}
