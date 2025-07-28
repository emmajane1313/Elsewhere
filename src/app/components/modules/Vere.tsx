import Image from "next/image";
import { FunctionComponent } from "react";

const Vere: FunctionComponent = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 lg:grid-rows-1 w-full text-center text-black text-xl md:text-2xl lg:text-3xl font-serif">
        <div className="bg-white flex text-left text-[5vw] sm:text-[2.2vw] items-center p-8 font-one ">
          Booming with gold rush aftershocks. Vere from Madrid to Australia.
          Leaves Spain in 1863. Thomas sails at twenty. Collapsing behind him:
          Carlist wars, royal coups, economic rot.
        </div>

        <div className="bg-rojo flex text-justify text-[5vw] sm:text-[2.2vw] items-center p-8 font-one ">
          Vere. A classic French Norman name, knightly, patrician. From the town
          of Ver in Normandy. Brought to England in 1066 by Aubrey de Vere,
          riding with William the Conqueror.
        </div>

        <div className="bg-black flex text-right text-[5vw] sm:text-[2.2vw] items-center p-8 font-one text-white">
          But what was a Vere doing in Madrid by 1825? After the Peninsular Wars, stationed there, or stranded. Identity anxiety soaks in. The Vere drops to Lee only. Reinvents. Migrates.
        </div>
      </div>
      <div className="relative w-full h-96 md:h-screen flex py-10 px-3">
        <div className="relative mix-blend-screen w-full h-full flex">
          <Image
            src={"/images/norman.png"}
            alt="Norman Shield"
            objectFit="contain"
            draggable={false}
            layout="fill"
          />
        </div>
      </div>
      <div className="bg-white text-rojo flex text-justify text-[5vw] sm:text-[2.2vw] items-center p-8 font-konB w-full h-fit">
        A full colonial life claimed. To marry the daughter of a transported
        convict on the Cook Vessel, and on the other, the surviving child of the
        Layton Plague, under the Poor Law migration.
      </div>
    </>
  );
};

export default Vere;
