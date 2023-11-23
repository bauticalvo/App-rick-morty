import Card from './Card.jsx';

export function Cards({characters, onClose}) {
   return <div
      style={{
         display:'flex', 
         flexWrap: 'wrap',
         justifyContent: 'space-evenly'
         
      }}
   >
     
      
      {characters.map(character=>(
       <Card 
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={onClose}
      />))}
   </div>;
}
