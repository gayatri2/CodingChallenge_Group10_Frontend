import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Link, useParams } from "react-router-dom";
import { LineAxisOutlined } from '@mui/icons-material';
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Security from './../Security/Security';

export default function Trade(props) {
  const navigate = useNavigate()
  const [tradeData, settradeData] = useState([])
  const [open, setOpen] = React.useState(false);
  const [openname, setOpenName] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenName = () => setOpenName(true);
  const handleCloseName = () => setOpenName(false);

  const stylename = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 320,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };


  const Deletetradedata = async (user) => {

    console.log(user)
    const TradeData = await axios.post(`http://localhost:8081/api/v1/deleteSecurity/${user}`)
    console.log(TradeData)
  };


  const getTradeById = async (id) => {

    const TradeData = await axios.get(`http://localhost:8081/api/v1/getTradeById/${id}`)
    console.log(TradeData)

  };

  const loadTradeData = async () => {
    const result = await fetch("http://localhost:8081/api/v1/getAllTrades", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const info = await result.json();

    settradeData(info)
  };

  useEffect(() => {
    loadTradeData();
  }, [])
  return (
    <>
      <Link to="/createtrade" state={{ id: tradeData?.length + 1 }}>
        <button>CREATE</button>
      </Link>
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
                  <Th scope="row">{quantity}</Th>
                  <Th>{security.issuer}</Th>
                  <Th
                    style={{
                      color: status === "Completed" ? "green" : "red",
                      fontWeight: "bold"
                    }}
                  >{status}</Th>
                  <Th>{price}</Th>
                  <Th>{counterParty.id}</Th>
                  <Th>{buySell}</Th>
                  <Th>{tradeDateFormatted}</Th>
                  <Th>{settlementDateFormatted}</Th>

                </Tr>

              )
            })}
          </Tbody>
        </Table>
      ) : (
        <h3>No Trade Data</h3>
      )}

    </>
  );
}