import React from 'react';

const Input = (props) => {
    return(
       <div className = "section">
            <div className = "container">
                <div className="field">
                    <div className="control">
                        <input 
                            className="input is-info" 
                            type="text" 
                            placeholder="city or zipcode"
                            onChange = {props.handleChange}
                            >
                        </input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Input;