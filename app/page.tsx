"use client";


import { Footer, Navbar } from "@/components";
import CustomButton from "@/components/UI/button/CustomButton";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      setLoaded(true);
    }, [])

  return (
    <>
      {
        loaded ? (
          <>
            <Navbar/>
            <main className="min-h-screen m-auto pt-32 px-8 pr-12">
              <section className="w-full h-fit">
                <div className="w-full py-4 flex gap-x-5 flex-wrap max-md:flex-col">
                  <div className="w-[70%] max-md:w-full">
                    <h1 className="text-[2.8rem] font-bold font-poppins leading-tight md:text-[3.8rem]">I am A 16 year old <br className="max-md:hidden"/> <b className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-600">Front-End Web Dev</b></h1>
                    <h2 className="text-zinc-400 font-nunito text-lg md:text-xl my-5">Check Out My Socials, Experiences And Much More!</h2>

                    <div className="flex flex-wrap items-center gap-5 mt-12">
                      <Link href="/projects">
                        <CustomButton title="Projects" image={true} classNames="bg-indigo-500 shadow-zinc-900 border-black text-[1.2rem] hover:translate-y-[10px]"/>
                      </Link>
                      <Link href="/experience">
                        <CustomButton title="Experience" image={true} classNames="bg-purple-700 shadow-purple-100 border-black text-[1.2rem] hover:translate-y-[10px]"/>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              <section className="w-full h-fit my-[12rem]">
                <div className="w-full h-fit flex items-center justify-between gap-5 flex-wrap-reverse">
                  <div className="w-[45%] max-[520px]:w-full">
                    <p className="text-lg md:text-xl">My name is <b className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-500">Hagop Hovaguimian</b>. I'm A 16 year old Front-End Web Developer. I am born in Lebanon but currently in Armenia.</p>
                  </div>
                  <div className="w-fit">
                    <Image src="/me.png" width={180} height={180} className="!w-[180px] !h-[180px] rounded-[50%]" alt="Me"/>
                  </div>
                </div>
              </section>
            </main>
            <Footer/>
          </>
        ) : (
          <div className="w-full min-h-screen flex items-center justify-center">
            <div className="w-full h-fit flex items-center justify-center flex-col gap-y-4">
              <div className="w-fit relative animate-bounce">
                <Image src="/HAGOP.png" width={228} height={228} priority className="object-contain" alt="Loading Image"/>
              </div>
              {/*  */}
              {/*  */}
              <div className="w-full h-fit text-center">
                <p className="text-xl">Loading...</p>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
}
