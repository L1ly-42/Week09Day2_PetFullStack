import Pet from "./Pet";

const PetList = ({pets}) => {

    const petComponents = pets.map((pet) => {
        return <Pet key={pet.id} pet={pet} />
    })


    return ( 
        <>
        <h2>All Pets:</h2>
        <section className="petComponents">
            {petComponents}
          

        </section>


        </>
     );
}
 
export default PetList;