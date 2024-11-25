import { useEffect, useState } from 'react'
import './App.css'

function App() {

  interface Joke {
    joke : string,
    category : string,
  }

  const [joke , setJoke] = useState<Joke | undefined>(undefined);

  

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any")
    .then((response) => {
      if(!response.ok){
        throw Error(
         `fetch error : ${response.status} : ${response.statusText}`
        );
      }
      return response.json();
    })
    .then((data) => {
      setJoke({
        joke : data.joke ?? "No jokes found",
        category : data.category ?? "No categories found",
      })
    })
      
    
  }, [])

  if(!joke){
    return <> Please be patient, Loading ...</>
  }

  return (
    <>
      <h2>Welcome, There is a joke for you today !</h2>
      <div>{joke?.joke}</div> <br />
      <div>Coming from the category : {joke?.category}</div>
    </>
  )
}

export default App
