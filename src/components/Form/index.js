import React from "react";

function Form(props) {
    return (
        <div>
            <form onSubmit={props.handleFormSubmit}>
                <div className="form-group">
                <label>Expense:</label>
                    <input
                        value={props.expense}
                        name="expense"
                        onChange={props.handleInputChange}
                        type="text"
                        placeholder="Input you expense"
                    />
                      <label>Amount:</label>
                    <input
                        value={props.amount}
                        name="amount"
                        onChange={props.handleInputChange}
                        type="text"
                        placeholder="Expense Amount (in dollars)"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add expense</button>
            </form>
        </div>
    );
}

export default Form;