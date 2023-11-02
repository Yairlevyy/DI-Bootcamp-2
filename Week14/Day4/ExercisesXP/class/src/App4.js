import React from 'react'

function App4() {
    async function handleClick(){
        const url = 'https://webhook.site/85ec99d1-6ab1-4cc6-91cb-04ba4085ca81'

        const data = {
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27
        };

        const headers = new Headers({
            'Content-Type':'application/json',
        });

        const requestOptions = {
            method:'POST',
            headers: headers,
            body: JSON.stringify(data)
        };

        try {
            const response = await fetch(url,requestOptions)
            const data = await response.json()
            console.log(response)
        } catch (error) {
            console.log("error",error)
        }


    }
  return (
    <button onClick={handleClick}>Press me to post some data</button>
  )
}

export default App4