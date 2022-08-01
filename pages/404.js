const UnknownPage = () => {
  return (
    // bg-slate-50/0
    <div className="w-screen h-screen bg-[url('../public/grid.png')] bg-center bg-cover flex flex-col">
      {/* <div className=""> */}
      <div id="top-left" className="">
        <h1 className="">Defi Ours</h1>
      </div>
      {/* <div style="width:100%;height:0;padding-bottom:100%;position:relative;"> */}
      <div
        id="middle"
        className="w-96 h-96 flex justify-self-center align-self-center"
      >
        <iframe
          src="https://giphy.com/embed/gHi4YMtu5ilxykWCXj"
          width="150%"
          height="150%"
          //   style="position:absolute"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <p>
        <a href="https://giphy.com/stickers/TRANS-EU-world-digital-lodz-gHi4YMtu5ilxykWCXj">
          via GIPHY
        </a>
      </p>
      <div id="bottom-right" className="flex flex-col">
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
