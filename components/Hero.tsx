"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";
type Props = { pageInfo: PageInfo };

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hello, I'm ${pageInfo.name}`,
      "FullStackAdventurer.tsx",
      "<AndCoffeeAddictToo/>☕",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col  items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="bottom-8 relative">
        <img
          className=" rounded-full h-64 w-64 mx-auto "
          src={"/images/profile.jpeg"}
          alt=""
        />
      </div>
      <div className="z-20">
        <h2 className="text-md uppercase text-white font-bold pb-2 tracking-[10px] md:tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
