import waifu from "./images/waifu.jpg";

function App() {
  return (
    <div className="App">
      <div className="card">
        <img src={waifu} className="card-img-top img-fluid w-50" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
