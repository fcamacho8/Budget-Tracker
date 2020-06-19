import React from "react";

import Jumbotron from "./components/Jumbotron/index"
import Form from "./components/Form/index"
import Table from "./components/Table/index"

class App extends React.Component {
  state = {
    expenses: [], 
    amount: "",
    expense: "",
    total: 0
   
  }

  handleInputChange = event => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.expense && this.state.amount>0){
      let tot = parseInt(this.state.total) + parseInt(this.state.amount)
      let exArray = this.state.expenses
      exArray.push([this.state.expense, this.state.amount, tot])
      this.setState({
        expenses: exArray,
        total: tot,
      });
      console.log(exArray)
    }
  };
  


  render() {
    return (
      <div>
        <Jumbotron />
        <Form handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}/>
        <Table expense={this.state.expense} amount={this.state.amount} expenses={this.state.expenses}  />
      </div>
    );
  }
}

export default App;
