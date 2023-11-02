import React from 'react'

const InputWithLabel = (props) => {
    let { id, label, type } = props
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
            /><br/><br/>
        </>
    );
}

const CheckWithLabel = (props) => {
    let { id, label, type } = props
    return (
        <>
            <input
                id={id}
                type={type}
            />
            <label htmlFor={id}>{label}</label>
            <br/><br/>
        </>
    );
}



function UserData({handleSubmit}) {
  return (
    <>
        <form onSubmit={handleSubmit}>
            <InputWithLabel id="fname" type="text" label="First Name" />
            <InputWithLabel id="lname" type="text" label="Last Name" />
            <InputWithLabel id="age" type="number" label="Age" />
            <CheckWithLabel id="male" type="radio" label="Male" />
            <CheckWithLabel id="female" type="radio" label="Female" />
            <h3>Select your destination</h3>
            <select id='destination'>
                <option value='Israel'>Israel</option>
                <option value='France'>France</option>
                <option value='USA'>USA</option>
            </select>
            <h3>Dietary restrictions</h3>
            <CheckWithLabel id="nuts" type="checkbox" label="Nuts free" />
            <CheckWithLabel id="lactose" type="checkbox" label="Lactose free" />
            <CheckWithLabel id="vegan" type="checkbox" label="Vegan" />
            <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default UserData