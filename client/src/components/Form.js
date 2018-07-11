import React from "react";
import API from '../utils/API'
import { FormGroup, ControlLabel, Button, FormControl } from "react-bootstrap";


class Form extends React.Component {
  state = {
    articles: [],
    keyword: "",
    numSearch: "",
    startYear: "",
    endYear: "",
    error: ""
  };

  logChange = val => {
    console.log("Selected: " + val);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getArticles(this.state.search)
      .then(res => {
        console.log(res)
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ articles: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  options = [
    { value: "1", label: "1" },
    { value: "5", label: "5" },
    { value: "10", label: "10" }
  ];
  render() {

    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          name="searchForm"
          // validationState={this.getValidationState()}
        >
          <ControlLabel>Search Term</ControlLabel>
          <FormControl
            type="text"
            name="keyword"
            value={this.state.keyword}
            // placeholder="Enter text"
            onChange={this.handleChange}
          />
          <ControlLabel>Number of Records for Retrieve</ControlLabel>
          <FormControl
            componentClass="select"
            name="numSearch"
            placeholder="select"
            value={this.state.numSearch}
            onChange= {this.handleChange}
          >
            <option value="1">1</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </FormControl>

          <ControlLabel>Start Year (optional)</ControlLabel>
          <FormControl
            type="text"
            name="startYear"
            value={this.state.startYear}
            // placeholder="Enter text"
            onChange={this.handleChange}
          />
          <ControlLabel>End Year Optional</ControlLabel>
          <FormControl
            type="text"
            name="endYear"
            value={this.state.endYear}
            // placeholder="Enter text"
            onChange={this.handleChange}
          />

          <Button
            onClick={this.handleFormSubmit}
            disabled={!this.state.keyword}
          >
            Search
          </Button>
          {/**/}
        </FormGroup>
      </form>
    );
  }
}
export default Form;

