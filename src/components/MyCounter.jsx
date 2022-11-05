import React, { useState} from 'react';

const MyCounter = (props) => {
    //let countState = 77
    const [countState, setCountState] = useState(0);

    function incCount(){
        setCountState(countState + props.incBy);
    }

    return (
        <div>
            <div>{countState}</div>
            <button onClick={incCount}>+{props.incBy}</button>
        </div>
    )
}
export default MyCounter;