import Link from "next/link";

export default async function Scientist() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intenional delay");
    }, 1000);
  });
  return (
    <section className="w-full h-fit bg-[#f8f4e1] text-black">
      <main className="w-full h-fit ">
        <h1>hallo semua</h1>
        <Link href="/product">kembali</Link>
      </main>
    </section>
  );
}
