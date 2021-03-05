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
}

export default App;
