import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';

function CreateTrade(props) {
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location.state)
  const { id } = location.state;

  // const { id } = location?.state;
  // const { formInformation } = location?.state;
  const [BookId, setBookId] = useState(1);
  const [CounterpartyId, setCounterpartyId] = useState(201);
  const [SecurityId, setSecurityId] = useState(301);
  const [Quantity, setQuantity] = useState(0);
  const [Status, setStatus] = useState('Completed');
  const [Price, setPrice] = useState(0);
  const [Buy_Sell, setBuy_Sell] = useState('Buy');
  const [TradeDate, setTradeDate] = useState(new Date());
  const [SettlementDate, setSettlementDate] = useState(new Date());



  // const initialId = issuer.length || 0;
  const initialId = 0;

  // const handleSubmit = (formInformation) => {
  //   // Handle form submission, e.g., make an API request to save the data
  //   console.log('Form data submitted:', formInformation);
  // };

  const getSecurityById = async (id) => {

    // const SecurityData = await axios.get(`http://localhost:8081/api/v1/getSecurityById/${id}`)
    const SecurityData = await axios.get(`http://localhost:8081/api/v1/getSecurityById/301`)

  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const SecurityData = await axios.get(`http://localhost:8081/api/v1/getSecurityById/${SecurityId}`)

    
    const newTradeData = {
      // id: initialId,
      book: {
        id: BookId,
        book_NAME: 'Introduction to AI',
      },
      counterParty: {
        id: CounterpartyId,
        name: 'Alpha Traders',
      },
      security: {
        id: SecurityId,
        issuer: SecurityData.issuer,
        maturityDate: SecurityData.maturityDate,
        coupon: SecurityData.coupon,
        type: SecurityData.type,
        faceValue: SecurityData.faceValue,
        status: SecurityData.status,
        isin: SecurityData.isin,
        cusip: SecurityData.cusip,
      },
      quantity: Quantity,
      status: Status,
      price: Price,
      buySell: Buy_Sell,
      tradeDate: TradeDate,
      settlementDate: SettlementDate,
    };

    console.log(newTradeData)


    const response = await fetch('http://localhost:8081/api/v1/saveTrade', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTradeData),
    });
    console.log(JSON.stringify(response) + " " + JSON.stringify(newTradeData))

    // navigate('/trade')

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

            <Label for="BookId" style={{ color: 'black' }}>BookId</Label>
            <Input
              type="number"
              name="BookId"
              id="bookid"
              placeholder="Enter BookId"
              value={BookId}
              onChange={(e) => setBookId(e.target.value)}
              required
            />

            <Label for="SecurityId" style={{ color: 'black' }}>SecurityId</Label>
            <Input
              type="number"
              name="SecurityId"
              id="SecurityId"
              placeholder='Enter SecurityId'
              value={SecurityId} // Make sure you have a state to manage the selected date
              onChange={(e) => setSecurityId(e.target.value)}
              required
            />

            <Label for="CounterPartyId" style={{ color: 'black' }}>CounterPartyId</Label>
            <Input
              type="number"
              name="CounterPartyId"
              id="CounterPartyId"
              placeholder='Enter CounterPartyId'
              value={CounterpartyId} // Make sure you have a state to manage the selected date
              onChange={(e) => setCounterpartyId(e.target.value)}
              required
            />

            <Label for="Quantity" style={{ color: 'black' }}>Quantity</Label>
            <Input
              type="number"
              name="Quantity"
              id="Quantity"
              value={Quantity} // Make sure you have a state to manage the selected date
              onChange={(e) => setQuantity(e.target.value)}
              required
            />

            <Label for="Price" style={{ color: 'black' }}>Price</Label>
            <Input
              type="number"
              name="Price"
              id="Price"
              value={Price} // Make sure you have a state to manage the selected date
              onChange={(e) => setPrice(e.target.value)}
              required
            />

            <Label for="Buy_Sell" style={{ color: 'black' }}>Buy_Sell</Label>
            {/* two options of buy/sell */}
            <Input
              type="select"
              name="Buy_Sell"
              id="Buy_Sell"
              value={Buy_Sell} // Make sure you have a state to manage the selected date
              onChange={(e) => setBuy_Sell(e.target.value)}
              required
            >
              <option value="Buy">Buy</option>
              <option value="Sell">Sell</option>
            </Input>


            <Label for="Status" style={{ color: 'black' }}>Status</Label>
            <Input
              type="select"
              name="Status"
              id="Status"
              value={Status} // Make sure you have a state to manage the selected date
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>

            </Input>


            <Label for="TradeDate" style={{ color: 'black' }}>TradeDate</Label>
            <Input
              type="date"
              name="TradeDate"
              id="TradeDate"
              value={TradeDate} // Make sure you have a state to manage the selected date
              onChange={(e) => setTradeDate(e.target.value)}
              required
            />

            <Label for="SettlementDate" style={{ color: 'black' }}>SettlementDate</Label>
            <Input
              type="date"
              name="SettlementDate"
              id="SettlementDate"
              value={SettlementDate} // Make sure you have a state to manage the selected date
              onChange={(e) => setSettlementDate(e.target.value)}
              required
            />
          </FormGroup>



          <button className="btn btn-primary btn-custom-2" type="submit">
            CreateTrade
          </button>
        </Form>
      </div>
    </div>
  );
}

export default CreateTrade;