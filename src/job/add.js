import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';


const JForm = (props) => {


    const formik = useFormik({
        initialValues: {
            position: '',
            industry: '',
            description: '',
            requirements: '',
            deadline: ''
        },
        validationSchema: yup.object({
            position: yup.string()
                .required("Position is required")
                .strict()
                .trim()
                .min(3, "Minimum 3 charecters required")
                .max(30, "Maximum 30 charecters only"),
            industry: yup.string()
                .required("Industry is required"),
            description: yup.string()
                .required("Position is required")
                .strict()
                .trim()
                .min(20, "Minimum 20 charecters required")
                .max(300, "Maximum 300 charecters only"),
            requirements: yup.string()
                .required("Requirements is required")
                .strict()
                .trim()
                .min(10, "Minimum 10 charecters required")
                .max(300, "Maximum 300 charecters only"),
            deadline: yup.string()
                .required("Companyname is required")
                .strict()
                .trim()
                .min(3, "Minimum 3 charecters required")
                .max(30, "Maximum 30 charecters only")
        }),
        onSubmit: (job) => {
            console.log(job);
            axios.post('http://localhost:5000/job/add', job)
                .then(res => {
                    toast.success("Job Added successfully");
                    props.history.push('/home');
                })
                .catch(err => {
                    toast.error(err.response.job);
                })
        }
    })

    useEffect((props) => {
        console.log(props)
    })

    return (
        <div className="container">
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
                    <form class="form-inline ml-auto">
                        <button onClick={() => {
                            localStorage.clear();
                            props.history.push('/login');
                        }} className="btn btn-outline-light">Logout</button>
                    </form>
                </div>
            </nav>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label>Position:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="position"
                        onChange={formik.handleChange}
                        value={formik.values.position}
                    />
                    {formik.errors.position ?
                        <div className="text-danger">{formik.errors.position}</div>
                        : null
                    }
                </div>
                <div className="form-group">
                    <label>Industry:</label>
                    <select
                        id="sel1"
                        className="form-control"
                        type="text"
                        name="industry"
                        onChange={formik.handleChange}
                        value={formik.values.industry}
                    >
                        <option value="">-- Selecet One --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    {formik.errors.industry ?
                        <div className="text-danger">{formik.errors.industry}</div>
                        : null
                    }
                </div>
                <div className="form-group">
                    <label>Job Description:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="description"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                    />
                    {formik.errors.description ?
                        <div className="text-danger">{formik.errors.description}</div>
                        : null
                    }
                </div>
                <div className="form-group">
                    <label>Requirements:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="requirements"
                        onChange={formik.handleChange}
                        value={formik.values.requirements}
                    />
                    {formik.errors.requirements ?
                        <div className="text-danger">{formik.errors.requirements}</div>
                        : null
                    }
                </div>
                <div className="form-group">
                    <label>Deadline:</label>
                    <input
                        className="form-control"
                        type="date"
                        name="deadline"
                        onChange={formik.handleChange}
                        value={formik.values.deadline}
                    />
                    {formik.errors.deadline ?
                        <div className="text-danger">{formik.errors.deadline}</div>
                        : null
                    }
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default JForm;
