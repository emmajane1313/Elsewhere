import Image from "next/image";
import { FunctionComponent } from "react";

const Kil: FunctionComponent = () => {
  return (
    <>
      <div className="relative bg-rojo flex text-white font-morgan p-4 text-[6vw] sm:text-[4vw] text-justify">
        Máire Áine Ní Ghiolla Ghannáin. But on a ship manifest, just write
        Kilgannon. Easier to file. Easier to forget. Donegal says she left.
        Sydney says she arrived. 1861 or earlier. A British Trident. And with
        all that hunger one might die mid crossing. Irish Catholic.
      </div>
      <div className="relative w-full text-center justify-center h-fit flex bg-white text-black font-konB text-[8.5vw]">
        Of Old Gaelic Order.
      </div>
      <div className="h-1 w-full flex bg-black"></div>
      <div className="relative w-full resistance-banner h-10 flex">
        <Image
          layout="fill"
          objectFit="cover"
          className="opacity-40"
          draggable={false}
          alt="Velvet"
          src={"/images/velvet.png"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 w-full h-fit text-center text-black text-white font-serif">
        <div className="flex gap-4 flex-col justify-center items-start p-4 md:p-8">
          <div className="text-[6vw] sm:text-[3vw] font-one w-full items-center justify-center h-fit text-left uppercase">
            Daughter of the devotee of Gannán. In these borderlands, The sí, The
            banshee. And did a Christian God force you underground? A kind of
            cutting. What did the Empire require you to write down? A holy well
            or a rag tree? Her name came from Tireragh. A Moy-side hill people.
          </div>
        </div>
        <div className="flex justify-center items-center bg-white w-full h-full">
          <div className="relative w-full h-full flex">
            <Image
              layout="fill"
              objectFit="contain"
              src={"/images/ragtree.png"}
              alt="Rag Tree"
              draggable={false}
            />
          </div>
        </div>
        <div className="flex gap-4 flex-col justify-between items-start p-4 md:p-8 bg-rojo text-white text-left text-lg md:text-2xl lg:text-3xl">
          <div className="relative w-fit h-fit flex flex-col gap-3">
            <div className="relative w-fit h-fit font-rom text-black text-[4vw] md:text-[5vw]">
              Abhainn na Muaidhe.
            </div>
            <div className="text-justify text-sm md:text-3xl">
              The River of the noble one. A heart of Gaelic memory.
            </div>
          </div>

          <div className="relative w-fit h-fit font-sunday text-justify text-sm md:text-3xl">
            And I almost missed the Gaelic in Ballina. Béal an Átha. So close to
            Lennox Head. A mouth in New South Wales. Another in Killala Bay.
            Maybe prison for theft in Darlinghurst, 1874. But the ink runs, and the clerk&lsquo;s cursive is just too tight. 
            You took the name Abrahams. A new story. Then childbirth took you.
            Age 27. 1882.
          </div>
        </div>
        <div className="bg-white text-white flex justify-center items-center w-full h-full">
          <div className="relative w-full h-full flex">
            <Image
              layout="fill"
              objectFit="contain"
              src={"/images/river.png"}
              alt="The River of the Noble One"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Kil;
