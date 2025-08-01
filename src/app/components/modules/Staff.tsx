import Image from "next/image";
import { FunctionComponent, JSX } from "react";

const Staff: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <div className="bg-white relative w-full flex  lg:min-h-screen text-black py-6 sm:py-16 md:py-32 px-4 text-left text-[6vw] sm:text-[2vw] flex-col justify-between font-day">
        <div className="relative w-full h-full flex flex-col sm:flex-row gap-3 justify-center items-center sm:justify-between">
          <div className="relative flex max-w-2xl h-fit">
            Cogs in the booming infrastructure push. From Tile Makers, to Sewage
            Workers, to Tramway Motormen, to Coal Miners, to Green Grocers.
            Mercians of Staffordshire. ARP. Stray Horses Fine.
          </div>

          <div className="flex relative w-full sm:w-fit h-fit sm:top-[2vw]">
            <div className="relative h-72 w-full sm:w-[45vw] sm:h-[25vw]">
              <Image
                src="/images/industrialism.png"
                alt="Industrialism"
                layout="fill"
                objectFit="contain"
                draggable={false}
              />
            </div>
          </div>
        </div>

        <div className="relative w-full h-full flex flex-col sm:flex-row gap-3 justify-center items-center sm:justify-between">
          <div className="flex sm:order-1 order-2 relative w-full sm:w-fit h-fit sm:top-[3vw]">
            <div className="relative w-full h-72 sm:w-[45vw] sm:h-[25vw]">
              <Image
                src="/images/grocer.png"
                alt="Grocer"
                layout="fill"
                objectFit="contain"
                draggable={false}
              />
            </div>
          </div>
          <div className="relative sm:order-2 order-1 flex max-w-4xl h-fit sm:top-[10vw]">
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
      <div className="relative w-full h-fit justify-center flex flex-col bg-white py-2 sm:py-20 text-black lg:items-start items-center">
        <div className="flex relative lg:absolute w-full sm:w-fit h-fit lg:top-1/2 lg:left-4 order-3">
          <div className="relative w-full sm:w-72 h-72">
            <Image
              src="/images/portrait.png"
              alt="Portrait"
              layout="fill"
              objectFit="contain"
              draggable={false}
            />
          </div>
        </div>
        <div className="flex relative lg:absolute w-full sm:w-fit h-fit lg:top-4 lg:right-4 order-1">
          <div className="relative w-full sm:w-72 h-72">
            <Image
              src="/images/raf.png"
              alt="RAF"
              layout="fill"
              objectFit="contain"
              draggable={false}
            />
          </div>
        </div>
        <div className="relative max-w-sm md:max-w-xl lg:max-w-2xl items-center justify-start h-fit flex flex-col gap-2 md:gap-3 lg:gap-4 mx-auto z-10 order-2 px-2">
          <div className="relative w-fit h-fit font-konR flex sm:text-base  text-xl">
            At 16 years old, 1939 enlisted, Cecil entered the RAF’s Aircraft
            Apprentice Scheme. A prestigious but grueling track for working
            class boys with mechanical promise. Education, escape, and
            transformation. Metallurgy, wiring, mathematics. North Africa and
            Italy. 1943-1948. As the Allies pushed up the peninsula, the RAF
            followed. Cold weather engine overhauls. Replacing rivets. Replacing
            undercarriages. Dust choked hangars. Patching punctured hydraulics.
            Greasing pistons. Loud with labor.
          </div>
          <div className="relative w-fit h-fit flex text-[8vw] sm:text-[3vw] font-morgan">
            Aircraft engineering. Specialist skills. The backbone of RAF ground
            crews.
          </div>
          <div className="relative text-left text-[6vw] sm:text-[2vw] w-full h-fit font-konB text-rojo flex">
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
            brother&lsquo;s letters from Cairo shaped familiar duty. And Guy’s
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
