// import React, { useState } from 'react';
// import axios from 'axios';
// import { useFormik } from 'formik';
// import * as Yup from 'yup'
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import { useID } from '../IDContext';

// const ManagerSetStatusPage = () => {

//     const navigate = useNavigate()

//     const { id } = useParams()
//     const { status } = useParams()

//     const initialValues = {
//         status: ''
//     }


//     const onSubmit = (values) => {
//         axios
//             .put("http://localhost:9000/api/manager/manage" + expenseid  + "/" +  status , values)
//             .then((response) => {
//                 if (response.data) {
//                     console.log(response.data)

//                     navigate('/manager/dashboard')

//                 } else {
//                     alert('Something wrong')
//                 }

//             })
//             .catch((error) => console.log(error));
//     }

//     const validationSchema = Yup.object({
//         status: Yup.string().required('Status is required')
//     })

//     const formik = useFormik({
//         initialValues,
//         onSubmit,
//         validationSchema,
//         validateOnMount: true
//     })
//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-3"></div>
//                 <div className="col-md-6">
//                     <h2>Manage Pending Request</h2>
//                     <table className="table table-bordered">
//                         <thead className="thead-dark">
//                             <tr>
//                                 <th>ExpenseId</th>
//                                 <th>Title</th>
//                                 <th>Description</th>
//                                 <th>Amount</th>
//                                 <th>Status</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {expenses.map((expense, index) => (
//                                 <tr key={index}>
//                                     <td>{expense.expenseId}</td>
//                                     <td>{expense.name}</td>
//                                     <td>{expense.description}</td>
//                                     <td>{expense.amount}</td>
//                                     <td>{expense.status}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                     <div className="wrapper">

//                         <hr />



//                         <form onSubmit={formik.handleSubmit}>
//                             <div className="form-group">
//                                 <label>Phone status</label>
//                                 <input type="text" value={formik.values.status}
//                                     name="status"
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     className={formik.touched.status && formik.errors.status ? 'form-control is-invalid' : 'form-control'} />
//                                 {formik.touched.status && formik.errors.status ? <small className='text-danger'>{formik.errors.status}</small> : null}
//                             </div>

//                             <input type="submit" value="Update" disabled={!formik.isValid} className="btn btn-primary btn-block" />
//                         </form>
//                         <br />

//                     </div>
//                 </div>
//                 <div className="col-md-3"></div>
//             </div>
//         </div>
//     )
// }
// export default ManagerSetStatusPage;