import React, { useState, useEffect } from 'react';
import './parks.css';


function Parks() {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredParks, setFilteredParks] = useState([]);

    useEffect(() => {
        fetch('/parks')
            .then(res => res.json())
            .then(data => {
                setData(data);
            });
    }, []);

    const handleSearchChange = (event) => {
        const query = event.target.value.toUpperCase(); 
        setSearchQuery(query);
        const filteredData = query === '' ? [] : data.filter(park =>
            park.City.toUpperCase().includes(query) 
        );
        setFilteredParks(filteredData);
    };
    
    
    return (
        <div>
            <div className="parks">
                <h1>Find a Park</h1>
                <div className="search">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search by city"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
            <div className="results">
                {filteredParks.length > 0 ? (
                    <div className="list">
                        {filteredParks.map((park, i) => (
                            <div key={i}>
                                <p>{park.Name}</p>
                            </div>
                        ))}
                    </div>
                ) : searchQuery !== '' ? (
                    <p>No parks found</p>
                ) : null}
            </div>
          
        </div>
    );
}

export default Parks;





