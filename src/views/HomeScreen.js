// ** core
import React, {useState} from 'react';
import '../css/views/CartScreen.css';
// ** import components
import SidePanel from '../components/Cart/SidePanel';
import MiddlePanel from '../components/Cart/MiddlePanel';
import {Link} from "react-router-dom";

// ** css


function HomeScreen() {

    const [isCartViewPanel, setisCartViewPanel] = useState(true);

    const togglePanelHandler = (isCardView) => {
        setisCartViewPanel(isCardView);
    }

    return (
        <div>
            <Link to='/' id='logout-container'>
                <img src={require('../assets/log-out.png')} id="header-logout-logo"/>
            </Link>


            <main id='cart-container'>

                <SidePanel togglePanel={togglePanelHandler}/>
                <MiddlePanel isCardViewOpen={isCartViewPanel}/>

            </main>
        </div>

    )
}

export default HomeScreen;
