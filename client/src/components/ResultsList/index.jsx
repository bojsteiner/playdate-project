import { useEffect, useState } from 'react';
import LocationCard from '../LocationCard';

const ResultsList = ({ filters }) => {
    const [parks, setParks] = useState([]);
  
    useEffect(() => {
      const params = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== false && value !== "") {
          params.append(key, value);
        }
      });

      console.log("Fetching with filters:", params.toString());
      
  
      fetch('http://localhost:8000/api/parks?' + params.toString())
      .then(res => {
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        return res.json();
      })
      .then(data => setParks(data))
      .catch(err => console.error("Failed to fetch parks:", err));
  }, [filters]);

  
  console.log(parks);
  
    return (
      <div>
        {parks.map(park => (
          <LocationCard key={park.id} location={park}/>
        ))}
      </div>
    );
  };

export default ResultsList