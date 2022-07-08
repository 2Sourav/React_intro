import React from "react";
import ReactDom from "react-dom";
//render() takes arguments in the form of (what to render,where to render)
//let`s say we want to render an h1 tag.
//now we want to target the div element having id="root" in the html file
//we hence use the id to target the element where we want to render the
//h1 tag.
//this is done by using the function document.getElementbyId()
//putting multiple elements inside the targetted element
var name = "Sourav";
//if we want to put this name inside the div tag we enclose it
//within curly braces
var author = "FF";
//we can hence insert JS code by enclosing it within {}
//in react, every tag must be given its closing tag as well
//<..../> => closing tag
ReactDom.render(
  <div>
    <h1>React</h1>
    <h1> {name}</h1>
    <h1> {name + " " + author}</h1>
    <h1> {name} </h1>
    <h3> {" By- " + author} </h3>
    <p>
      War is a 2019 Indian Hindi-language action thriller film directed by
      Siddharth Anand and produced by Aditya Chopra under his banner Yash Raj
      Films.
    </p>
    <img
      src="https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/reactlogo_4.png?itok=LXFHZrKJ"
      alt="react logo"
    />
    <ul>
      {/* to target individual list elements we use 'className' */}
      <li className="r">Redux</li>
      <li className="v">Components</li>
      <li>Hooks</li>
    </ul>
  </div>,
  document.getElementById("root")
);
//React framework has a compiler called babel which converts the JSX
//codes to pure Javascript codes that can be understood by any website
