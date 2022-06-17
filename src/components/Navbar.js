import reactLogo from "../assets/reactjs-icon.png";

const NavBar = () => {
  return (
    <div className="container p-2">

    <header className="d-flex justify-content-between align-items-center shadow-sm pb-2">
      <nav className="d-flex align-items-center justify-content-between" style={{width: "158px"}}>
        <img width="30px" src={reactLogo} alt="react-logo" className="img-fluid"/>
        <h3 style={{color: "#61DAFB"}}>ReactFacts</h3>
      </nav>
      <h4 className="d-none d-sm-block">React Course - Project 1</h4>
    </header>
    </div>
  );
};

export default NavBar;