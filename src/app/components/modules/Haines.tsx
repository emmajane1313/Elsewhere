import Image from "next/image";
import { FunctionComponent } from "react";

const Haines: FunctionComponent = () => {
  return (
    <>
      <div className="relative w-full h-fit bg-white flex">
        <div className="relative w-full ">
          <Image
            layout="responsive"
            width={1280}
            height={720}
            src={"/images/curiosity.png"}
            alt="Curiosity Shop"
            draggable={false}
          />
        </div>
      </div>
      <div className="relative bg-white flex flex-col text-black p-4">
        <div className="relative w-fit h-fit flex text-[6vw] sm:text-[4vw] font-konB">
          And Hyam was selling tchotchkes in the Middlesex curiosity shop. Robin
          Hood Lane, East End Near the Docks.
        </div>
        <div className="relative w-fit h-fit text-rojo flex text-[6vw] sm:text-[4vw] font-konM">
          Trinkets, clocks, broken combs, lockets, thimbles, crystal
          paperweights, skeleton keys, pressed flowers in frames, sealing wax
          stamps, chipped teacups.
        </div>
        <div className="relative w-fit h-fit flex font-one">
          First or second wave of continental Yekkish immigration,
          post-Napoleonic. Westphalia? Hesse? Bohemia? And the Empire had
          already made its own mess. NSW was short on women who weren’t chained.
          And that deep social ceiling. Opportunities are drying up. Oh Ann!
          Rachel’s on her way. The Mary sails. 1839. The two sisters. 28 and 22.
          Rachel and Rebecca. And Joseph, Charles, Jane and Lewis.
        </div>
      
      </div>
        <div className="relative bg-black p-4 text-white w-full h-fit flex font-one">
          From Port Adelaide, half a world away, Jane records in the South Australian Register.
          DIED. On the 1st of May, 1858, at Poplar, Blackwall, Mr. H. Hains,
          aged 80. Deeply regretted by a numerous circle of relatives and
          friends. Late of the German Jews' Hospital, Mile End.
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full text-center text-black text-xl md:text-2xl lg:text-3xl font-serif">
        <div className="bg-rojo flex gap-4 flex-col justify-center items-start p-8">
          <div className="text-4xl font-one flex w-fit h-fit text-left leading-tight">
            And that shipping list retyped decades later. Still stamps it in
            black:
          </div>
          <span className="text-sm w-fit h-fit font-hal flex text-white">
            JEWESS
          </span>
        </div>
        <div className="bg-white flex flex-col justify-center items-center p-8">
          <div className="relative w-full h-72 lg:h-full flex">
            <Image
              src={"/images/manifest.png"}
              alt="Ship Manifest Retyped"
              objectFit="contain"
              draggable={false}
              layout="fill"
            />
          </div>
        </div>
        <div className="bg-black text-white flex flex-col justify-center items-start p-8 text-left">
          <div className="text-base leading-[1.3rem] flex font-klar">
            His hands, stained with leather and loss, sign their ketubah. Their
            halachic promises witnessed by Michael Hyam, a London Jew turned
            colonial bootmaker. In 1842, 3 years before York Street Synagogue
            was founded, Rachel and Abraham marry from within a fragile Jewish
            colonial network. They are among the first to speak ancient vows
            under Southern Cross stars.
          </div>
          <span className="text-sm text-rojo mt-4 flex font-hal">
            Convict era, gold rush, self government, and federation. From
            Whitechapel to Jamberoo to Surry Hills.
          </span>
        </div>
      </div>
      <div className="bg-white relative font-konB text-[15vw] leading-tight text-center w-full h-fit flex text-black justify-center">
        <div className="relative w-fit h-fit flex">-1811-1902-</div>
      </div>

      <div className="bg-black text-white flex flex-col justify-center items-start p-8 text-left">
        <div className="text-[6vw] sm:text-[3vw] text-justify leading-none flex font-klar">
          Mormons try to hijack history. They tried to buy your soul. In a
          hundred years the record will suggest that you converted. Mid 20th
          century, Mormon archivists steal ship manifests and transcribe global
          migration records. For baptism by proxy. The retyped LDS Immigration
          record for Rebecca and achim v'achayot. For posthumous spiritual trespass. Hundreds of
          thousands of Jews and millions of others. Names stolen, records
          pilfered, forced conversion attempted after death. They offer
          obfuscation and lies to conceal the truth. They've only marked
          themselves for the accounting. Every harvested record is another
          charge in the ledger. Some debts collect with compound interest across
          eternities.
        </div>
      </div>
    </>
  );
};

export default Haines;
