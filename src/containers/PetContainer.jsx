import { useEffect, useState } from "react";
import AddPetForm from "../components/AddPetForm";
import PetList from "../components/PetList";

const PetContainer = () => {
    const [pets, setPets] = useState([]);

    const fetchPets = async () =>{
        const response = await fetch("http://localhost:8080/pets");
        const petJson = await response.json();
        setPets(petJson);
    }

    useEffect(() =>{
        fetchPets();

    },[])


    return ( 
        <>
        <header>
        <h1>My Pets</h1>
        <AddPetForm />
        </header>
        <main>
            <PetList/>
        </main>

       
       </>
     );
}
 
export default PetContainer;