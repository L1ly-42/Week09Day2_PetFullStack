import { useState } from "react";

const AddPetForm = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState(0);
    return ( 
        <>
        <h3>Add pet:</h3>
        <form>
            <input 
            type="text"
            placeholder="Pet Name"
            value={name}
            onChange={(e)=> setName(e.target.value)} />

            <input 
            type="text"
            placeholder="Type of Animal"
            value={type}
            onChange={(e)=> setType(e.target.value)} 
            />

            <input 
            type="text"
            placeholder="Breed"
            value={breed}
            onChange={(e)=> setBreed(e.target.value)} 
             />

             <input 
             type="number"
             min={0} 
             max={600}
             placeholder="Age"
             value={age}
            onChange={(e)=> setAge(e.target.value)} 
             />

             <input type="Submit" value="Submit"/>

        </form>
       
        </>
     );
}
 
export default AddPetForm;