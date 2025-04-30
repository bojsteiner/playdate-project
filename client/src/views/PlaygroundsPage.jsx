import MainNavigation from "../components/MainNavigation";
import FilterBar from "../components/FilterBar";
import ResultsList from "../components/ResultsList";
import { useState } from "react";

const ParksPage = () => {
    const [filters, setFilters] = useState({ enclosed: false, bathrooms: false, youngKidsArea: false, shade: "",
        parking: ""});
  
    const filtersConfig = [
        { label: "Enclosed", key: "enclosed", type: "checkbox" },
        { label: "Bathrooms", key: "bathrooms", type: "checkbox" },
        { label: "Young Children's Area", key: "youngKidsArea", type: "checkbox" },
        { label: "Shade", key: "shade", type: "select", options: ["", "Partial", "Full"] },
        { label: "Parking", key: "parking", type: "select", options: ["", "street", "parking lot"] },
      ];
  
    return (
      <div>
        <MainNavigation />
        <div className="d-flex">
          <div className="pt-3 filter-bar" style={{ width: '250px', minWidth: '250px', height: '100vh', position: 'sticky', top: '0' }}>
            <FilterBar filters={filters} onChange={setFilters} config={filtersConfig} />
          </div>
          <div className="flex-grow-1 ps-3 results-list">
            <ResultsList filters={filters} />
          </div>
        </div>
      </div>
    );
  };

  export default ParksPage