import React, {Component} from "react";
import data from '../data3.json'

class Example2 extends Component {
    render(){
        console.log(data.Skills)
        return(
            <>
                    {
                        data.Skills.map((item)=>(
                            <>
                            <h2>{item.Area}</h2>
                            <ul>
                            {
                                item.SkillSet.map(item=>(
                                    <li>{item.Name}</li>
                                ))
                            }
                            </ul>
                            </>
                        ))
                    }
            </>
        )
    }
}

export default Example2