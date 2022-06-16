import reactImg from "./reactjs-icon.png";

const Nav = () => {
  return (
    <div className="container p-2">

    <header className="d-flex justify-content-between align-items-center">
      <nav className="d-flex align-items-center">
        <img width="40px" src={reactImg} alt="react-logo" className="img-fluid"/>
        <h3>ReactFacts</h3>
      </nav>
      <h4>React Course - Project 1</h4>
    </header>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="container p-2">
      <footer className="footer fixed-bottom">
      <small>© 2022 Shaw development. All rights reserved.</small>
    </footer>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="container p-2 w-100 ">
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
};

function App() {
  return (
    <div>
      <Nav />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
