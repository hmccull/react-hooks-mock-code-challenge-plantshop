import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then((data) => setPlants(data))
  }, [])

  function onNewPlantSubmit(newPlant) {
    setPlants([...plants, newPlant]);
  }
  
  const plantsToDisplay = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search)
  });

  return (
    <main>
      <NewPlantForm
        onNewPlantSubmit={onNewPlantSubmit}
      />
      <Search 
        search={search}
        onPlantSearch={setSearch} 
      />
      <PlantList 
        plants={plantsToDisplay}
      />
    </main>
  );
}

export default PlantPage;
