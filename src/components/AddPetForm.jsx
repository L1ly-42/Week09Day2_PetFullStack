import { useState } from "react";

const AddPetForm = ({postPet}) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState(0);

    const handleSubmit = (e) =>{
        e.preventDefault();

        const petDTO = {
            name,
            type,
            breed,
            age
        };

        postPet(petDTO);

       setName("");
       setType("");
       setBreed("");
       setAge(0);
    };


    return ( 
        <>
        <h4>Add pet:</h4>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Pet Name"
            required
            value={name}
            onChange={(e)=> setName(e.target.value)} />

            <input 
            type="text"
            placeholder="Type of Animal"
            required
            value={type}
            onChange={(e)=> setType(e.target.value)} 
            />

            <input 
            type="text"
            placeholder="Breed"
            required
            value={breed}
            onChange={(e)=> setBreed(e.target.value)} 
             />

             <input 
             type="number"
             min={0} 
             max={600}
             placeholder="Age"
             required
             value={age}
            onChange={(e)=> setAge(e.target.value)} 
             />

             <input type="Submit" value="Submit"/>

        </form>
       
        </>
     );
}
 
export default AddPetForm;