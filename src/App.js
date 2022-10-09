import "./App.css";
import { useState } from "react";

function App() {
  const [output, setOutput] = useState("");
  const emojiPedia = [
    { name: "Bomb", symbul: "💣" },
    { name: "Balloon", symbul: "🎈" },
    { name: "Kite", symbul: "🪁" },
    { name: "Radio", symbul: "📻" },
    { name: "Laptop", symbul: "💻" },
    { name: "Television", symbul: "📺" },
    { name: "Bulb", symbul: "💡" },
    { name: "Pencil", symbul: "✏️" },
    { name: "Screwdriver", symbul: "🪛" },
    { name: "Hook", symbul: "🪝" },
  ];
  const emojiChecker = (element) => {
    let [emojInfo] = emojiPedia.filter((ele) => {
      return ele.symbul === element;
    });
    if (emojInfo) {
      console.log(emojInfo);
      setOutput(`The Emoji name is : ${emojInfo.name}`);
    } else {
      setOutput("We can't find the emoji in our DB/Invalid Input");
    }
  };

  const inputChange = (event) => {
    if (event.target.value) {
      emojiChecker(event.target.value);
    }
  };

  const imageOnclick = (event) => {
    emojiChecker(event.target.innerHTML);
  };
  return (
    <div className="App">
      <h1>Was Ist Das ? </h1>
      <h4>(What is this?)</h4>
      <h6>Emoticon Interpreter</h6>
      <input
        type="text"
        onChange={inputChange}
        placeholder="Please enter only one emoji"
      ></input>
      {output ? <h2>{output}</h2> : ""}
      <div className="iconsec">
        <p>
          <strong>Emojis We know</strong>
        </p>
        {emojiPedia.map((element) => {
          return (
            <span className="spanele" key={element.name} onClick={imageOnclick}>
              {element.symbul}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default App;
