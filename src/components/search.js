import React from 'react';
import './modal.css'

const Filter = ({ handleSearch, handleSearchRating }) => {
    return (
        <div>
            <form >
                <div class="form-group">
                    <label for="formGroupExampleInput">Search by name</label>
                    <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder="enter a name"
                        onKeyUp={(el) => handleSearch(el.target.value)}
                    />
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">search by rate</label>
                    <input 
                    type="number" 
                    min='1'
                    max='5'
                    class="form-control" 
                    id="formGroupExampleInput2" 
                    placeholder="enter a rate"
                    onChange={(e) => handleSearchRating(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};
export default Filter