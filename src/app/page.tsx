"use client";

import Image from "next/image";
import React from "react";
import DraggableBox from "./components/modules/DraggableBox";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col text-white">
      <div className="relative w-full h-screen flex">
        <Image
          layout="fill"
          objectFit="cover"
          draggable={false}
          alt="Emma-Jane MacKinnon-Lee Portrait"
          src={"/images/emmajanemackinnonlee_portrait.png"}
        />
        <div className="absolute -bottom-[10vw] left-0 text-[11.9vw] flex h-fit font-klar z-10">
          OF ELSEWHERE
        </div>
      </div>
      {Array.from({ length: 7 }).map((_, i) => {
        return (
          <div
            key={i}
            className="w-full h-[1vw] flex flex-row justify-between items-center relative bg-black"
          >
            <video
              autoPlay
              loop
              muted
              poster={`/images/matrix.png`}
              draggable={false}
              className="absolute object-cover top-0 left-0 w-full h-full flex"
            >
              <source src="/videos/matrix.mp4" />
            </video>
            {Array.from({ length: 9 }).map((_, i) => {
              return (
                <div
                  key={i}
                  className={`relative flex h-full w-full ${
                    i % 2 == 0 && "bg-rojo"
                  }`}
                ></div>
              );
            })}
          </div>
        );
      })}

      <div className="h-screen w-full bg-black relative resistance-banner">
        <DraggableBox
          initialX={0}
          color="rojo"
          src={"emmajanemackinnonlee_blink"}
          initialY={0}
          initialPosition="5vw 5vh"
        />
        <DraggableBox
          color="white"
          src="emmajanemackinnonlee_wind"
          initialX={0}
          initialY={0}
          initialPosition="55vw 25vh"
        />
        <DraggableBox
          color="rojo"
          src="immigrationship"
          initialX={0}
          initialY={0}
          initialPosition="15vw 55vh"
        />
        <DraggableBox
          color="black"
          src="typewriter"
          initialX={0}
          initialY={0}
          initialPosition="65vw 35vh"
        />
        <div className="absolute bottom-1/2 rotate-90 font-klar -right-28 text-xs text-white">
          Will you carry these memories with reverence?
        </div>
      </div>
      <div className="w-full h-[1vw] flex flex-row justify-between items-center relative bg-black">
        <video
          autoPlay
          loop
          muted
          poster={`/images/matrix.png`}
          draggable={false}
          className="absolute object-cover top-0 left-0 w-full h-full flex"
        >
          <source src="/videos/matrix.mp4" />
        </video>
        {Array.from({ length: 9 }).map((_, i) => {
          return (
            <div
              key={i}
              className={`relative flex h-full w-full ${
                i % 2 == 0 && "bg-rojo"
              }`}
            ></div>
          );
        })}
      </div>
      <div className="h-fit flex w-full bg-black flex-col md:flex-row justify-between font-rom p-2 md:p-4">
        <div className="relative w-full h-full flex text-white text-[8vw] md:text-[11vw] leading-none">
          INDENT #127
        </div>
        <div className="relative w-full min-h-fit h-auto md:h-[32rem] items-end font-day flex text-white">
          <div className="relative flex w-fit text-sm md:text-xl lg:text-2xl h-fit">
            Two guards flank her now. Irons at the wrists catch courthouse
            light, throwing fractured reflections across stone walls. Surrey
            Assizes, 4th August 1831. Sweat, ink, and piss. Sentenced in
            seconds. Guilty. Stealing coins from employer. 7 years
            transportation. Age 18. Blue grey eyes. Fair to ruby. Few Freckles.
            Tattoo upper right arm - MKJS. It's time for the empire to clean the
            streets of London's poor. The gravel hits. Three months rotting in
            pre-departure limbo. Woolwich dockyard is only a few short weeks
            away.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 w-full h-fit text-center text-black text-white font-serif">
        <div className="bg-black text-white flex flex-col justify-center items-center w-full h-full">
          <div className="relative w-full h-full flex">
            <Image
              layout="fill"
              objectFit="cover"
              src={"/images/ship.png"}
              alt="Naval Eye"
              draggable={false}
            />
          </div>
        </div>
        <div className="flex gap-4 flex-col justify-center items-start p-4 md:p-8">
          <div className="text-[4vw] md:text-[5vw] font-konR w-full items-center justify-center h-fit text-center leading-[0.75] uppercase">
            Right then,
            <br />
            <br />
            you whores!
            <br />
            <br />
            <em className="text-rojo">On your feet Burns.</em>
            <br />
            <br />
            Shackle her tight.
            <br />
            <br />
            Into the Black Maria you thieving sluts!
          </div>
          <div className="text-xs md:text-sm w-fit h-fit font-hal flex text-rojo">
            Ann turns her head, just slightly, to look back at the city. She
            will never see it, nor her family, ever again.
          </div>
        </div>
        <div className="flex gap-4 flex-col justify-between items-start p-4 md:p-8 min-h-[50vh] md:min-h-screen text-left text-lg md:text-2xl lg:text-3xl">
          <div className="relative w-fit h-fit font-rom text-rojo text-[4vw] md:text-[5vw]">
            The Pyramus Vessel.
          </div>
          <div className="text-justify text-sm md:text-base">
            Departure: 8th October 1831. 149 women loaded in batches from 40
            different prisons. 8 women to a berth. 8 women to a single gallon of
            fresh water weekly for washing. Five grueling months.
          </div>
          <div className="relative w-fit text-justify h-fit font-sunday text-[3vw] md:text-[4vw]">
            The machinary of class punishment.
          </div>
          <div className="relative w-fit h-fit font-sunday text-justify text-sm md:text-base">
            The coded language of sailors drinking below deck that caused
            “mischief”. Rape, Harassment, Power Abuse. Arrival: 5th March 1832,
            New South Wales. Mrs Moore already pre-applied before the ship even
            landed. A convict asset at your service, assigned like stock.{" "}
          </div>
        </div>

        <div className="bg-black text-white flex flex-col justify-center items-center w-full h-full">
          <div className="relative w-full h-full flex">
            <Image
              layout="fill"
              objectFit="cover"
              src={"/images/ship.png"}
              alt="Naval Eye"
              draggable={false}
            />
          </div>
        </div>
      </div>
      <div className="bg-white text-black w-full flex flex-col p-2 md:p-4 gap-2">
        <div className="relative w-full flex leading-none text-justify text-[4vw] md:text-[5vw] font-konB text-black">
          Reassigned to a convict man at 24. Spinster on certificate. 1837. Arrested for drunkenness and
          public exposure. All that's left is defiance through self-destruction.
          Her name doesn't even make the death record. Thrown in an unmarked
          grave. 1855.
        </div>
        <div className="relative w-full flex leading-none text-justify text-[1.5vw] md:text-[2vw] font-konR text-black">
          God? Queen? Country? Australia never officially had African chattel
          slavery like the Caribbean or American South. It had a different,
          equally brutal system. Just bureaucratically rebranded: Convicts,
          Blackbirding, Stolen Generations.
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-6 md:grid-rows-3 lg:grid-rows-2 w-full min-h-screen text-center text-black text-xl md:text-2xl lg:text-3xl font-serif">
        <div className="bg-white flex gap-4 flex-col justify-center items-start p-8">
          <div className="text-4xl font-one flex w-fit h-fit text-left leading-tight">
            The Australian Colonial System teaches people to mistrust their
            complexity.
          </div>
          <span className="text-sm w-fit h-fit font-hal flex text-rojo">
            Depth can only be dangerous.
          </span>
        </div>
        <div className="bg-rojo flex flex-col justify-center items-center p-8">
          <div className="relative w-full h-full flex">
            <Image
              src={"/images/unicorn.png"}
              alt="Unicorn"
              objectFit="contain"
              draggable={false}
              layout="fill"
            />
          </div>
        </div>
        <div className="bg-black text-white flex flex-col justify-center items-start p-8 text-left">
          <div className="text-base leading-[1.3rem] flex font-klar">
            To bleach. To forget. To bleach. To forget. To bleach. To forget. To
            bleach. To forget. To bleach. To forget. To bleach. To forget. To
            bleach. To forget. To bleach. To forget. To bleach. To forget. To
            bleach. To forget. To bleach. To forget. To bleach. To forget. To
            bleach. To forget. To bleach. To forget. To bleach. To forget. To
            bleach. To forget. To bleach. To forget. To bleach. To forget. To
            bleach. To forget. To bleach. To forget. To bleach. To forget. To
            bleach. To forget. To bleach. To forget. To bleach. To forget. To
            bleach. To forget. To bleach. To forget. To bleach. To forget. To
            bleach. To forget. To bleach. To forget. To bleach. To forget.
          </div>
          <span className="text-sm text-rojo mt-4 flex font-hal">
            Until what remains fits neatly in the margins of someone else’s
            story.
          </span>
        </div>
        <div className="bg-rojo flex flex-col justify-center items-center p-8">
          <div className="text-[8rem] leading-none font-klar">*</div>
          <div className="text-[5rem] leading-none font-hal">
            That is not truth.
          </div>
          <span className="text-sm text-black mt-4 font-klar">
            Just colonial inheritance speaking.
          </span>
        </div>
        <div className="bg-black flex flex-col justify-between items-start p-8 text-left">
          <div className="text-[4rem] flex font-klar text-rojo">
            A fluid register persists.
          </div>
          <div className="relative flex text-xs text-white font-hal">
            I will never look away.
          </div>
        </div>
        <div className="bg-black text-white flex flex-col justify-center items-center w-full h-full">
          <div className="relative w-full h-full flex">
            <Image
              layout="fill"
              objectFit="cover"
              src={"/images/ship.png"}
              alt="Naval Eye"
              draggable={false}
            />
          </div>
        </div>
      </div>
      <div className="flex relative min-h-screen w-full">
        <Image
          src="/images/emmajanemackinnonlee_portraitwide.png"
          alt="Emma-Jane MacKinnon-Lee Portrait Wide"
          layout="fill"
          objectFit="cover"
          draggable={false}
        />
      </div>
      <div className="w-full bg-white text-black min-h-screen">
        <div className="flex flex-col items-center py-16 px-4">
          <h2 className="text-lg font-one mb-8 tracking-wider">
            Burned at the edge of a new world. Pressed into the skin. 23
            characters of immigrant bone.
          </h2>
        </div>

        <div className="relative overflow-hidden py-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin" style={{ animationDuration: "60s" }}>
              <Image
                src="/images/celtic.png"
                alt="Celtic Pattern"
                width={500}
                height={500}
                draggable={false}
                className="opacity-50"
              />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin" style={{ animationDuration: "20s" }}>
              <Image
                src="/images/celtic_gris.png"
                alt="Celtic Pattern"
                width={200}
                height={200}
                draggable={false}
                className="opacity-50"
              />
            </div>
          </div>

          <div className="text-center relative z-10">
            <h1 className="text-[14vw] font-morgan tracking-tight leading-none">
              EMMA-JANE MACKINNON-LEE
            </h1>
          </div>
        </div>
        <div className="w-full border-t border-rojo py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-8 mb-8 text-xs uppercase tracking-wider">
              {[
                "Disowned London Convict.",
                "Skye Highlander.",
                "Donegal Celt.",
                "French-Norman Madrileño.",
                "Ashkenazi Jew.",
                "Staffordshire Mercian.",
                "Australian.",
              ].map((item, i) => {
                return (
                  <div key={i} className="flex relative w-fit h-fit">
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="relative w-full text-center h-fit flex text-xs items-center justify-center text-black/70 pb-2">
          <div
            className="relative w-fit h-fit flex cursor-pointer hover:underline"
            onClick={() => window.open("https://syntheticfutures.xyz/")}
          >
            1998
          </div>
        </div>
      </div>
    </div>
  );
}
