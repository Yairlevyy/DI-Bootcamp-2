import { useEffect,useState } from 'react';

function App() {
  const [title,setTitle] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [sent,setSent] = useState('');

  useEffect(()=>{
    getData()
  },[])

    async function getData() {
      try {
        const res = await fetch('http://localhost:5000/api/hello')
        const data = await res.text()
        setTitle(data)
      } catch (err) {
        console.log('error=>',err)
      }
    }

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    }

    async function submitData(e) {
      e.preventDefault()
      try {
        const res = await fetch('http://localhost:5000/api/world',{
          method:'POST',
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify({msg:inputValue})
        })
        const data = await res.text()
        setSent(data)
      } catch (err) {
        console.log('error=>',err)
      }
    }

  return (
    <>
      <h1>{title}</h1>
      <h2>Post to Server:</h2>
      <form onSubmit={submitData}>
        <input type='text' onChange={handleInputChange}/>
        <input type='submit' />
      </form>
      <p>{sent}</p>
    </>
  );
}

export default App;
