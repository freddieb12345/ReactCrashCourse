import React from 'react';

const Conditional = (props) => {
    return(
        <div>
            {props.isLoading ? <h1>Loading...</h1> : <h1>Finished Loading</h1>}
        </div>
    )
}

export default Conditional;
