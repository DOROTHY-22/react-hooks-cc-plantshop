import PlantCard from './PlantCard';

function PlantList({ plants, onDelete, onPriceUpdate, onToggleSoldOut }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id} 
          plant={plant}
          onDelete={onDelete}
          onPriceUpdate={onPriceUpdate}
          onToggleSoldOut={onToggleSoldOut}
        />
      ))}
    </ul>
  );
}

export default PlantList;