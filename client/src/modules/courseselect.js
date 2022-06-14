import React, {useState} from "react";
import { render } from "react-dom";

export default function() {
    const handleClick = () => {
        var x = document.getElementById("selected").value;
    // var m = document.getElementById("selected")
    // var t = m.options[x.selectedIndex].text;
    console.log(x);
    var z = document.getElementById("selected3");
    var a = document.getElementById("selected4");

    var y = document.getElementById("selected2");
    if (x == 2) {
      y.style.visibility = "hidden";
      z.style.visibility = "hidden";
      a.style.visibility = "visible";
    } else if (x == 3) {
        a.style.visibility = "visible";
        z.style.visibility = "hidden";
        y.style.visibility = "visible";
    } else {
        y.style.visibility = "visible";
        z.style.visibility = "visible";
        a.style.visibility = "hidden";
    }
};
const [fruit, setFruit] = useState();
  const handleChange = (e) => {
      console.log(e)
    setFruit(e.target.value);
  }

    return (
        <>
      <div className="App">
          <p>Please select course and semester</p>
<select id="selected" onClick={handleClick} onChange={handleChange}>
       
          <option value="1">b.tech</option>
          <option value="2">bba</option>

          <option value="3">diploma</option>
        </select>
        <br />
        <select id="selected2" onClick={handleClick}>
          <option value="1">cse</option>
          <option value="2">civil</option>

          <option value="3">ece</option>
        </select>
        <br />
        <select id="selected3" onClick={handleClick}>
          <option value="1">sem1</option>
          <option value="2">sem2</option>
          <option value="3">sem3</option>
        </select>
        <select id="selected4" style={{visibility:"hidden"}} onClick={handleClick}>
          <option value="1">dsem1</option>
          <option value="2">dsem2</option>
          <option value="3">dsem3</option>
        </select>
      </div>
      </>
    );
  }

