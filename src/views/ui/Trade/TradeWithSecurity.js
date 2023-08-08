import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

// get params from url

function TradeWithSecurity(props) {
    const { id } = useParams();
    const [tradeData, settradeData] = useState([])

    console.log(id);

    const getTradesBySecurityId = async (id) => {
        const TradeData = await axios.get(`http://localhost:8081/api/v1/getTradesBySecurity/${id}`)
        const newTradeData = TradeData.data
        // console.log(newTradeData)
        settradeData(newTradeData)

    };

    useEffect(() => {
        getTradesBySecurityId(id)
    }, [])

    return (
        <div>
            TRADE WITH SECURITY
            {tradeData?.length > 0 ? (
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

                                    </Th>


                                </Tr>

                            )
                        })}
                    </Tbody>
                </Table>
            ) : (
                <h3>No Trade Data</h3>
            )}
        </div>
    );
}

export default TradeWithSecurity;