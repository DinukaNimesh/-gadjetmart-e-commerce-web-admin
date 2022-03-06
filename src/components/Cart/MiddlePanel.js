// ** core
import React from 'react';
// ** css
import '../../css/components/Cart/MiddlePanel.css';
// ** external components
import CartView from './CartView';
import OrderHistory from './OrderHistory';

function MiddlePanel({isCardViewOpen}) {
    return (
        <main id='cart-middle-panel-container'>
            {isCardViewOpen ? <CartView/>
                :
                <OrderHistory/>}

        </main>
    )
}

export default MiddlePanel;
