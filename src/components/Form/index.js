import React from "react";
import "./style.css"

function Form(props) {
    return (

        <form onSubmit={props.handleFormSubmit}>
            <div className="form-group">
                <label className="space">Expense:</label>
                <input style={{ marginRight: "60px" }}
                    value={props.expense}
                    name="expense"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="name"
                />

                <label className="space">Amount:</label>
                <input
                    value={props.amount}
                    name="amount"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="(USD)"
                />
            </div>
            <div className="addBtn">
                <button type="submit" className="btn btn-danger">Add expense</button>
            </div>

        </form>



    );
}

export default Form;