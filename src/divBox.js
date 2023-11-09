import { useState } from "react";

function DivBox(){
    const [counter, setCounter] = useState(0);
    
    function Increase(){
        setCounter(()=> counter + 1)
    }

    function Reset(){
        setCounter(()=> 0)
    }
    return(
        <section>
            <div className="digitContainer">
                {counter}
            </div>
            <div className="controller">
                <button onClick={Increase}>COUNT</button>
                <button onClick={Reset}>RESET</button>
            </div>
            
            
        </section>
    )
}

export default DivBox;