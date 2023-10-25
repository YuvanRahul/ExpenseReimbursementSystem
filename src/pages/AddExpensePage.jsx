import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom';
import { useID } from '../IDContext';

const AddExpensePage = () => {

    const navigate = useNavigate()

    const { id } = useID();

    const initialValues = {
        name: '',
        description: '',
        status: 'pending',
        amount: '',
        employeeId: id
    }

    const onSubmit = (values) => {
        axios
        .post("http://localhost:9000/api/employee/"+id+"/add",values)
        .then((response) => {
            if(response.data){
                console.log(response.data)
                
                navigate('/employee/dashboard')

            }else{
                alert('Something Wrong')
            }

        })
        .catch((error) => console.log(error));
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('title is required'),
        description: Yup.string().required('description is required'),
        amount: Yup.number().required('amount is required')
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
                        <h2>Add New Reimbursement Request</h2>
                        <hr />
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" value={formik.values.name}
                                    name="name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={formik.touched.name && formik.errors.name ? 'form-control is-invalid' : 'form-control'} />
                                {formik.touched.name && formik.errors.name ? <small className='text-danger'>{formik.errors.name}</small> : null}
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <input type="text" value={formik.values.description}
                                    name="description"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={formik.touched.description && formik.errors.description ? 'form-control is-invalid' : 'form-control'} />
                                {formik.touched.description && formik.errors.description ? <small className='text-danger'>{formik.errors.description}</small> : null}
                            </div>
                            <div className="form-group">
                                <label>Amount</label>
                                <input type="number"
                                    name="amount"
                                    value={formik.values.amount}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={formik.touched.amount && formik.errors.amount ? 'form-control is-invalid' : 'form-control'} />
                                {formik.touched.amount && formik.errors.amount ? <small className='text-danger'>{formik.errors.amount}</small> : null}
                            </div>
                            <input type="submit" value="Add" disabled={!formik.isValid} className="btn btn-primary btn-block" />
                        </form>
                        <br />
                        
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}
export default AddExpensePage;