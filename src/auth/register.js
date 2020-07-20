import React, { Component } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';



const Register = (props) => {

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            phonenumber: '',
            companyname: '',
            password: '',
            password2: '',
        },
        validationSchema: yup.object({
            firstname: yup.string()
                .required("Firstname is required")
                .strict()
                .trim()
                .min(3, "Minimum 3 charecters required")
                .max(30, "Maximum 30 charecters only"),
            lastname: yup.string()
                .required("Lastname is required")
                .strict()
                .trim()
                .min(3, "Minimum 3 charecters required")
                .max(30, "Maximum 30 charecters only"),
            email: yup.string()
                .email()
                .strict()
                .trim()
                .required("Email is required"),
            phonenumber: yup.string()
                .required("phonenumber is required")
                .strict()
                .trim()
                .min(10, "Enter the valid phonenumber")
                .max(12, "Enter the valid phonenumber"),
            companyname: yup.string()
                .required("Companyname is required")
                .strict()
                .trim()
                .min(3, "Minimum 3 charecters required")
                .max(30, "Maximum 30 charecters only"),
            password: yup.string()
                .required("password is required")
                .min(3, "Minimum 3 charecters required")
                .max(30, "Maximum 30 charecters only"),
            password2: yup.string()
                .oneOf([yup.ref('password'), null], "Confirm password and password must be same")
                .required("conform password is required")
        }),
        onSubmit: (data) => {
            console.log(data);
            axios.post('http://localhost:5000/api/register', data)
                .then(res => {
                    toast.success("User register successfully");
                    props.history.push('/login');
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
                    <label>First Name:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="firstname"
                        onChange={formik.handleChange}
                        value={formik.values.firstname}
                    />
                    {formik.errors.firstname ?
                        <div className="text-danger">{formik.errors.firstname}</div>
                        : null
                    }
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="lastname"
                        onChange={formik.handleChange}
                        value={formik.values.lastname}
                    />
                    {formik.errors.lastname ?
                        <div className="text-danger">{formik.errors.lastname}</div>
                        : null
                    }
                </div>
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
                    <label>Phone Number:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="phonenumber"
                        onChange={formik.handleChange}
                        value={formik.values.phonenumber}
                    />
                    {formik.errors.phonenumber ?
                        <div className="text-danger">{formik.errors.phonenumber}</div>
                        : null
                    }
                </div>
                <div className="form-group">
                    <label>Company Name:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="companyname"
                        onChange={formik.handleChange}
                        value={formik.values.companyname}
                    />
                    {formik.errors.companyname ?
                        <div className="text-danger">{formik.errors.companyname}</div>
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
                <div className="form-group">
                    <label>Conform Password:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="password2"
                        onChange={formik.handleChange}
                        value={formik.values.password2}
                    />
                    {formik.errors.password2 ?
                        <div className="text-danger">{formik.errors.password2}</div>
                        : null
                    }
                </div>
                <button className="btn btn-primary">Submit</button>
                <a
                    href="#"
                    onClick={() => {
                        window.location.href = 'login';
                    }}
                >
                    Login
                    </a>
            </form>
        </div>
    )
}

export default Register;