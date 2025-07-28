import Image from "next/image";
import { FunctionComponent } from "react";

const Shiels: FunctionComponent = () => {
  return (
    <>
      <div className="h-fit flex w-full bg-black flex-col md:flex-row justify-between font-rom p-2 md:p-4 gap-4">
        <div className="relative w-full h-full flex text-white text-[12vw] sm:text-[8vw]  leading-none mt-3">
          Ó Siadhail
        </div>
        <div className="relative w-full min-h-fit h-auto md:h-[32rem] items-end font-day flex text-white">
          <div className="relative flex w-fit text-xl lg:text-2xl h-fit">
            Keeper of bodies, keeper of words, the unbroken line between healing
            and remembering. Siadh meaning peace or síol meaning seed.
            Originally from Ulster, especially counties Donegal, Tyrone, Antrim.
            Hereditary physicians, scribes, or poets in Gaelic courts. Under the
            patronage of ancient dynasties like the O’Neills or O’Donnells.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 w-full h-fit text-center text-black text-white">
        <div className="flex justify-center bg-white items-center w-full h-full">
          <div className="relative w-full h-full flex">
            <Image
              layout="fill"
              objectFit="contain"
              src={"/images/scrolls.png"}
              alt="Scrolls"
              draggable={false}
            />
          </div>
        </div>
        <div className="flex gap-4 flex-col justify-center items-start p-4 md:p-8">
          <div className="text-[7vw] sm:text-[4vw] font-konR w-full items-center justify-center h-fit text-justify uppercase">
            Rent arrears during the hungry months when no coin could buy what
            the earth wouldn&lsquo;t give. Famine and land clearances. The long
            scattering.
          </div>
        </div>
        <div className="flex gap-4 flex-col justify-between items-start p-4 md:p-8 min-h-[50vh] md:min-h-screen text-left text-lg md:text-2xl lg:text-3xl font-day">
          <div className="text-justify text-sm md:text-3xl">
            Once echoed in bardic halls. Anglicized for colonial paperwork.
            Shiels under pressure to assimilate.
          </div>
          <div className="relative w-fit h-fit flex flex-col gap-3">
            <div className="relative w-fit h-fit font-rom text-rojo text-[4vw] md:text-[5vw]">
              And in 1947.
            </div>
            <div className="text-justify text-sm md:text-3xl font-hal">
              No surviving name passes to her children. Folded into the settler
              mainstream of Patrilineal erasure.
            </div>
          </div>
        </div>
        <div className="flex bg-white justify-center items-center w-full h-full">
          <div className="relative w-full h-full flex">
            <Image
              layout="fill"
              objectFit="contain"
              src={"/images/harp.png"}
              alt="Harp"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shiels;
