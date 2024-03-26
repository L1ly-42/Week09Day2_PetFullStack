import { useEffect, useState } from "react";
import AddPetForm from "../components/AddPetForm";
import PetList from "../components/PetList";

const PetContainer = () => {
    //useState
    const [pets, setPets] = useState([]);

    //fetch GET request
    const fetchPets = async () =>{
        const response = await fetch("http://localhost:8080/pets");
        const petJson = await response.json();
        setPets(petJson);
    }

    useEffect(() =>{
        fetchPets();

    },[])

    // Fetch POST request
    const postPet = async (petDTO) =>{
        const response = await fetch("http://localhost:8080/pets", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(petDTO)
        });

        const savedPet = await response.json();
        setPets([...pets, savedPet])
    }


    return ( 
        <>
        <header>
        <h1>My Pets</h1>
        <AddPetForm postPet={postPet}/>
        </header>
        <main>
            <PetList pets={pets}/>
        </main>

       
       </>
     );
}
 
export default PetContainer;