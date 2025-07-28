import Image from "next/image";
import { FunctionComponent, JSX } from "react";

const Staff: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <div className="bg-white relative w-full flex min-h-screen text-black py-32 px-4 text-left text-[2vw] flex-col justify-between font-day">
        <div className="relative w-full h-full flex flex-row gap-3 justify-between">
          <div className="relative flex max-w-2xl h-fit">
            Cogs in the booming infrastructure push. From Tile Makers, to Sewage
            Workers, to Tramway Motormen, to Coal Miners, to Green Grocers.
            Mercians of Staffordshire. ARP. Stray Horses Fine.
          </div>

          <div className="flex relative w-fit h-fit top-20">
            <div className="relative w-[45vw] h-[25vw]">
              <Image
                src="/images/emmajanemackinnonlee_wind.png"
                alt="Emma-Jane MacKinnon-Lee Portrait Wind"
                layout="fill"
                objectFit="cover"
                draggable={false}
              />
            </div>
          </div>
        </div>

        <div className="relative w-full h-full flex flex-row gap-3 justify-between">
          <div className="flex relative w-fit h-fit top-20">
            <div className="relative w-[45vw] h-[25vw]">
              <Image
                src="/images/emmajanemackinnonlee_wind.png"
                alt="Emma-Jane MacKinnon-Lee Portrait Wind"
                layout="fill"
                objectFit="cover"
                draggable={false}
              />
            </div>
          </div>
          <div className="relative flex  max-w-4xl h-fit top-60">
            Warm breath across apple skin, soft flannel working in circles until
            the surface gleams. Hold to light, rotate slow, best fruit forward
            in perfect pyramids, polished to mirror shine.
          </div>
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
      <div className="relative w-full text-[10vw] h-fit flex justify-center text-center font-konB">
        Trenchard’s Brats
      </div>
      <div className="relative w-full h-fit justify-center flex bg-white py-20 text-black">
        <div className="flex absolute w-fit h-fit -top-10 left-4 z-10">
          <div className="relative w-40 h-40">
            <Image
              src="/images/emmajanemackinnonlee_wind.png"
              alt="Emma-Jane MacKinnon-Lee Portrait Wind"
              layout="fill"
              objectFit="cover"
              draggable={false}
            />
          </div>
        </div>
        <div className="flex absolute w-fit h-fit top-4 right-4 z-10">
          <div className="relative w-40 h-40">
            <Image
              src="/images/emmajanemackinnonlee_wind.png"
              alt="Emma-Jane MacKinnon-Lee Portrait Wind"
              layout="fill"
              objectFit="cover"
              draggable={false}
            />
          </div>
        </div>
        <div className="relative max-w-2xl items-center justify-start h-fit flex flex-col gap-4">
          <div className="relative w-fit h-fit font-konR flex">
            At 16 years old, 1939 enlisted, Cecil entered the RAF’s Aircraft
            Apprentice Scheme. A prestigious but grueling track for working
            class boys with mechanical promise. Education, escape, and
            transformation. Metallurgy, wiring, mathematics. North Africa and
            Italy. 1943-1948. As the Allies pushed up the peninsula, the RAF
            followed. Cold weather engine overhauls. Replacing rivets. Replacing
            undercarriages. Dust choked hangars. Patching punctured hydraulics.
            Greasing pistons. Loud with labor.
          </div>
          <div className="relative w-fit h-fit flex text-[3vw] font-morgan">
            Aircraft engineering. Specialist skills. The backbone of RAF ground
            crews.
          </div>
          <div className="relative text-left text-[2vw] w-full h-fit font-konB text-rojo flex">
            Then return as a Mawby fruitiere.
          </div>
          <div className="relative w-fit h-fit font-konR flex">
            Warm breath across apple skin, soft flannel working in circles until
            the surface gleams. Hold to light, rotate slow, best fruit forward
            in perfect pyramids, polished to mirror shine.
          </div>
          <div className="relative w-fit h-fit font-konR flex">
            And Dorothy. Nurse at the North Staffordshire Royal Infirmary. A
            gold medal for all round performance in theory and practice. A
            respected identity. Duty and aspiration. A postwar girl seeks
            meaning in service. Some kind of freedom and independence. Her
            brother's letters from Cairo shaped familiar duty. And Guy’s
            Hospital by 1954. A leap across class and county lines. From
            Staffordshire grocer’s daughter to London-trained nurse. Then the
            1960s passenger list. Aboard the Iberia. £10 assisted passage
            scheme. Fremantle, Western Australia.
          </div>
        </div>
      </div>
    </>
  );
};

export default Staff;
