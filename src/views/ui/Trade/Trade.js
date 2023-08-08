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

  /* const loadsecuritydata = async () => {
       const result = await fetch("http://localhost:8081/api/v1/getAllSecurities", {
         method: "GET",
         headers: {
           "Content-Type": "application/json",
         },
       });

       const info = await result.json();
        console.log(info)
        setsecurityData(info)
   
     };*/



  const Deletetradedata = async (user) => {

    console.log(user)
    const TradeData = await axios.post(`http://localhost:8081/api/v1/deleteSecurity/${user}`)
    console.log(TradeData)
  };


  const getTradeById = async (id) => {

    const TradeData = await axios.get(`http://localhost:8081/api/v1/getTradeById/${id}`)
    console.log(TradeData)

  };

  useEffect(() => {
    // loadsecuritydata()
    // console.log(securityData)
  }, [])
  return (
    <>
      <Link to="/createtrade" state={{ id: tradeData?.length + 1 }}>
        <button>CREATE</button>
      </Link>
      {tradeData?.length > 0 ? (
        <>
          <Table>
            <Thead>
              <Tr>
                <Th scope="col">S.N</Th>
                <Th scope="col">Quantity</Th>
                <Th scope="col">Status</Th>
                <Th scope="col">Price</Th>
                <Th scope="col">Buy_Sell</Th>
                <Th scope="col">TradeDate</Th>
                <Th scope="col">SettlementDate</Th>

              </Tr>
            </Thead>
            <Tbody>
              {tradeData.map((user, index) => (
                <Tr key={user.id}>
                  <Th scope="row">{index + 1}</Th>
                  <Td>{user.quantity}</Td>
                  <Td>{user.status}</Td>
                  <Td>{user.price}</Td>
                  <Td>{user.buySell}</Td>
                  <Td>{user.tradeDate}</Td>
                  <Td>{user.settlementDate}</Td>


                  <Td>


                    <Link className="btn btn-outline-primary mx-2" onClick={handleOpenName}
                    // onClick={() => getSecurityById(user.id)}
                    >
                      View
                    </Link>
                    {/* <Button onClick={handleOpenName}>Open modal</Button> */}
                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      open={openname}
                      onClose={handleCloseName}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                        timeout: 1500,
                      }}
                    >
                      <Fade in={openname}>
                        <Box sx={stylename}>
                          <Typography
                            id="transition-modal-title"
                            variant="h5"
                            component="h4"
                          >
                            <b>Description</b>

                          </Typography>
                          <Typography id="transition-modal-description" sx={{ mt: 3 }}>
                            <b>Quantity: {user.quantity}</b><br />
                            <b>Status: {user.status}</b><br />
                            <b>Price: {user.price}</b><br />
                            <b>Buy_Sell: {user.buySell}</b><br />
                            <b>TradeDate: {user.tradeDate}</b><br />
                            <b>SettlementDate: {user.settlementDate}</b><br />
                          </Typography>
                        </Box>
                      </Fade>
                    </Modal>



                    {/* <Link className="btn btn-primary mx-2" to={`/updatesecurity/${user.id}`}> */}
                    {/* <Link className="btn btn-primary mx-2" to={`/updatesecurity/${user.id}`}  state={{id:user.id}}>
                Update
              </Link> */}

                    <button
                      className="btn btn-primary mx-2"
                      onClick={() => navigate(`/updatetrade/${user.id}`, { id: user.id })}
                    >
                      Update
                    </button>
                    <Link className="btn btn-outline-primary mx-2"
                      onClick={() => Deletetradedata(user)}
                    >
                      Delete
                    </Link>


                    {/* <button
                className="btn btn-danger mx-2"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button> */}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </>
      ) : (
        <div>NO SECURITY FOUND.</div>
      )}

    </>
  );
}