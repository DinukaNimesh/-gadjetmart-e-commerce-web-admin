// ** core
import React, { useState } from 'react';
// ** css
import '../../css/components/Cart/HistoryItem.css';
// ** external components
import { Button, Badge } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { showFailedToast, showSuccessToast } from '../../config/showToast';

function HistoryItem({item=[]}) {

    const [isOpen, setIsOpen] = useState(false);

  const ListItemCard = ({data}) => {
    return (<div id='item-h-container'>
          <div id='history-row'>
            <img src={data?.itemImage} id='img-history' alt="img" />
            <div id='text-container'>
              <h6 id='text-style'>       <b>Item name :</b> {data?.itemName}</h6>
              <h6 id='text-style'> <b>Sub total price :</b> {data?.subtotal}</h6>
              <h6 id='text-style'>             <b>QTY :</b> {data?.qty}</h6>
              <h6 id='text-style'>       <b>Shop name :</b> {data?.shopName}</h6>
              <h6 id='text-style'> <b>Warranty period :</b> {data?.warrantyRequest}</h6>
              <h6 id='text-style'><b>Location Address :</b> {data?.deliveryLocation}</h6>
            </div>
          </div>
    </div>)
  }



  return (
    <main id='history-item-container'>
        <header id="history-header-container">
          <h6>order ref: #6004</h6>
          <h6>total price: LKR 129000</h6>
          <h6>created date: 2022-03-04 01:33:59</h6>

            <Button
                id='checkout-button'
                color={isOpen? 'warning': 'info'}
                onClick={() => setIsOpen(open => !open)}
            >
                {isOpen? ' show less': ' show more'}
            </Button>
        </header>

      {isOpen && <section id="history-item-list-container">

        {item &&item?.details.map( (item, index) =>  <ListItemCard key={index} data={item}/>)}

      </section>}
    </main>
  )
}

export default HistoryItem;
