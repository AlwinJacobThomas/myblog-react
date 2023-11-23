import "./NavBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {

  const [color, changeColor] = useState("000000");


  const ChangeColor = (e) => {   //randomize a hex color value on click
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    changeColor(randomColor);
    console.log(e.target.style.backgroundColor = "#" + color);

  }

  return (
    <div className="topnav">
      <div className="logo">My Blog</div>
      <div className="btns">
        <Link className="btn" onClick={(e) => ChangeColor(e)} to="#home">Home</Link>
        <Link className="btn" onClick={(e) => ChangeColor(e)} to="#news">News</Link>
        <Link className="btn" onClick={(e) => ChangeColor(e)} to="#contact">Contact</Link>
        <Link className="btn" onClick={(e) => ChangeColor(e)} to="#about">About</Link>
      </div>

    </div>
  );
}

export default NavBar;