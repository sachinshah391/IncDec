import React from 'react';
import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';




const Index1 = () => {

    const [ivalue, setIvalue] = useState(0);

    const increment = () => {
        return setIvalue(ivalue + 1);

    }
    const decrement = () => {

        if (ivalue > 0) {

            setIvalue(ivalue - 1);
        }
        else {
            alert("value cannot be negative");
        }

    }



    return (
        <>
            {/* <div class="alert alert-success" role="alert">
                A simple success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
            </div> */}
            <div className="main_div">

                <div className="center_div">
                    <h1>{ivalue}</h1>
                    <br />
                    <div className="btn_div">
                        {/* <button type='button' onClick={increment}>Increment</button> */}
                        {/* <button type='button' onClick={decrement}>Decrement</button> */}
                        <button onClick={increment}><AddIcon/></button>
                        <button type='button' onClick={decrement}><RemoveIcon/></button>

                    </div>


                </div>
            </div>


        </>

    );
};

export default Index1;
