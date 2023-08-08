import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table';
import { Link } from "react-router-dom";


const TradeTable = ({ tradeData }) => {
    // create a modal to edit the trade

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
                                <Link to='/updatetrade'
                                    state={{ id: trade.id }}
                                    className="btn btn-primary mx-2">
                                    Update
                                </Link>



                            </Th>
                        </Tr>

                    )
                })}
            </Tbody>
        </Table>
    )


}

export default TradeTable;