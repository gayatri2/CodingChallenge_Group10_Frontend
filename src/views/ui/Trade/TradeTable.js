import React, {useState} from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

const TradeTable = ({ tradeData }) => {
    // create a modal to edit the trade
    const [open, setOpen] = useState(false);
    const [openname, setOpenName] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenName = () => setOpenName(true);
    const handleCloseName = () => setOpenName(false);


    return (
        <Table className="table table-bordered table-hover">
            <Thead>
                <Tr>
                    <Th scope="col">S.N</Th>
                    <Th scope="col">Quantity</Th>
                    <Th scope="col">Security</Th>
                    <Th scope="col">Status</Th>
                    <Th scope="col">Price</Th>
                    <Th scope="col">Counterparty</Th>
                    <Th scope="col">Buy_Sell</Th>
                    <Th scope="col">TradeDate</Th>
                    <Th scope="col">SettlementDate</Th>
                    <Th scope="col">Action</Th>
                </Tr>
            </Thead>
            <Tbody>
                {tradeData.map((trade, index) => {
                    // console.log(trade)
                    const { quantity, status, price, counterParty, buySell, tradeDate, settlementDate, security } = trade
                    // format settlement date and trade date
                    const settlementDateFormatted = new Date(settlementDate).toLocaleDateString()
                    const tradeDateFormatted = new Date(tradeDate).toLocaleDateString()

                    return (
                        <Tr key={trade.id}>
                            <Th scope="row">{index + 1}</Th>
                            <Th >{quantity}</Th>
                            <Th>{security.issuer}</Th>
                            <Th
                                style={{
                                    color: status === "Completed" ? "green" : "red",
                                    fontWeight: "bold"
                                }}
                            >{status}</Th>
                            <Th>{price}</Th>
                            <Th>{counterParty.name}</Th>
                            <Th>{buySell}</Th>
                            <Th>{tradeDateFormatted}</Th>
                            <Th>{settlementDateFormatted}</Th>
                            <Th>
                                <button
                                    className="btn btn-primary mr-2"
                                    onClick={() => handleOpen()}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleOpenName()}
                                >
                                    Delete
                                </button>


                            </Th>
                        </Tr>

                    )
                })}
            </Tbody>
        </Table>
    )


}

export default TradeTable;