import React from 'react'
import axios from 'axios';


class Details extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <a href="#" className="navbar-brand">MEAR Stuck</a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <a href="/home" className="nav-item nav-link active">Home</a>
                            <a href="/add" className="nav-item nav-link">Add Job</a>
                        </div>
                        <form className="form-inline ml-auto">
                        </form>
                        <form class="form-inline ml-auto">
                            <button onClick={() => {
                                localStorage.clear();
                                this.props.history.push('/login');
                            }} className="btn btn-outline-light">Logout</button>
                        </form>
                    </div>
                </nav>
                <div className="w-100">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Position</th>
                                <th>Industry</th>
                                <th>Description</th>
                                <th>Requirements</th>
                                <th>Deadline</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.getData.length > 0 ?
                                    (
                                        this.props.getData.map(e =>
                                            <tr key={e._id}>
                                                <td>{e.position}</td>
                                                <td>{e.industry}</td>
                                                <td>{e.description}</td>
                                                <td>{e.requirements}</td>
                                                <td>{e.deadline}</td>
                                                <td><button className="btn btn-primary"
                                                    onClick={event => {
                                                        this.props.setData(e)
                                                    }}
                                                >Edit</button></td>
                                                <td><button className="btn btn-primary"
                                                    onClick={event => {
                                                        this.props.del(e)
                                                    }}
                                                >Delete</button></td>
                                            </tr>
                                        )
                                    )
                                    :
                                    (
                                        <tr>
                                            <td>No Data</td>
                                        </tr>
                                    )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Details;