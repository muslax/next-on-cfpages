// import Image from "next/image";
// import styles from "./page.module.css";

async function getData() {
  const rs = await fetch("https://api.katra.web.id/kata/dengan/ab");
  return await rs.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="">
      <main className="">
        <h1 className="x">Next.js 13 on CF Pages!</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </main>
    </div>
  );
}
