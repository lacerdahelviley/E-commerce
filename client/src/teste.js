import React, { useState } from 'react';

const FilterCheckbox = ({ label, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    onChange(event.target.checked, label);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        {label}
      </label>
    </div>
  );
};

const Filter = () => {
  const [filterResults, setFilterResults] = useState([]);

  const handleFilterChange = (isChecked, label) => {
    if (isChecked) {
      setFilterResults([...filterResults, label]);
    } else {
      setFilterResults(filterResults.filter((item) => item !== label));
    }
  };

  return (
    <div>
      <FilterCheckbox label="Option 1" onChange={handleFilterChange} />
      <FilterCheckbox label="Option 2" onChange={handleFilterChange} />
      <FilterCheckbox label="Option 3" onChange={handleFilterChange} />
      <p>Selected filters: {filterResults.join(', ')}</p>
    </div>
  );
};

export default Filter;
