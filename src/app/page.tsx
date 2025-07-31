"use client";

import Image from "next/image";
import React from "react";
import DraggableBox from "./components/modules/DraggableBox";
import Footer from "./components/modules/Footer";
import Burns from "./components/modules/Burns";
import Kil from "./components/modules/Kil";
import Haines from "./components/modules/Haines";
import Staff from "./components/modules/Staff";
import Robbins from "./components/modules/Robbins";
import Vere from "./components/modules/Vere";
import Mac from "./components/modules/Mac";
import Abrahams from "./components/modules/Abrahams";
import Shiels from "./components/modules/Shiels";
import MusicaPlayer from "./components/modules/Musica";

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

      <div className="h-screen w-full bg-black relative resistance-banner overflow-hidden">
        <div className="absolute top-0 left-0 opacity-70 flex w-full h-full">
          <Image
            layout="fill"
            objectFit="cover"
            src={"/images/velvet.png"}
            alt="Velvet"
            draggable={false}
          />
        </div>
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
      <Burns />
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
      <div className="flex relative min-h-screen w-full">
        <Image
          src="/images/emmajanemackinnonlee_portraitwide.png"
          alt="Emma-Jane MacKinnon-Lee Portrait Wide"
          layout="fill"
          objectFit="cover"
          draggable={false}
        />
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
      <Kil />
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
      <Haines />
      <div className="flex relative min-h-screen w-full">
        <Image
          src="/images/emmajanemackinnonlee_wind.png"
          alt="Emma-Jane MacKinnon-Lee Portrait Wind"
          layout="fill"
          objectFit="cover"
          draggable={false}
        />
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
      <Staff />
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
      <Robbins />
      <div className="flex relative min-h-screen w-full">
        <Image
          src="/images/emmajanemackinnonlee_portraitearrings.png"
          alt="Emma-Jane MacKinnon-Lee Portrait Earrings"
          layout="fill"
          objectFit="cover"
          draggable={false}
        />
      </div>
      <Vere />
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
      <Mac />
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
      <Shiels />
      <Abrahams />
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
      <Footer />
      <MusicaPlayer />
    </div>
  );
}
