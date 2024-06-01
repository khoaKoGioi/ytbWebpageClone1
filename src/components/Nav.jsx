const Nav = () => {
  <nav className="sticky top-0 z-50 py-3 border-b backdrop-blur-lg border-neutral-700/80">
    {/* /80 means the opacity 80%
    border-b means border bottom 1px */}
    <div className="container px-4 mx-auto relative text-sm"></div>
    {/* setting mx-auto to make it to be centered horizontally within its
    parent container(in this case, the parent container is the nav) */}
    <div className="flex justify-center items-center"></div>
    {/* justify-content: center 
    align-items: center */}
  </nav>;
};

export default Nav;
