import { useEffect } from "react";
import React from 'react'

function Filter({setActiveCat, setFiltered, activeCat, photos}) {
  
  useEffect(()=>{
      if(activeCat === "all")
      {
          setFiltered(photos);
          return;

      }
      const filtered = photos.filter((pic) =>
        pic.cat.includes(activeCat)
      );
      setFiltered(filtered);
  },[activeCat]);

  
    return (
    <div className="Filter-container">
        <button className={activeCat === "all" ? "active": ""} onClick={()=> setActiveCat("all")}>All</button>
        <button className={activeCat === "Hunza" ? "active": ""} onClick={()=> setActiveCat("Hunza")}>Hunza</button>
        <button className={activeCat === "Skardu" ? "active": ""} onClick={()=> setActiveCat("Skardu")}>Skardu</button>
        <button className={activeCat === "Ghanche" ? "active": ""} onClick={()=> setActiveCat("Ghanche")}>Ghanche</button>
    </div>
  )
}

export default Filter;