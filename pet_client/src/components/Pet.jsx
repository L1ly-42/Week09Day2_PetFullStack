const Pet = ({pet, deletePet}) => {

    const handleClick = ()=> {
        deletePet(pet.id);
    };

    return ( 
        <div className="petCard">
            <h3>{pet.name} (age {pet.age}) </h3>
            <p>Type: {pet.type}</p>
            <p>Breed: {pet.breed}</p>
            <button onClick={handleClick}>Delete</button>
        </div>
     );
}
 
export default Pet;