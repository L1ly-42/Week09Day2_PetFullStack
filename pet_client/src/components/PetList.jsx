import Pet from "./Pet";

const PetList = ({pets, deletePet}) => {

    const petComponents = pets.map((pet) => {
        return <Pet key={pet.id} pet={pet} deletePet={deletePet} />
    })


    return ( 
        <>
        <h2>All Pets:</h2>
            {petComponents}
        </>
     );
}
 
export default PetList;