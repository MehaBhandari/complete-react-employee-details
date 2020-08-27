import React from 'react';

function calculateSalary(a,b) {
    return a*b*100000;
}

export default function SalaryCalculator() {
    return (
        <div>
            <hr></hr>
            <p>*For calculating salary do it the following way: </p>
            <p>If your experience is 5 years then multiply it with 2 and your salary will be:  Rs {calculateSalary(5,2)}</p>
            <br/> <hr/>
        </div>
    )
}
