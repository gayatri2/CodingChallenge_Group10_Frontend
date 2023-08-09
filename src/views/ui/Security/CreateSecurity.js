import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';

function CreateSecurity(props) {
  const location = useLocation();
  console.log(location.state)
  const { id } = location.state;

  // const { id } = location?.state;
  // const { formInformation } = location?.state;
  const [coupon, setCoupon] = useState('');
  const [cusip, setCusip] = useState('');
  const [faceValue, setFaceValue] = useState('');
  const [isin, setIsin] = useState('');
  const [issuer, setIssuer] = useState('');
  const [status, setStatus] = useState('Active');
  const [type, setType] = useState('bond');
  const [maturityDate, setmaturityDate] = useState('');
  const initialId = issuer.length || 0;




  // const handleSubmit = (formInformation) => {
  //   // Handle form submission, e.g., make an API request to save the data
  //   console.log('Form data submitted:', formInformation);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      id: initialId,
      coupon,
      cusip,
      faceValue,
      isin,
      issuer,
      status,
      type,
      maturityDate

    };

    const response = await fetch('http://localhost:8081/api/v1/createSecurity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    console.log(JSON.stringify(response) + " " + JSON.stringify(formData))


  };




  return (
    <div className="container">
      <div className="register-box mx-auto">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="id" style={{ color: 'black' }}>ID</Label>
            <Input
              type="number"
              name="id"
              id="id"
              placeholder={id}
              disabled
            />
          </FormGroup>

          <FormGroup>
            <Label for="issuer" style={{ color: 'black' }}>Issuer</Label>
            <Input
              type="text"
              name="Issuer"
              id="issuer"
              placeholder="Enter Issuer"
              value={issuer}
              onChange={(e) => setIssuer(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="coupon" style={{ color: 'black' }}>Coupon</Label>
            <Input
              type="number"
              name="coupon"
              id="coupon"
              placeholder="Enter Coupon"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="maturityDate" style={{ color: 'black' }}>maturityDate</Label>
            <Input
              type="date"
              name="maturityDate"
              id="maturityDate"
              value={maturityDate} // Make sure you have a state to manage the selected date
              onChange={(e) => setmaturityDate(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="type" style={{ color: 'black' }}><b>Type</b></Label>
            <Input
              type="select"
              name="type"
              id="type"
              defaultValue={type}

              required
            >
              <option value="bond">Bond</option>
              <option value="stock">Stock</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="faceValue" style={{ color: 'black' }}>FaceValue</Label>
            <Input
              type="number"
              name="faceValue"
              id="faceValue"
              placeholder="Enter FaceValue"
              value={faceValue}
              onChange={(e) => setFaceValue(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="status" style={{ color: 'black' }}><b>Status</b></Label>
            <Input
              type="select"
              name="status"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="cusip" style={{ color: 'black' }}>Volunteer Work</Label>
            <Input
              type="number"
              name="cusip"
              id="cusip"
              placeholder="Enter Cusip"
              value={cusip}
              onChange={(e) => setCusip(e.target.value)}
              required
            />
          </FormGroup>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>The value should be unique and 10 digit integer</Typography>
            </AccordionSummary>
          </Accordion>

          <FormGroup>
            <Label for="isin" style={{ color: 'black' }}>ISIN Number</Label>
            <Input
              type="text"
              name="isin"
              id="isin"
              placeholder="Enter ISIN number"
              value={isin}
              onChange={(e) => setIsin(e.target.value)}
              required
            />
          </FormGroup>

          <button className="btn btn-primary btn-custom-2" type="submit">
            Registration
          </button>
        </Form>
      </div>
    </div>
  );
}

export default CreateSecurity;
