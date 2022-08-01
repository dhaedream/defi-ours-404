const UnknownPage = () => {
  return (
    // bg-slate-50/0
    <div className="w-screen h-screen bg-[url('../public/grid.png')] bg-center bg-cover">
      <div>
        <div id="top-left" className="">
          <h1 className="">Unknown</h1>
        </div>
        <div id="middle" className=""></div>
        <div id="bottom-right">
          <p className="">info</p>
        </div>
      </div>
    </div>
  );
};

export default UnknownPage;

// I should create the navbar first to keep future conflicts from happening while I'm building pages.
// This page need a 2 layer background that will center my animation ontop of the box grid
// two rows of content, top pushed left, bottom pushed right
//middle ablosute/relative div for spinning globe
