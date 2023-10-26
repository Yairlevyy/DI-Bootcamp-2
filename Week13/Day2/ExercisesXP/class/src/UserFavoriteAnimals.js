import React from 'react';

class UserFavoriteAnimals extends React.Component {
    render(){
        return(
            <ul>
            {
                this.props.animals.map(item=>(
                    <li>{item}</li>
                ))
            }
            </ul>
        )
    }
}

export default UserFavoriteAnimals