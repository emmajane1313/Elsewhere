import Image from "next/image";
import { FunctionComponent } from "react";

const Robbins: FunctionComponent = () => {
  return (
    <>
      <div className="relative w-full h-fit flex items-center flex-col gap-4 bg-white">
        <div className="flex items-center justify-center space-x-4 md:space-x-8 text-black font-konB">
          <span className="text-[8vw] md:text-[12vw]">r</span>
          <span className="text-[8vw] md:text-[12vw]">o</span>
          <span className="text-[8vw] md:text-[12vw]">b</span>
          <span className="text-[8vw] md:text-[12vw] text-rojo font-hal">
            b
          </span>
          <span className="text-[8vw] md:text-[12vw]">i</span>
          <span className="text-[8vw] md:text-[12vw]">n</span>
          <span className="text-[8vw] md:text-[12vw]">s</span>
        </div>
        <div className="relative w-fit text-[3vw] h-fit flex text-rojo font-hal">
          ...Administrative vandalism?
        </div>
        <div className="relative w-full justify-center font-konM text-black max-w-2xl flex">
          Mistype that extra b! Convict names don't merit imperial accuracy.
          Thirteen years old. Disowned by Parents. Bristol City Quarter
          Sessions. Charged with stealing a picture. Grey eyes, brown hair,
          smallpox scars. Right arm, anchor and a mermaid carved in ink.
        </div>
        <div className="flex relative h-[40vw] w-[50vw]">
          <Image
            src="/images/emmajanemackinnonlee_wind.png"
            alt="Emma-Jane MacKinnon-Lee Portrait Wind"
            layout="fill"
            objectFit="cover"
            draggable={false}
          />
        </div>
        <div className="text-center max-w-sm h-fit flex text-black font-day text-sm my-4">
          Marched in irons from the prison hulk.
          <br />
          <br />
          Bussorah Merchant. 24th March 1828. England to New South Wales. One
          hundred seventy convicts packed below deck. Dysentery pooling in the
          hold. Rats feeding on open sores. Bilge water and blood sloshing
          underfoot.
          <br />
          <br />
          Arrival July 1828.
        </div>
        <div className="font-konB relative w-full h-fit text-justify text-rojo text-[7vw]">
          The Carter’s Barracks Boys.{" "}
          <a className="text-black">
            Institutionalisation, correction and reform of convict boys.
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 font-day gap-8 max-w-7xl w-full text-black text-sm my-4">
          <div className="text-center">
            Carters' Barracks assigns him. Brutal school for boys. Leather
            trades and leather lashes. Juvenile reform through birch switches
            cutting skin.
            <br />
            <br />
            The first colonial prototype. The same ideological and practical DNA
            of what would later force institutionalise Aboriginal boys. Forced
            Bible readings, rote learning, hymns, manual labour.
            <br />
            <br /> Correctional floggings. Corporal punishment under the veil of
            moral reform. Turn them into useful imperial subjects already.
          </div>
          <div className="text-center">
            If you want to cure a boy thief, send him where there is nothing to
            steal. Generally thieves from the time they could walk or talk.
            <br />
            <br />
            Will the prayers they are compelled to say, and the hymns they are compelled to sing… accomplish such a moral phenomenon? It is imbecility of mind alone which can believe such a thing.
            <br />
            <br />
            Send them into the interior. When their parents come to know their offspring will be lost in the interior of Botany Bay… they will hesitate to continue to breed up their children to the trade of thieving.
          </div>
          <div className="text-center">
            Then assigned Burns, Spinster, by the Colony. And then reassigned another
            quickly again, within a few months of the passing.
            <br />
            <br />
            And the son, the second. Breeds game cocks. Drinks down the wages.
            Flogs the children with cold water and switches to drive out all
            that sin.
            <br />
            <br />
            Religion, fear, control. Well done, Crown. You stitched it in tight.
          </div>
        </div>
      </div>
    </>
  );
};

export default Robbins;
