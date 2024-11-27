import { useEffect, useState } from "react";


interface Dog{
    message : string,
    status : string,
}

const Randomdog = () => {

    const [dog , setDog] = useState<Dog | undefined>(undefined);

    //2.14B++
    const [isHovered , setIsHovered] = useState(false);

    const fetchDogImage = async () => {
        try {
          const response = await fetch("https://dog.ceo/api/breeds/image/random");
          const dog = await response.json();
          setDog({
            message: dog.message ?? "No dog found",
            status: dog.status ?? "Error",
          });
        } catch (error) {
          console.error("Failed to fetch dog image", error);
          setDog({ message: "Failed to fetch dog image", status: "Error" });
        }
      };

    useEffect( () => {
        fetchDogImage();

        const interval = setInterval(() => {
            if(!isHovered){
                fetchDogImage();
            }

            return clearInterval(interval);
        },5000)

    },[isHovered])
    


    if(!dog){
        return <>Loading photos ...</>
    }

    return (
        <div className="Randomdog">
            <img src={dog?.message} alt="random doggyy" 
            style={{maxHeight:300}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            />
        </div>
    )
};

export default Randomdog;