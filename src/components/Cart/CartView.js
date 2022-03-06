// ** core
import React, {useEffect, useState} from 'react';
// ** css
import '../../css/components/Cart/CartView.css';
// ** external components
import {useDispatch} from "react-redux";
import {ToastContainer} from "react-toastify";
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button, Input, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
// MUI icons
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import {ediSupplierApiHandler, getSupplierApiHandler} from "../../config/API";
import {showFailedToast, showSuccessToast} from "../../config/showToast";
import Loader from "../../config/LoaderConfig";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));


const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


function CartView() {

    function createData(id, name, endpoint, state) {
        return {id, name, endpoint, state};
    }


    const [selectSuppliers, setSelectSuppliers] = useState([]);
    const [rows, setRow] = useState([]);
    let [isModalOpen, setIsModalOpen] = useState(false);
    let [text, setText] = useState('');
    let [selectRow, setSelectRow] = useState(null);

    let [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();


    useEffect(() => {
        getSupplierHandler();
    }, []);

    const getSupplierHandler = async () => {
        setIsLoading(true);
        let response = await getSupplierApiHandler();

        let {code, result} = response?.data
        if (code === '200') {
            setSelectSuppliers(result);
        } else {
            setSelectSuppliers([]);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        if (selectSuppliers && selectSuppliers.length > 0) {
            let temp = [];
            selectSuppliers.map(item => {
                temp.push(createData(item.id, item.name, item.url, item.state))
            });
            setRow(temp);
        }
    }, [selectSuppliers]);


    const buttonHandler = async (data, defaultUrl) => {
        setIsLoading(true);

        let state = (Number(data.state) < 2) ? 2 : 1;

        let sample = {
            id: Number(data.id),
            name: data.name,
            endpoint: defaultUrl ? data.endpoint : text,
            state: Number(state)
        }


        let response = await ediSupplierApiHandler(sample);
        let {code, result} = response?.data
        if (code === '200') {
            getSupplierHandler();
            showSuccessToast('Update success!')
            setIsModalOpen(false);
        } else {
            showFailedToast('Update failed')
        }
        setIsLoading(false);
    }

    return (
        <>
            <h5 id='cart-middle-panel-title'> Manage Suppliers</h5>

            <section id='cart-item-list-container'>


                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 700}} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>#</StyledTableCell>
                                <StyledTableCell>Retailer name</StyledTableCell>
                                <StyledTableCell align="center">End point</StyledTableCell>
                                <StyledTableCell align="center">state</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell align="left">{row?.id}</StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align="center">
                                        <input id='table-input' value={(row.endpoint ? row.endpoint : '')} onChange={() => {}} />
                                        <Button
                                            onClick={() => {
                                                setIsModalOpen(true);
                                                setText(row?.endpoint)
                                                setSelectRow(row)
                                                // buttonHandler(row);
                                            }}
                                            id='table-btn-submit'
                                            color={'transparent'}
                                        >
                                           update
                                        </Button>
                                        {/*{(row.endpoint != null) ? row.endpoint : 'No Data'}*/}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <Button
                                            onClick={() => buttonHandler(row, true)}
                                            id='table-btn'
                                            color={'light'}
                                        >
                                            {(row.state < 2) ? <PauseIcon/>
                                                : <PlayArrowIcon/>}
                                        </Button></StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>


            </section>




            {/*modal*/}

            <Modal toggle={function noRefCheck(){}}  isOpen={isModalOpen}>
                <ModalHeader toggle={() => setIsModalOpen(false)}>
                    Modal title
                </ModalHeader>
                <ModalBody>
                    <Input
                        placeholder=""
                        rows={5}
                        type="textarea"
                        value={text}
                        onChange={(val) => setText(val.target.value)}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={() => buttonHandler(selectRow, false)}
                    >
                       update
                    </Button>
                    {' '}
                    <Button onClick={() => setIsModalOpen(false)}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>











            <Loader isLoading={isLoading}/>
            {/* toast : important */}
            <ToastContainer/>
        </>
    )
}

export default CartView
