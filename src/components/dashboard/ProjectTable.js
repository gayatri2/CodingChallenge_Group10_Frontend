import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import { Container, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init()


const tableData = [
  {
    avatar: user1,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    company: "Flexy React",
    status: "pending",
    portfolio: "60",
    budget: "95K",
  },
  {
    avatar: user2,
    name: "Charles Gover",
    email: "hgover@gmail.com",
    company: "DWT",
    status: "done",
    portfolio: "35",
    budget: "95K",
  },
  {
    avatar: user3,
    name: "John Gover",
    email: "hgover@gmail.com",
    company: "Elite React",
    status: "holt",
    portfolio: "30",
    budget: "95K",
  },
  {
    avatar: user4,
    name: "Cameron Gover",
    email: "hgover@gmail.com",
    company: "GUI",
    status: "pending",
    portfolio: "25",
    budget: "95K",
  },
  {
    avatar: user5,
    name: "hatan Gover",
    email: "hgover@gmail.com",
    company: "Ample",
    status: "done",
    portfolio: "20",
    budget: "95K",
  },
];

const ProjectTables = () => {
  const [searchQuery, setSearchQuery] = useState("");


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };


  const filteredData = tableData.filter((tdata) =>
    tdata.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div data-aos="fade-up"  data-aos-duration="1500">


      <Card>
        <CardBody>
          <CardTitle tag="h5">Top Portfolio</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview 
          </CardSubtitle>


          <Container maxWidth="md" sx={{ mt: 5 }}>
  <div style={{ display: 'flex', justifyContent: 'flex-start', marginRight: 'auto' }}>
    <TextField
      id="search"
      type="search"
      label="Search..."
      value={searchQuery}
      onChange={handleSearchChange}
      sx={{ width: 700 }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  </div>
</Container>







          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Lead</th>
                <th>Company</th>
                <th>Status</th>
                <th>Portfolio</th>
                <th>Budget</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2" data-aos="fade-left"  data-aos-duration="1500">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3" >
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td>
                  <div data-aos="fade-left"  data-aos-duration="1500" >
                  <td>{tdata.company}</td>
                  </div>
                  <td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <div data-aos="fade-left"  data-aos-duration="1500">
                  <td>{tdata.portfolio}</td> </div>
                  <td>{tdata.budget}</td>
                 
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
