import { useEffect, useState } from "react";


interface Dog{
    message : string,
    statut : string,
}

const Randomdog = () => {

    const [dog , setDog] = useState<Dog | undefined>(undefined)

    useEffect( () => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
            if(!response.ok){
                throw new Error( `fetch error : ${response.status} : ${response.statusText}`)
            }
            return response.json();
        })
        .then((data) => {
            setDog({
                message : data.message ?? "No image found",
                statut : data.statut ?? "No status"
            })
        })
        .catch((err) => {
            console.log("error is : ",err)
        })
        


}, [])

    return (
        <div className="Randomdog">
            <p>{dog?.statut}</p>
            <img src={dog?.message} alt="random doggyy" />
        </div>
    )
}

export default Randomdog;