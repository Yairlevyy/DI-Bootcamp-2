import React from 'react'

function UserDisplay({userInfo}) {
  return (
    <div>
        <h1>Entered information :</h1>
        <p>Your name : {userInfo.fname + " " + userInfo.lname}</p>
        <p>Your age : {userInfo.age}</p>
        <p>Your gender : {userInfo.gender}</p>
        <p>Your destination : {userInfo.destination}</p>
        <p>Your dietary restrictions :</p>
        <p>**Nuts free : {userInfo.nuts ? "Yes" : "No"}</p>
        <p>**Lactose free : {userInfo.lactose ? "Yes" : "No"}</p>
        <p>**Vegan meal : {userInfo.vegan ? "Yes" : "No"}</p>
    </div>
  )
}

export default UserDisplay