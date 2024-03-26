const Pet = ({pet}) => {
    return ( 
        <>
        <h3>{pet.name} (age {pet.age}) </h3>
        <p>Type of Animal: {pet.type}</p>
        <p>Breed: {pet.breed}</p>
        
        </>
     );
}
 
export default Pet;