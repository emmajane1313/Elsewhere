import Image from "next/image";
import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <>
      <div
        className="relative bg-white mt-12 w-full h-fit font-konB text-[5vw] sm:text-[3vw] leading-tight text-rojo overflow-hidden p-4 text-justify"
        style={{
          textJustify: "inter-word",
        }}
      >
        Convict pulse threads Ashkenazi marrow that braids through Gaelic
        lightning. And that Highlander granite flows through Staffordshire
        merchants into a Norman blade of Irish Scottish soil. And fiercer now,
        the pattern blazes electric. Ignite the live wires of my patchwork
        veins. So much voltage surging still, tomorrow. All this blood thunder,
        genetic memory, compressed and buried and renamed. I carry the weight
        forward. Every severed root, every salt crossed ocean. I am a Daughter
        of Skye, immigrant struck, Australia forged. This is the heart that
        dances within a million chambers.
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
          <div className="text-[3rem] sm:text-[4rem] flex font-klar text-rojo">
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
          src="/images/emmajanemackinnonlee_portraitfront.png"
          alt="Emma-Jane MacKinnon-Lee Portrait Front"
          layout="fill"
          objectFit="cover"
          draggable={false}
        />
      </div>
      <div className="w-full bg-white justify-between flex flex-col text-black min-h-screen relative">
        <div className="flex flex-col items-center py-16 px-4">
          <h2 className="text-lg font-one mb-8 tracking-wider">
            Burned at the edge of a new world. Pressed into the skin. 23
            characters of immigrant bone.
          </h2>
        </div>

        <div className="relative py-16">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="animate-spin" style={{ animationDuration: "60s" }}>
              <Image
                src="/images/celtic.png"
                alt="Celtic Pattern"
                width={500}
                height={500}
                draggable={false}
                className="opacity-50 w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[500px] h-auto"
              />
            </div>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="animate-spin" style={{ animationDuration: "20s" }}>
              <Image
                src="/images/celtic_gris.png"
                alt="Celtic Pattern"
                width={200}
                height={200}
                draggable={false}
                className="opacity-50 w-[32vw] sm:w-[24vw] md:w-[20vw] lg:w-[16vw] xl:w-[200px] h-auto"
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
                "Disowned London Convicts.",
                "Skye Highlanders.",
                "Donegal Celts.",
                "French-Norman Madrileños.",
                "Ashkenazi Jews.",
                "Staffordshire Mercians.",
                "Australians.",
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
    </>
  );
};

export default Footer;
