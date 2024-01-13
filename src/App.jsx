import React from "react";
import "./index.css";
import Color from "./Components/Color";

const App = () => {
  const color = [
    { sistem: "#666CA3", rgb: "102, 108, 163", hsl: "234°, 25%, 52%" },
    { sistem: "#13183F", rgb: "19, 24, 63", hsl: "233°, 54%, 16%" },
    { sistem: "#83869A", rgb: "131, 134, 154", hsl: "232°, 10%, 56%" },
    { sistem: "#F74780", rgb: "247, 71, 128", hsl: "341°, 92%, 62%" },
    { sistem: "#FFA7C3", rgb: "255, 167, 195", hsl: "341°, 100%, 83%" },
    { sistem: "#FFFFFF", rgb: "255, 255, 255", hsl: "0°, 0%, 100%" },
    { sistem: "linear-gradient(180deg, #FF6F48 0.04%, #F02AA6 100%)", rgb: "240, 42, 166", hsl: "322°, 87%, 55%" },
    { sistem: "linear-gradient(180deg, #4851FF 0%, #F02AA6 99.92%)", rgb: "72, 81, 255", hsl: "237°, 100%, 64%" },
  ];
  return (
    <div className="umumiy">
      <div className="navbar">
        <h2>skilled</h2>
        <h2>design system</h2>
      </div>
      <div>
        <h2 className="text">Color</h2>
        <div className="card">
          {color.map((item)=>(
            <Color {...item}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
