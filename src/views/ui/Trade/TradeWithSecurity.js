import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

// get params from url

function TradeWithSecurity(props) {
    const { id } = useParams();
    const [tradeData, settradeData] = useState([])

    // console.log(id);
    
    const getTradesBySecurityId = async (id) => {
        const TradeData = await axios.get(`http://localhost:8081/api/v1/getTradesBySecurity/${id}`)
        const newTradeData = TradeData.data
        console.log(newTradeData)
        settradeData(newTradeData)

    };

    useEffect(() => {
        getTradesBySecurityId(id)
    }, [])

    return (
        <div>
            TRADE WITH SECURITY
            {tradeData?.length > 0 ? (
                <Table>
                    <Thead>
                        <Tr>
                            <Th scope="col">S.N</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {tradeData.map((user, index) => (
                            <Tr key={user.id}>
                                <Th scope="row">{index + 1}</Th>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            ) : (
                <h3>No Trade Data</h3>
            )}
        </div>
    );
}

export default TradeWithSecurity;