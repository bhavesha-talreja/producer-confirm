import React, { useState, useEffect } from "react";
import Data from "./dev-data/Data";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import Filterform from "./Filterform";

const Filter = () => {
  const [filters, setfilters] = useState({
    show: "",
    channel: "",
    status: "",
  });

  const [filteredData, setFilteredData] = useState(Data);

  const handleFilterChange = (filterName, value) => {
    setfilters((prevfilters) => ({
      ...prevfilters,
      [filterName]: value,
    }));
  };

  useEffect(() => {
    // Filter the data based on the selected filters
    let filteredShowList = Data;

    if (filters.show) {
      filteredShowList = filteredShowList.filter(
        (showData) => showData.show === filters.show
      );
    }

    if (filters.status) {
      filteredShowList = filteredShowList.filter(
        (showData) => showData.status === filters.status
      );
    }

    if (filters.channel) {
      filteredShowList = filteredShowList.filter(
        (showData) =>
          showData.channel.toLocaleLowerCase() ===
          filters.channel.toLocaleLowerCase()
      );
    }

    setFilteredData(filteredShowList);
  }, [filters]);

  return (
    <div>
      <div className="row">
        {filters && (
          <Filterform
            data={Data}
            onFilterChange={handleFilterChange}
            filters={filters}
          />
        )}
        <h2 className="text-center col-12 fw-bold mt-3 mb-5">
          Filtered Episodes
        </h2>
        <Card item={filteredData} />
      </div>
    </div>
  );
};

export default Filter;
