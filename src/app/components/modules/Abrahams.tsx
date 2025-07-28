import Image from "next/image";
import { FunctionComponent } from "react";

const Abrahams: FunctionComponent = () => {
  return (
    <>
     <div className="flex relative min-h-screen w-full">
        <Image
          src="/images/immigrant.png"
          alt="Emma-Jane MacKinnon-Lee Portrait Earrings"
          layout="fill"
          objectPosition="top"
          objectFit="cover"
          draggable={false}
        />
      </div>
      <div className="relative bg-rojo flex text-white font-morgan p-4 text-[7vw] sm:text-[4vw] text-justify">
        Unmarried Male Immigrant. Abraham Abrahams. Brought out by Marshall.
        Native of London. Son of Israel and Sophia. 21 years. Good health.
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
      <div className="relative w-full text-justify justify-center h-fit flex bg-white text-black font-konB text-[5vw] sm:text-[2.8vw]">
        Lord Western. Port Jackson, Sydney, New South Wales. 3 October 1840.
        Bounty Immigrant. Boot and Shoemaker.
      </div>
      <div className="bg-white relative w-full flex h-fit lg:min-h-screen text-black py-32 px-4 text-left text-[4vw] sm:text-[2vw] flex-col justify-between font-day">
        <div className="relative w-full h-full flex flex-col sm:flex-row gap-3 justify-between">
          <div className="relative flex max-w-2xl h-fit">
            Working-class Jewish immigrants from London found their footing in
            the leather and shoe trades. The earliest threads of a colonial
            fashion industry down under. An explained connection to Michael
            Hyam, the London born bootmaker and community elder who offered both
            soles and blessings. A trade connection, a cultural anchor. And
            under Hyam’s guidance, Abraham marries Rachel at the Five Islands.
          </div>

          <div className="flex relative w-full sm:w-fit h-fit sm:top-20">
            <div className="relative h-72 w-full sm:w-[45vw] sm:h-[25vw]">
              <Image
                src="/images/bootmaker.png"
                alt="Bootmaker"
                layout="fill"
                objectFit="contain"
                draggable={false}
              />
            </div>
          </div>
        </div>

        <div className="relative w-full h-full flex flex-col sm:flex-row gap-3 justify-between mb-12">
          <div className="flex relative w-full sm:w-fit h-fit sm:top-20">
            <div className="relative h-72 w-full sm:w-[45vw] sm:h-[25vw]">
              <Image
                src="/images/registration.png"
                alt="Registration"
                layout="fill"
                objectFit="contain"
                draggable={false}
              />
            </div>
          </div>
          <div className="relative flex max-w-4xl h-fit sm:top-60">
            A later life mystery. A some point, a disappearance from the Sydney
            records. Rachel remains listed alone in the directories for decades.
            A re-recorded name from Abraham to Joseph. Maybe he died between
            births and directories. Maybe he stepped out and never returned. A
            silence sewn into the ancestry line.
          </div>
        </div>
      </div>
    </>
  );
};

export default Abrahams;
