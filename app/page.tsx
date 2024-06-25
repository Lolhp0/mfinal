"use client";


import { Footer, Navbar } from "@/components";
import Image from "next/image";
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
            <div style={{paddingTop: "10rem"}}></div>
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
