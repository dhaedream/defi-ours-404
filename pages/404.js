import Image from "next/image";
import globe from "../public/globe.gif";

const UnknownPage = () => {
  return (
    <div className="overscroll-y-none w-screen h-screen sm:grid-rows-5 grid-col-3 bg-[url('../public/grid-sm.png')] md:bg-[url('../public/grid.png')] bg-center bg-cover grid grid-rows-2 grid-cols-4 gap-1 ">
      <div
        id="top-left"
        className="px-10 bg-[url('../public/de-our.png')] bg-no-repeat bg-contain "
      ></div>
      <div
        id="middle"
        className="w-90 h-90 col-span-2 row-span-3 col-start-2 row-start-1 flex flex-col md:row-start-2"
      >
        <Image
          src={globe}
          layout="fill"
          objectFit="contain"
          //   width={600}
          //   height={600}
          className="giphy-embed "
          alt=""
        />
      </div>
      <p className="col-start-3 row-start-2">
        <a href="https://giphy.com/stickers/TRANS-EU-world-digital-lodz-gHi4YMtu5ilxykWCXj">
          via GIPHY
        </a>
      </p>
      <div
        id="bottom-right"
        className="row-end-6 col-start-3 col-end-5 flex flex-col justify-end mb-40 "
      >
        <div>
          <div className="float-right h-20 w-60 bg-[url('../public/404-text.png')] bg-no-repeat bg-contain bg-right-bottom"></div>
        </div>
        <p className="text-right pr-10 col-start-3 col-span-2">
          Click Here to Learn More About Defi Ours.
        </p>
        <p className="text-right pr-10 col-start-3">Click Here to Go Home.</p>
      </div>
    </div>
  );
};

export default UnknownPage;

// I should create the navbar first to keep future conflicts from happening while I'm building pages.
// This page need a 2 layer background that will center my animation ontop of the box grid
// two rows of content, top pushed left, bottom pushed right
//middle ablosute/relative div for spinning globe
