import React from 'react'
import axios from 'axios';
import Details from './details';

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
            editData: []
        }
    }

    create = data => {
        axios.post('http://localhost:5000/job/add', data).then(res => {
            this.getAll()
        })
    }

    componentDidMount() {
        this.getAll();
    }

    getAll() {
        axios.get('http://localhost:5000/job').then(res => {
            this.setState({
                data: res.data
            })
        })
    }

    del = data => {
        axios.delete(`http://localhost:5000/job/del/${data._id}`).then(res => {
            console.log(res);
            this.getAll();
        })
    }

    edit = data => {
        console.log(data)
        this.setState({
            editData: data
        })
    }
    render() {
        return (
            <div>
                <div>
                    <Details getData={this.state.data} setData={this.edit} del={this.del} />
                </div>
            </div>
        )
    }
}

export default Home;