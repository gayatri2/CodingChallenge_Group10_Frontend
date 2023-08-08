import React,{useEffect,useState} from 'react';
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

export default function Security(props) {
    const navigate=useNavigate()
    const [securityData, setsecurityData] = useState([])
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

    const loadsecuritydata = async () => {
        const result = await fetch("http://localhost:8081/api/v1/getAllSecurities", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        const info = await result.json();
         console.log(info)
         setsecurityData(info)
    
      };

      const Deletesecuritydata = async (user) => {
            
           console.log(user)
           const SecurityData=await axios.post(`http://localhost:8081/api/v1/deleteSecurity/${user}`) 
           console.log(SecurityData)
      };
           

      const getSecurityById =  async(id) => {
           
     const SecurityData=await axios.get(`http://localhost:8081/api/v1/getSecurityById/${SecId}`)
     console.log(SecurityData)

   };








      useEffect(() => {
        loadsecuritydata()
        console.log(securityData)
      }, [])
  return (
    <>
        <Link to="/createsecurity" state={{ id: securityData?.length+1 }}>
        <button>CREATE</button>
      </Link>
    {securityData?.length > 0 ? (
  <>
    <Table>
      <Thead>
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
        </Tr>
      </Thead>
      <Tbody>
        {securityData.map((user, index) => (
          <Tr key={user.id}>
            <Th scope="row">{index + 1}</Th>
            <Td>{user.coupon}</Td>
            <Td>{user.cusip}</Td>
            <Td>{user.faceValue}</Td>
            <Td>{user.isin}</Td>
            <Td>{user.issuer}</Td>
            <Td>{user.maturityDate}</Td>
            <Td>{user.status}</Td>
            <Td>{user.type}</Td>

            <Td>

            
       <Link className="btn btn-outline-primary mx-2"  onClick={handleOpenName} 
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
                  <b>Coupon: {user.coupon}</b><br/>
                  <b>Cusip: {user.cusip}</b><br/>
                  <b>FaceValue: {user.faceValue}</b><br/>
                  <b>Isin: {user.isin}</b><br/>
                  <b>Issuer: {user.issuer}</b><br/>
                  <b>MaturityDate: {user.maturityDate}</b><br/>
                  <b>Status: {user.status}</b><br/>
                  <b>Type: {user.type}</b><br/>
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
      onClick={() => navigate(`/updatesecurity/${user.id}`, { id: user.id })}
    >
      Update
    </button>
              <Link className="btn btn-outline-primary mx-2" 
                  onClick={() => Deletesecuritydata(user)}
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