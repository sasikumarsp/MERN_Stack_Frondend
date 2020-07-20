import React, { Component } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';



const Login = (props) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object({
            email: yup.string()
                .email()
                .strict()
                .trim()
                .required("Email is required"),
            password: yup.string()
                .required("password is required")
                .min(3, "Minimum 3 charecters required")
                .max(30, "Maximum 30 charecters only")
        }),
        onSubmit: (data) => {
            console.log(data);
            axios.post('http://localhost:5000/api/login', data)
                .then(res => {
                    localStorage.setItem('auth', JSON.stringify(res.data));
                    props.history.push('/home');
                })
                .catch(err => {
                    toast.error(err.response.data);
                })
        }
    })

    return (
        <div className="container">
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.errors.email ?
                        <div className="text-danger">{formik.errors.email}</div>
                        : null
                    }
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.errors.password ?
                        <div className="text-danger">{formik.errors.password}</div>
                        : null
                    }
                </div>
                <button className="btn btn-primary">Login</button>
                <a
                    href="#"
                    onClick={() => {
                        window.location.href = 'register';
                    }}
                >
                    Register
                    </a>
            </form>
        </div>
    )
}

export default Login;