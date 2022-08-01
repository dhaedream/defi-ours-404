const UnknownPage = () => {
  return (
    <div className="w-screen h-screen bg-[url('../public/grid.png')] bg-center bg-cover grid grid-rows-2 grid-cols-4 gap-1">
      <div id="top-left" className="col-start-1 row-start-1">
        <h1 className="">Defi Ours</h1>
      </div>
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
      <p className="col-start-3 row-start-3">
        <a href="https://giphy.com/stickers/TRANS-EU-world-digital-lodz-gHi4YMtu5ilxykWCXj">
          via GIPHY
        </a>
      </p>
      <div
        id="bottom-right"
        className="col-span-1 row-span-1 col-start-4 row-start-3"
      >
        <h1 className="">Page Not Found</h1>
        <p>Click Here to Learn More About Defi Ours.</p>
        <p>Click Here to Go Home.</p>
      </div>
    </div>
  );
};

export default UnknownPage;

// I should create the navbar first to keep future conflicts from happening while I'm building pages.
// This page need a 2 layer background that will center my animation ontop of the box grid
// two rows of content, top pushed left, bottom pushed right
//middle ablosute/relative div for spinning globe
