import Image from "next/image";
import { FunctionComponent } from "react";

const Mac: FunctionComponent = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-50 flex flex-col justify-center items-center">
        <div className="flex items-center justify-center space-x-4 md:space-x-8 text-black font-konB">
          <span className="text-[8vw] md:text-[12vw]">M</span>
          <span className="text-[8vw] md:text-[12vw]">A</span>
          <span className="text-[8vw] md:text-[12vw]">C</span>
          <span className="text-[8vw] md:text-[12vw] text-rojo font-hal ml-12">
            F
          </span>
          <span className="text-[8vw] md:text-[12vw]">H</span>
          <span className="text-[8vw] md:text-[12vw]">I</span>
          <span className="text-[8vw] md:text-[12vw]">O</span>
          <span className="text-[8vw] md:text-[12vw]">N</span>
          <span className="text-[8vw] md:text-[12vw]">G</span>
          <span className="text-[8vw] md:text-[12vw]">H</span>
          <span className="text-[8vw] md:text-[12vw]">U</span>
          <span className="text-[8vw] md:text-[12vw]">I</span>
          <span className="text-[8vw] md:text-[12vw]">N</span>
        </div>
        <div className="flex items-center justify-center space-x-4 md:space-x-8 text-black font-konB leading-none">
          <span className="text-[8vw] md:text-[12vw]">M</span>
          <span className="text-[8vw] md:text-[12vw]">A</span>
          <span className="text-[8vw] md:text-[12vw]">C</span>
          <span className="text-[8vw] md:text-[12vw] text-rojo font-hal ml-12">
            K
          </span>
          <span className="text-[8vw] md:text-[12vw]">I</span>
          <span className="text-[8vw] md:text-[12vw]">N</span>
          <span className="text-[8vw] md:text-[12vw]">N</span>
          <span className="text-[8vw] md:text-[12vw]">O</span>
          <span className="text-[8vw] md:text-[12vw]">N</span>
        </div>
        <div className="relative w-full h-fit flex text-justify font-rom text-[3vw] bg-rojo text-black">
          At the edge of their past in smoke and ash. Feeling for warmth that's
          no longer there. House to house through Kilmuir, then Glendale, then
          Stenscholl. The last Skye born, 1857. All gone after the Highland
          Clearances. Before forced diaspora.
        </div>
        <div className="flex relative min-h-screen w-full">
          <Image
            src="/images/ship.png"
            alt="Emma-Jane MacKinnon-Lee Portrait Earrings"
            layout="fill"
            objectFit="cover"
            draggable={false}
          />
        </div>
        <div className="relative w-full h-fit flex flex-row p-4 gap-3 text-black font-day">
          <div className="relative w-fit h-fit flex">
            Mac Fhionghuin. The last born in Skye, 1857. Son of Fair Born. Isle
            of Skye. Isle of Mull. All gone after the Highland Clearances.
            Before forced diaspora. Generations between Kilmuir, Glendale, and
            Stenscholl.
            <br />
            <br />
            Severed from language, land, and ancestors. Violent and humiliating.
            <br />
            <br />
            To Birmingham, a loud, soot-choked industrial city. A place of
            rising opportunity. Carrying MacKinnon into a new world.
          </div>
          <div className="relative w-fit h-fit flex">
            Fought on Western Front, Gallipoli, Salonika, and Middle East
            campaigns. Highland Light Infantry. Tartan flashes, Highland
            bagpipes, and a proud martial tradition. 1914-1920. Highlanders were
            often placed in frontline assaults due to their regimental
            reputation. Once tied to the Jacobite Rebellion, now fighting for
            the Crown.
            <br />
            <br />
            Then to carry a Gaelic name like Mac Fhionghuin through anatomy
            halls in Dublin. Ronald MacDonald MacKinnon. Angus Ian MacKinnon.
            William Ewen MacKinnon.
            <br />
            <br />
            Licentiate of the Royal College of Physicians of Ireland. Licentiate
            of the Royal College of Surgeons in Ireland.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-6 md:grid-rows-3 lg:grid-rows-1 w-full min-h-80 text-center text-black text-xl md:text-2xl lg:text-3xl font-serif">
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
          <div className="bg-black flex flex-col justify-center items-center p-8">
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
        </div>
        <div className="relative w-full h-fit flex text-[6vw] text-justify justify-center px-2 font-konB text-black">
          Patience, Highlander.
          <br />
          You have done well. With heart, faith and steel. In the end there can
          be only one.
        </div>
        <div className="text-rojo relative flex px-1 text-[5vw] font-morgan">
          Although their remains rest in Australia, all 3 are Men of Skye.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-6 md:grid-rows-3 lg:grid-rows-1 w-full min-h-80 text-center text-black text-xl md:text-2xl lg:text-3xl font-serif">
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
          <div className="bg-black flex flex-col justify-center items-center p-8">
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
        </div>
        <div className="relative w-full h-fit flex text-black font-one text-justify p-1 text-lg">
          One of the oldest clans of the Isles. A branch of the Siol Alpin,
          those clans who claim descent from Alpin, father of Cináed mac Ailpín,
          first King of Scots. Fighting alongside Robert the Bruce during the
          Wars of Scottish Independence. Legend holds that Bruce found shelter
          with the clan while evading capture after the Battle of Dalrigh in
          1306 and awarded them land for their loyalty, bravery and protection.
          Aligned with the powerful Lords of the Isles, becoming hereditary
          abbots on Iona and defenders of Gaelic traditions. In the 18th
          century, they were ardent Jacobites: fighting at Culloden in 1746,
          where their support for Bonnie Prince Charlie led to severe reprisals.
          Their ancestral lands on Skye and Mull were gradually lost after the
          failed uprisings, and like many Highland clans, they were scattered by
          the Clearances.
        </div>
        <div className="relative bg-black w-full text-[3vw] font-klar p-2 flex">
          And the island tapestry spreads. MacDonald. And MacLeod. And even
          Norse-blooded Lamont, Argyll-forged. Cuimhnich Bàs Ailpein! Cuimhnich
          Bàs Ailpein! Cuimhnich Bàs Ailpein!
        </div>
      </div>
    </>
  );
};

export default Mac;
