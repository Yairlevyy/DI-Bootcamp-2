import React from "react";

class Child extends React.Component {
    componentWillUnmount() {
        alert('Component will unmount!')
    }

    render(){
        return(
            <>
                <header>Hello World</header>
            </>
        )
    }
}

export default Child