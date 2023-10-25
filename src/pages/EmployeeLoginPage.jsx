import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom';
import { useID } from '../IDContext';


const EmployeeLoginPage = () => {

    const navigate = useNavigate()

    const { id, setId } = useID();


    const handleSetID = (newID) => {
        setId(newID);
    };

    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = (values) => {
        axios
            .post("http://localhost:9000/api/employee/login", values)
            .then((response) => {
                if (response.data) {
                    console.log(response.data)
                    setId(response.data)
                    navigate('/employee/dashboard')

                } else {
                    alert('Invalid Credentials')
                }

            })
            .catch((error) => console.log(error));
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('email is required').email('email should be valid'),
        password: Yup.string().required('password is required')
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        handleSetID,
        validationSchema,
        validateOnMount: true
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="wrapper">
                        <h2>Login</h2>
                        <hr />
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" value={formik.values.email}
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={formik.touched.email && formik.errors.email ? 'form-control is-invalid' : 'form-control'} />
                                {formik.touched.email && formik.errors.email ? <small className='text-danger'>{formik.errors.email}</small> : null}
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={formik.touched.password && formik.errors.password ? 'form-control is-invalid' : 'form-control'} />
                                {formik.touched.password && formik.errors.password ? <small className='text-danger'>{formik.errors.password}</small> : null}
                            </div>
                            <input type="submit" value="Login" disabled={!formik.isValid} className="btn btn-primary btn-block" />
                        </form>
                        <br />

                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}
export default EmployeeLoginPage;