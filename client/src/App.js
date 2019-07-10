import React from 'react';
import { 
  Container, 
  Navbar,
  NavbarBrand, 
  Jumbotron,
  InputGroup, 
  InputGroupAddon,
  FormGroup,
  Button,
  Input,
  Row, 
  Col,
} from 'reactstrap';

import Weather from './components/Weather';

class App extends React.Component {

  state = {
      weather: null,  
      cityList: [], 
      newCityName: '', 
    };

  getCityList = ()=>{
    fetch('/api/v1/region') 
    .then(res => res.json()) 
    .then(res => {
      let cityList = res.data.map(r => r.city_name); 
      this.setState({cityList})
    })
  }

  handleInputChange = (e) =>{
    return this.setState({newCityName: e.target.value});
  }

  handleAddCity = () => {
    fetch("/api/v1/region", {
      method: 'post', 
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify({city_name: this.state.newCityName})
    })
    .then(res => res.json())
    .then(res => {
      this.getCityList()
      this.setState({newCityName: ''})
    })
  }

  getCityName =(city) =>{
   fetch(`/api/v1/region/${city}`)
   .then(res => res.json()) 
   .then(weather => {
     console.log('The Weather:', weather);
     this.setState({weather})
   });
  };


  handleCityChange = (e) =>{
    this.getCityName(e.target.value);
  }
  
  componentDidMount(){
    this.getCityList();
  }

  render(){
    return (
      <Container fluid className="centered">
      <Navbar dark color="dark">
        <NavbarBrand href="/">Weather Reporter</NavbarBrand>
      </Navbar>
      <Row>
        <Col>
          <Jumbotron>
            <h1 className="display-5">Weather Reporter</h1>
            <p className="lead"></p>
            <InputGroup>
          <Input
           placeholder="New City..."
           value={this.state.newCityName} 
           onChange={this.handleInputChange}
           />
          <InputGroupAddon addonType="append">
          <Button color="primary" onClick={this.handleAddCity}>Add City</Button>
          </InputGroupAddon>
          </InputGroup>
          </Jumbotron>
         
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="display-6">Current Weather</h1>
          <FormGroup>
            <Input type="select" onChange={this.handleCityChange}>
            {this.state.cityList.length === 0 && <option>No cities added yet.</option>}
            {this.state.cityList.length > 0 && <option>Select a city</option>}
            {this.state.cityList.map((city_name, i) => <option key={i}>{city_name}</option>)}
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <Weather myWeather={this.state.weather}/>
      </Container> 
    )
  }
  
}

export default App;
