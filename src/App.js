import React, { Component } from "react";
import Wrapper from "./Wrapper/index";
import Header from "./Header/header";
import Searchbar from "./Searchbar/search";
import API from "./Utils/api";
import Card from "./Card/employee";

class App extends Component {
  state = {
    employees: [],
    search: "",
    allEmployees: [],
  };

  componentDidMount() {
    this.listEmployees(
      "?inc=name,picture,location,registered,email,phone,dob&nat=US&results=30"
    );
  }

  listEmployees = (query) => {
    console.log("Got here");
    API.getUsers(query)
      .then((res) => {
        this.setState({
          employees: res.data.results,
          allEmployees: res.data.results,
        });
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  removeEmployee = (id) => {
    const employees = this.state.employees.filter(
      (employee) => this.state.employees.indexOf(employee) !== id
    );
    this.setState({ employees });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    const employees = this.state.allEmployees.filter((employee) =>
      employee.name.trim().toLowerCase().includes(value.trim().toLowerCase())
    );
    this.setState({ employees });
  };

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Searchbar />

        <Wrapper>
          {this.state.employees.map((employee) => (
            <Card
              removeEmployee={this.removeEmployee}
              id={this.state.employees.indexOf(employee)}
              key={this.state.employees.indexOf(employee)}
              name={`${employee.name.title} ${employee.name.first} ${employee.name.last}`}
              email={employee.email}
              phone={employee.phone}
              image={employee.picture.medium}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
