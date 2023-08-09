import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import TradeTable from './TradeTable';

// get params from url

function TradeWithSecurity(props) {
    const { id } = useParams();
    const [tradeData, settradeData] = useState([])

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
            <h5>TRADE OF SECURITY ID: {id}</h5>
            <Link to="/createtrade" state={{ id: tradeData?.length + 1, securityId: id }}>
                <button>CREATE TRADE</button>
            </Link>
            {tradeData?.length > 0 ? (
                <TradeTable tradeData={tradeData} path = {`/security/gettradewithsecurity/${id}`} />
            ) : (
                <h3>No Trade Data</h3>
            )}
        </div>
    );
}

export default TradeWithSecurity;