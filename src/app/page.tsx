import Image from "next/image";
import Page from "./(protected)/dashboard/page";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <Link href={'/dashboard'}>
        <div className="w-60 py-20 bg-slate-300 text-center rounded-2xl text-4xl">
          Enter App
        </div>
      </Link>

    </main>
  );
}
