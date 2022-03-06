// ** core
import React, {useEffect, useState} from 'react';
// ** css
import '../../css/components/Cart/OrderHistory.css';
// ** external components
import HistoryItem from './HistoryItem';
import {getOrderByDateRangeApiHandler} from "../../config/API";
import Loader from "../../config/LoaderConfig";
import Box from '@mui/material/Box';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';
import {formatDate} from "../../util/times";


function OrderHistory() {
// ** calender
    const [value, setValue] = React.useState([null, null]);


    const [itemArray, setItemArray] = useState([]);
    let [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function initialInvoke() {
            setIsLoading(true);
            let str = await formatDate(value[0].toString());
            let end = await formatDate(value[1].toString());
            let data = {
                startDate: str,
                endDate: end,
            }

            let response = await getOrderByDateRangeApiHandler(data);
            let {code, result} = response?.data;

            if (code === '200') {
                setItemArray(result);
            } else {
                setItemArray([]);
            }

            setIsLoading(false)

        }

        if (value[0] != null && value[1] !== null) {
            initialInvoke();
        }


    }, [value]);


    return (
        <>

            <h5 id='cart-middle-panel-title'>Order History</h5>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateRangePicker
                    label="Advanced keyboard"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    renderInput={(startProps, endProps) => (
                        <React.Fragment>
                            <input ref={startProps.inputRef} {...startProps.inputProps} />
                            <Box sx={{mx: 1}}> to </Box>
                            <input ref={endProps.inputRef} {...endProps.inputProps} />
                        </React.Fragment>
                    )}
                />
            </LocalizationProvider>

            <section id='order-history-item-list-container'>

                {itemArray && itemArray.map((item, index) => <HistoryItem key={index} item={item}/>)}

            </section>

            <Loader isLoading={isLoading}/>
        </>
    )
}

export default OrderHistory;
