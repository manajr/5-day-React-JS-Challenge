import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format"
import {useStateValue} from './StateProvider';
import {valueSubTotal} from './reducer';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                        SubTotal ({basket.length} items):
                        <strong>{value}
                        </strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains
                            a gift
                        </small>
                    </>
                    )
                }
                decimalScale={2}
                value={valueSubTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
