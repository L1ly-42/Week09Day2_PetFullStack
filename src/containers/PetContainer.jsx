import AddPetForm from "../components/AddPetForm";
import PetList from "../components/PetList";

const PetContainer = () => {
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