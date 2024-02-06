import Image from "next/image";
import PageIndicator from "./components/PageIndicator";
import FeaturedSection from "./components/FeaturedSection";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="bg-[url('./assets/herobg1.jpg')] bg-top bg-cover w-full h-screen py-16 px-32 flex flex-col relative">
        <NavBar/>
        <div className="flex flex-col flex-1 justify-center items-center mb-16">
          <div className="text-4xl text-black font-semibold mb-4">Your Adventure Begins Here!</div>
          <div className="text-lg text-color3 font-semibold mb-6">From Imagination to Reality.</div>
          <Image width={45} height={40} alt="" src={require('./assets/arrow1.png')}/>
        </div>
        <div className="flex gap-5 justify-center items-center -rotate-90 absolute right-[-5rem] top-[14rem]">
          <div className="h-[1px] w-[8rem] bg-color3"></div>
          <div className="text-color3 text-sm font-semibold">ICELAND NATIONAL LAKE</div>
        </div>
        <PageIndicator/>
      </div>
      <FeaturedSection/>
      <Footer/>
    </main>
  );
}
