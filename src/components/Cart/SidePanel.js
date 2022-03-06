// ** core
import React, {useEffect, useState} from 'react';
// ** css
import '../../css/components/Cart/SidePanel.css';
// ** external components
import {Button} from 'reactstrap';

function SidePanel({togglePanel}) {
    const [isCartView, setisCartView] = useState(true);

    useEffect(() => {
        togglePanel(isCartView)
    }, [isCartView]);

    return (
        <section id='cart-side-panel-container'>
            <Button
                onClick={() => setisCartView(true)}
                id='side-panel-item'
                color={isCartView ? 'primary' : 'secondary'}
            >
                Manage Suppliers
            </Button>

            <Button
                onClick={() => setisCartView(false)}
                id='side-panel-item'
                color={!isCartView ? 'primary' : 'secondary'}
            >
                Order History
            </Button>

        </section>
    )
}

export default SidePanel;
