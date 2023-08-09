import React, { useEffect, useState } from 'react';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios'
import TradeTable from './TradeTable';
import { Badge,Button } from 'reactstrap';
import AddCircleIcon from '@mui/icons-material/AddCircle';

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

      <Button outline color="success">CREATE <AddCircleIcon/></Button>{' '}

      </Link>
      {tradeData?.length > 0 ? (
        <TradeTable tradeData={tradeData} path = {'/trade'}/>
      ) : (
        <h3>No Trade Data</h3>
      )}

    </>
  );
}