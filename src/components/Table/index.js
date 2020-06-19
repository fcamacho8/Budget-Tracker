
import React from "react";

function Table(props) {
    return (
        <div id="expenseTable">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Expense</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {props.expenses.map(element => (
                        <tr key={element}>
                            <td>{element[0]}</td>
                            <td>{element[1]}</td>
                            <td>{element[2]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default Table;