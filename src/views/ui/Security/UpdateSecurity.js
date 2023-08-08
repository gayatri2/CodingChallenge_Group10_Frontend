import React,{useState} from 'react';
import { useParams,Link, useLocation } from 'react-router-dom';
import axios from 'axios';

function UpdateSecurity(props) {
      let location = useLocation();
      const [info, setinfo] = useState([])
      console.log(location.state)
      const { userid } = useParams()
      console.log(userid)

    const fetchSecurityDetail=async()=>{
        const detail=await axios.get(`http://localhost:8081/api/v1//getSecurityByUserId/{userId}`)
    }
    return (
        <div>
            HELLO {userid}
        </div>
    );
}

export default UpdateSecurity;