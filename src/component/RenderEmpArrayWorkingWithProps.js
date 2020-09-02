import React from 'react'

export default function WorkingWithProps(props) {
    return(
        <div className="card-group container-fluid" style={{'marginLeft': '15px'}}>
            <div className="row">
                {props.employeeArray.map((empObj) => { 
                    return(                    
                        <div className="card col-3" key={empObj.empId} style={{'width': '18rem'}}>
                            <img className="card-img-top" src={empObj.imgUrl} alt="Card image cap" style={{'minHeight': '300px','maxHeight': '300px', 'maxWidth': '250px'}} />
                            <div className="card-body">
                                <h5 className="card-title">{empObj.name}</h5>
                                <p className="card-text">{empObj.designation}</p>
                                <input type='button' className="btn btn-primary" onClick={() => props.deleteFunction(empObj.empId)} value='Delete Employee' />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        
    )
}