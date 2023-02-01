import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  return (
    <>
      <Header />
      <main>
        <section>
          <div>
            <button
              className={switch1 ? "purple" : "white"}
              onClick={() => {
                setSwitch1(true);
              }}
            >
              ON
            </button>
            <button
              className={!switch1 ? "purple" : "white"}
              onClick={() => {
                setSwitch1(true);
              }}
            >
              OFF
            </button>
          </div>
          <div>
            <button
              className={switch2 ? "purple" : "white"}
              onClick={() => {
                setSwitch2(true);
              }}
            >
              ON
            </button>
            <button
              className={!switch2 ? "purple" : "white"}
              onClick={() => {
                setSwitch2(true);
              }}
            >
              OFF
            </button>
          </div>
          <div>
            <button
              className={switch3 ? "purple" : "white"}
              onClick={() => {
                setSwitch3(true);
              }}
            >
              ON
            </button>
            <button
              className={!switch3 ? "purple" : "white"}
              onClick={() => {
                setSwitch3(true);
              }}
            >
              OFF
            </button>
          </div>
        </section>
        <section>
          <div>
            <button className={switch1 && switch2 && switch3 ? "green" : "red"}>
              <p>{switch1 && switch2 && switch3 ? "GO !" : "NO WAY !"}</p>
            </button>
          </div>
          <div>
            <button
              className="reset"
              onClick={() => {
                setSwitch1(false);
                setSwitch2(false);
                setSwitch3(false);
              }}
            >
              <i className="fa-solid fa-circle-xmark"></i>&nbsp; Reset
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
