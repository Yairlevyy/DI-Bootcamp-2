import React, {Component} from "react";
import data from '../data3.json'

class Example3 extends Component {
    render(){
        console.log(data.Experiences)
        return(
            <>
                    {
                        data.Experiences.map((item)=>(
                            <>
                            <img src={item.logo}/>
                            <p>{item.companyName}</p>
                            <p>{item.roles[0].title}</p>
                            <p>{item.roles[0].startDate} {item.roles.location}</p>
                            <p>{item.roles[0].description}</p>
                            </>
                        ))
                    }
            </>
        )
    }
}

export default Example3
