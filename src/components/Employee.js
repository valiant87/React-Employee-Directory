import React from "react";
import Table from "./Table";
import search from "../utils/API";
import Navbar from "./Navbar";
// This will hold and return employee class for the Employee component
class Employee extends React.Component {
  // This sets state and handles change
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      results: [],
      sort: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  //This handles the submit button
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      value: "",
    });
  }
  //This handles sort button
  handleSort() {
    this.state.sort === true
      ? this.setState({ sort: false })
      : this.setState({ sort: true });
  }

  componentDidMount() {
    this.queryRandomUserAPI();
  }

  queryRandomUserAPI = () => {
    search()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  };
  // This renders employees and sets their data to lowercase
  render() {
    let searchBarFilter = this.state.results.filter(
      (employee) =>
        employee.name.first
          .toLowerCase()
          .indexOf(this.state.value.toLowerCase()) !== -1 ||
        employee.name.last
          .toLowerCase()
          .indexOf(this.state.value.toLowerCase()) !== -1 ||
        employee.email.toLowerCase().indexOf(this.state.value.toLowerCase()) !==
          -1 ||
        employee.location.city
          .toLowerCase()
          .indexOf(this.state.value.toLowerCase()) !== -1 ||
        employee.location.state
          .toLowerCase()
          .indexOf(this.state.value.toLowerCase()) !== -1 ||
        employee.location.country
          .toLowerCase()
          .indexOf(this.state.value.toLowerCase()) !== -1 ||
        employee.phone.toLowerCase().indexOf(this.state.value.toLowerCase()) !==
          -1
    );

    let tableResults;

    if (this.state.value === "") {
      tableResults = this.state.results;
    } else {
      tableResults = searchBarFilter;
    }

    return (
      <div>
        <Navbar
          value={this.state.value}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <div className="container-fluid">
          <Table
            results={tableResults}
            sort={this.state.sort}
            handleSort={this.handleSort}
            handleClose={this.handleClose}
            handleShow={this.handleShow}
          />
        </div>
      </div>
    );
  }
}

export default Employee;
