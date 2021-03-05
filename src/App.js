import React, { Component } from "react";
import Wrapper from "./Wrapper";
import Searchbar from "./Searchbar";
import Header from "./Header";
import "./App.css";
import API from "./Utils/api";

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

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Search />

        <Wrapper>
          {this.state.employees.map((employee) => (
            <EmployeeCard
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
        <Footer />
      </div>
    );
  }
}

export default App;
