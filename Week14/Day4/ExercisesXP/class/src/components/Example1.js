import React, {Component} from "react";
import data from '../data3.json'

class Example1 extends Component {
    render(){
        console.log(data.SocialMedias)
        return(
            <>
                <ul>
                    {
                        data.SocialMedias.map((item)=>(
                            <li>{item}</li>
                        ))
                    }
                </ul>
            </>
        )
    }
}

export default Example1