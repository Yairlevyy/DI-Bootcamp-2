import React from "react";

class Color extends React.Component {
    constructor(){
        super();
        this.state={
            favoriteColor:"red",
        }
    }

    changeColor = () => {
        this.setState({favoriteColor:"blue"})
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({favoriteColor:"yellow"})
        },1000)
    }

    componentDidUpdate(){
        console.log("after update")
    }

    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log("in getSnapshotBeforeUpdate")
        console.log(prevState)
    }

    render(){
        return(
            <>
            <h1>My Favorite color is {this.state.favoriteColor}</h1>
            <button onClick={this.changeColor}>Change color</button>
            </>
        )
    }
}

export default Color

