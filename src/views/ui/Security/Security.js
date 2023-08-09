import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Link, useParams, useNavigate } from "react-router-dom";
import { LineAxisOutlined } from '@mui/icons-material';
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from 'axios'
import { Badge, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export default function Security(props) {
  const navigate = useNavigate()
  const [securityData, setsecurityData] = useState([])
  const [originalData, setOrignalData] = useState([])
  const [modalInfo, setmodalInfo] = useState([])
  const [open, setOpen] = React.useState(false);
  const [openname, setOpenName] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenName = () => setOpenName(true);
  const handleCloseName = () => setOpenName(false);

  const { securityId, setSecurityId } = useState(null);
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

  const loadsecuritydata = async () => {
    const result = await fetch("http://localhost:8081/api/v1/getAllSecurities", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const info = await result.json();


    setsecurityData(info)
    setOrignalData(info)

  };

  const Deletesecuritydata = async (id) => {
    let num=false
    try {
      console.log(id)
      const SecurityData = await axios.post('http://localhost:8081/api/v1/deleteSecurity', id);
      console.log(SecurityData.data);
    } catch (error) {
      console.error('Error:', error);
      num=true
      Swal.fire({
        title: 'FAIL TO DELETE',
        icon: 'error',
        dangerMode: true,
        button: false,
        showConfirmButton: false,
        timer: 900,
      })
    }
    if(!num)
    {
      Swal.fire({
        title: 'SUCCESSFULLY DELETED',
        icon: 'success',
        dangerMode: true,
        button: false,
        showConfirmButton: false,
        timer: 900,
    })
  }
  };

  const getData = async (id) => {
    const response = await axios.get(`http://localhost:8081/api/v1/getSecurityById/${id}`)
    setmodalInfo(response.data)
    // console.log(modalInfo.id)
  }


  const getSecurityById = async (id) => {

    const SecurityData = await axios.get(`http://localhost:8081/api/v1/getSecurityById/${id}`)

    console.log(SecurityData)

  };

  const SecurityTrade = (id) => {
    navigate(`gettradewithsecurity/${id}`)
  }

  const currentDate = new Date();

  const filterSecurityData = useCallback((start, end) => {
    const filteredData = originalData.filter(security => {
      const securityDate = new Date(security.maturityDate);
      if(!start && !end) return true;
      return securityDate >= new Date(start) && securityDate <= new Date(end);
    });

    setsecurityData(filteredData);
  }, [originalData]);

  useEffect(() => {
    filterSecurityData(startDate, endDate);
  }, [filterSecurityData]);

  useEffect(() => {
    loadsecuritydata()
  }, [])




  return (
    <>
      <Link to="/createsecurity" state={{ id: securityData?.length + 1 }}>
        <Button outline color="success">CREATE <AddCircleIcon /></Button>{' '}
      </Link>
      {/* reduce width  */}
      <div className="d-flex justify-content-between align-items-center mt-3 mb-3" style={{ width: '50%' }}>
        <Input
          type="date"
          value={startDate}
          onChange={(e) => {
            setStartDate(e.target.value);
          }}

        />
        <Input
          type="date"
          value={endDate}
          onChange={(e) => {
            // change date to yyyy-mm-dd format
            setEndDate(e.target.value);
          }}
        />
        {/* <button onClick={() => filterSecurityData(startDate, endDate)}>Filter</button> */}
        <Button outline color="primary" onClick={() => filterSecurityData(startDate, endDate)}>Filter</Button>{' '}
      </div>

      {securityData.length > 0 ? (
        <>
          {/* center all content */}
          <Table className="text-center">
            <Thead>
              {/* center each table heading */}
              <Tr>
                <Th scope="col">S.N</Th>
                <Th scope="col">Coupon</Th>
                <Th scope="col">Cusip</Th>
                <Th scope="col">FaceValue</Th>
                <Th scope="col">Isin</Th>
                <Th scope="col">Issuer</Th>
                <Th scope="col">MaturityDate</Th>
                <Th scope="col">Status</Th>
                <Th scope="col">Type</Th>
                <Th scope="col">Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {securityData.map((security, index) => {
                return (
                  <Tr key={security.id} className={new Date(security.maturityDate) < currentDate ? 'past-date' : '' }>
                    <Th scope="row">{index + 1}</Th>
                    <Td>{security.coupon}</Td>
                    <Td>{security.cusip}</Td>
                    <Td>{security.faceValue}</Td>
                    <Td>{security.isin}</Td>
                    <Td>{security.issuer}</Td>
                    <Td>{new Date(security.maturityDate).toLocaleDateString()}</Td>
                    <Td>
                      {security.status === 'Active' ? (
                        <Badge color="success">Active</Badge>
                      ) : (
                        <Badge color="danger">Inactive</Badge>
                      )}
                    </Td>

                    <Td>
                      {security.type === 'Bond' ? (
                        <Badge color="info">Bond</Badge>
                      ) : (
                        <Badge color="warning">Stock</Badge>
                      )}
                    </Td>


                    <Td>
                      <Link className="btn btn-outline-primary mx-2" onClick={() => {
                        handleOpenName(); // Call the first function
                        getData(security.id);
                      }}

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

                              <b>Coupon: {modalInfo?.coupon}</b><br />
                              <b>Cusip: {modalInfo?.cusip}</b><br />
                              <b>FaceValue: {modalInfo?.faceValue}</b><br />
                              <b>Isin: {modalInfo?.isin}</b><br />
                              <b>Issuer: {modalInfo?.issuer}</b><br />
                              <b>MaturityDate: {modalInfo?.maturityDate}</b><br />
                              <b>Status: {modalInfo?.status}</b><br />
                              <b>Type: {modalInfo?.type}</b><br />
                              <Button outline color="info" onClick={() => {
                                handleCloseName();
                                SecurityTrade(modalInfo?.id);
                              }}>Trades</Button>
                            </Typography>
                          </Box>
                        </Fade>
                      </Modal>



                      <Link to='/updatesecurity' state={{ id: security.id, isinnumber: security.isin }} className="btn btn-primary mx-2">
                        Update</Link>
                      <Link className="btn btn-outline-primary mx-2"
                        onClick={() => Deletesecuritydata(security.isin)}
                      >
                        Delete
                      </Link>
                    </Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </>
      ) : (
        <div>NO SECURITY FOUND.</div>
      )}

    </>
  );
}