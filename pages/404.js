const UnknownPage = () => {
  return (
    <div className="overscroll-y-none w-screen h-screen bg-[url('../public/grid.png')] bg-center bg-cover grid grid-rows-2 grid-cols-4 gap-1">
      <div
        id="top-left"
        className="px-10 col-start-1 row-start-1 bg-[url('../public/de-our.png')] bg-no-repeat bg-contain"
      ></div>
      <div
        id="middle"
        className="w-90 h-90 col-span-2 row-span-2 col-start-1 row-start-1 flex flex-col "
      >
        <iframe
          src="https://giphy.com/embed/gHi4YMtu5ilxykWCXj"
          width="90%"
          height="90%"
          //   style="position:absolute"
          frameBorder="0"
          className="giphy-embed absolute"
          allowFullScreen
        ></iframe>
      </div>
      <p className="col-start-3 row-start-2">
        <a href="https://giphy.com/stickers/TRANS-EU-world-digital-lodz-gHi4YMtu5ilxykWCXj">
          via GIPHY
        </a>
      </p>
      <div
        id="bottom-right"
        className="row-start-2 col-start-3 col-end-5 flex flex-col justify-end mb-40"
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
