import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom';
import { useID } from '../IDContext';

const EmployeeUpdatePage = () => {

    const navigate = useNavigate()

    const { id } = useID();

    const initialValues = {
        location: '',
        team: '',
        password: '',
        number: ''
    }

    const onSubmit = (values) => {
        axios
        .put("http://localhost:9000/api/employee/"+ id +"/update",values)
        .then((response) => {
            navigate('/employee/dashboard')

        })
        .catch((error) => console.log(error));
    }

    const validationSchema = Yup.object({
        password: Yup.string().required('password is required'),
        team: Yup.string().required('team is required'),
        number: Yup.number().required('Number is required'),
        location: Yup.string().required('Location is required')
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="wrapper">
                        <h2>Update Profile</h2>
                        <hr />
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="number" value={formik.values.number}
                                    name="number"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={formik.touched.number && formik.errors.number ? 'form-control is-invalid' : 'form-control'} />
                                {formik.touched.number && formik.errors.number ? <small className='text-danger'>{formik.errors.number}</small> : null}
                            </div>
                            <div className="form-group">
                                <label>Team</label>
                                <input type="text" value={formik.values.team}
                                    name="team"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={formik.touched.team && formik.errors.team ? 'form-control is-invalid' : 'form-control'} />
                                {formik.touched.team && formik.errors.team ? <small className='text-danger'>{formik.errors.team}</small> : null}
                            </div>
                            <div className="form-group">
                                <label>Location</label>
                                <input type="text"
                                    name="location"
                                    value={formik.values.location}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={formik.touched.location && formik.errors.location ? 'form-control is-invalid' : 'form-control'} />
                                {formik.touched.location && formik.errors.location ? <small className='text-danger'>{formik.errors.location}</small> : null}
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
                            <input type="submit" value="Update" disabled={!formik.isValid} className="btn btn-primary btn-block" />
                        </form>
                        <br />
                        
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}
export default EmployeeUpdatePage;