import { useState } from 'react'
import Randomdog from '../Dog'
import './App.css'

function App() {
  
  const [refesh, setRefresh] = useState(false);

  return (
    <>
        <button onClick={() => {setRefresh(!refesh)}}>Random dogs </button>
        <Randomdog key={refesh+"1"} />
        <Randomdog  key={refesh+"2"}/>
        <Randomdog  key={refesh+"3"}/>

    </>
  )
}

export default App
