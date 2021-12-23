import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState('');
  const [updatePlants, setUpdatePlants] = useState(false);

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(plantData => setPlants(plantData))
  }, [updatePlants])

  function addNewPlant() {
    setUpdatePlants(!updatePlants)
  }

  const plantsToDisplay = plants.filter(plant => {
    return (
      plant.name.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} setUpdatePlants={setUpdatePlants} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={plantsToDisplay} />
    </main>
  );
}

export default PlantPage;
