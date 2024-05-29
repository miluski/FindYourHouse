import React, { useState } from 'react';

const FilterDropdown: React.FC = () => {
    const [showFilters, setShowFilters] = useState(false);

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    return (
        <div className="mb-4 d-flex flex-column align-items-start" style={{ maxWidth: "20vw" }}>
            <button onClick={toggleFilters} className='btn btn-primary mb-2' style={{backgroundColor: 'transparent', borderColor:"black", borderRadius:"0px", color:"black"}}>
                {showFilters ? 'Mniej filtrów' : 'Więcej filtrów'}
            </button>
            {showFilters && (
                <div className="mt-2 w-100">
                    <div className="form-group">
                        <label>Piętro:</label>
                        <select className="form-control">
                            <option value="dowolne">dowolne</option>
                            <option value="dowolne">1</option>
                            <option value="dowolne">2</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Materiał budynku:</label>
                        <select className="form-control">
                            <option value="dowolne">dowolne</option>
                            <option value="dowolne">Cegła</option>
                            <option value="dowolne">Drewno</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Cena za metr:</label>
                        <div className="d-flex">
                            <input type="number" className="form-control mr-2" placeholder="od" />
                            <input type="number" className="form-control" placeholder="do" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Rynek:</label>
                        <select className="form-control">
                            <option value="pierwotny-i-wtórny">pierwotny i wtórny</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Powierzchnia:</label>
                        <div className="d-flex">
                            <input type="number" className="form-control mr-2" placeholder="od" />
                            <input type="number" className="form-control" placeholder="do" />
                        </div>
                    </div>
                    <button className="btn btn-secondary mt-2">Filtruj</button>
                </div>
            )}
        </div>
    );
};

export default FilterDropdown;