import Image from "next/image";
import { FunctionComponent } from "react";

const Burns: FunctionComponent = () => {
  return (
    <>
      <div className="h-fit flex w-full bg-black flex-col md:flex-row justify-between font-rom p-2 md:p-4">
        <div className="relative w-full h-full flex text-white text-[8vw] md:text-[11vw] leading-none">
          INDENT #127
        </div>
        <div className="relative w-full min-h-fit h-auto md:h-[32rem] items-end font-day flex text-white">
          <div className="relative flex w-fit text-sm md:text-xl lg:text-2xl h-fit">
            Two guards flank her now. Iron at the wrists catches courthouse
            light, throwing fractured reflections across stone walls. Surrey
            Assizes, 4th August 1831. Sweat, ink, and piss. Sentenced in
            seconds. Guilty. Stealing coins from employer. 7 years
            transportation. Age 18. Blue grey eyes. Fair to ruby. Few Freckles.
            Tattoo upper right arm - MKJS. It&lsquo;s time for the empire to
            clean the streets of London&lsquo;s poor. The gravel hits. Three
            months rotting in pre-departure limbo. Woolwich dockyard is only a
            few short weeks away.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 w-full h-fit text-center text-black text-white font-serif">
        <div className="flex justify-center bg-white items-center w-full h-full">
          <div className="relative w-full h-full flex">
            <Image
              layout="fill"
              objectFit="contain"
              src={"/images/blackmaria.png"}
              alt="Black Maria"
              draggable={false}
            />
          </div>
        </div>
        <div className="flex gap-4 flex-col justify-center items-start p-4 md:p-8">
          <div className="text-[10vw] md:text-[5vw] font-konR w-full items-center justify-center h-fit text-center leading-[0.75] uppercase">
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
          <div className="text-center text-[3vw] sm:text-[1vw] w-full justify-center h-fit font-hal flex text-rojo mt-3">
            Ann turns her head, just slightly, to look back at the city. She
            will never see it, nor her family, ever again.
          </div>
        </div>
        <div className="flex gap-4 flex-col justify-between items-start p-4 md:p-8 min-h-[50vh] md:min-h-screen text-left text-lg md:text-2xl lg:text-3xl">
          <div className="relative w-fit h-fit font-rom text-rojo text-[7vw] md:text-[5vw]">
            The Pyramus Vessel.
          </div>
          <div className="text-justify text-sm md:text-3xl">
            Departure: 8th October 1831. 149 women loaded in batches from 40
            different prisons. 8 women to a berth. 8 women to a single gallon of
            fresh water weekly for washing. Five grueling months.
          </div>
          <div className="relative w-fit text-justify h-fit font-sunday text-[6vw] md:text-[4vw]">
            The machinary of class punishment.
          </div>
          <div className="relative w-fit h-fit font-sunday text-justify text-sm md:text-3xl">
            The coded language of sailors drinking below deck that caused
            “mischief”. Rape, Harassment, Power Abuse. Arrival: 5th March 1832,
            New South Wales. Mrs Moore already pre-applied before the ship even
            landed. A convict asset at your service, assigned like stock.{" "}
          </div>
        </div>
        <div className="flex justify-center bg-white items-center w-full h-full">
          <div className="relative w-full h-full flex">
            <Image
              layout="fill"
              objectFit="contain"
              src={"/images/grave.png"}
              alt="Unmarked Grave"
              draggable={false}
            />
          </div>
        </div>
      </div>
      <div className="bg-white text-black w-full flex flex-col p-2 md:p-4 gap-2">
        <div className="relative w-full flex leading-none text-justify text-[8vw] md:text-[5vw] font-konB text-black">
          Reassigned to a convict man at 24. Spinster on certificate. 1837.
          Arrested for drunkenness and public exposure. All that&lsquo;s left is
          defiance through self-destruction. Her name doesn&lsquo;t even make
          the death record. Thrown in an unmarked grave. 1855.
        </div>
        <div className="relative w-full flex leading-none text-justify text-[4vw] md:text-[2vw] font-konR text-black">
          God? Queen? Country? Australia never officially had African chattel
          slavery like the Caribbean or American South. It had a different,
          similarly brutal system. Just bureaucratically rebranded: Convicts,
          Blackbirding, Stolen Generations.
        </div>
      </div>
    </>
  );
};

export default Burns;
