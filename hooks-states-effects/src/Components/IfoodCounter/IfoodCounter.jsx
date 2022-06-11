import './IfoodCounter.css';
import {useEffect, useState} from 'react';

function IfoodCounter(){
    
    const price = 12.00;

    const [value, setValue] = useState(1);
    const [buttonStyle, setButtonStyle] = useState("minus active");
    const [totalPrice, setTotalPrice] = useState(price);

    useEffect(()=>{
        if(value <= 1){
            setButtonStyle('minus disabled');
        }else{
            setButtonStyle('minus active');
        }
        setTotalPrice(price * value);
    }, [value]);

    function down(){
        if(value > 1) {
            setValue(value-1);
        }
    }

    function up(){
        setValue(value+1);
        
    }
    
    return (
        <div id="IfoodCounter">
            <div class="widget">
                <button className={buttonStyle} onClick={down}>-</button>
                <span className="counter">{value}</span>
                <button className={`plus active`} onClick={up}>+</button>
            </div>
            <div class="total">
                R${totalPrice}
            </div>
        </div>
    );

}

export default IfoodCounter;