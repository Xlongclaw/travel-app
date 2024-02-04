import Image from "next/image";
import NavLinks from "./components/NavLinks";

export default function Home() {
  return (
    <main className="">
      <div className="bg-[url('./assets/herobg1.jpg')] bg-cente bg-cover w-full h-screen py-16 px-32">
        <div className="flex justify-between items-center">
          <div className="font-bold text-lg text-color1">Adventure Island.</div>
          <NavLinks/>
        </div>
      </div>
      <div className=""></div>
    </main>
  );
}