import React from "react";
import image from './logo192.png'
import './Exercise.css'
const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

class Exercise extends React.Component {
    render(){
        return(
            <>
            <h1 style={style_header}>This is an H1 Tag</h1>
            <p className="para">This is a paragraph</p>
            <a href="#">This is a link</a>
            <h3>This is a form:</h3>
            <form>
            <input type="text"/>
            <input type="submit"/>
            </form>
            <h3>This is an image</h3>
            <img src={image} />
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            </>
        )
    }
}

export default Exercise