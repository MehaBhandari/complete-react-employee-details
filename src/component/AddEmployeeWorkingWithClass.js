import React from 'react';

export default class AddEmployee extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            designation: '',
            imageUrl: ''
        };
        this.updateEmpDetails = this.updateEmpDetails.bind(this);
    }
    updateEmpDetails(event) {
        if(event.target.name === 'name') {
            this.setState({name: event.target.value});
        } else if(event.target.name === 'designation') {
            this.setState({designation:event.target.value});
        } else if(event.target.name === 'imageUrl') {
            this.setState({imageUrl:event.target.value});
        }        
    }

    render() {
        return(
            <div className='card' style={{'marginTop': '10px'}}>
                <div className="card-body">
                    <form id="myForm" action="" method="post" className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <label>Name: </label>
                                <input type="text" name="name" value={this.state.name} onChange={this.updateEmpDetails} />
                            </div>
                            <div className="col-6">
                                <label>Designation: </label>
                                <input type="text" name="designation" value={this.state.designation} onChange={this.updateEmpDetails} />
                            </div><br/><br/>    
                            <div className="col-6">
                                <label>Image Url: </label>
                                <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.updateEmpDetails} />
                            </div>
                        </div><br/><br/>
                        <div>
                            <input type="button" value="Add Employee" style={{'width': '200px'}} onClick='' className="btn btn-success" />
                        </div>
                    </form>
                    <br/>
                </div>
            </div>
        )
    }
}