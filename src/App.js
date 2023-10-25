import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage';
import EmployeePage from './pages/EmployeePage';
import EmployeeLoginPage from './pages/EmployeeLoginPage';
import EmployeeViewPage from './pages/EmployeeViewPage';
import ManagerSetStatusPage from './pages/ManagerSetStatusPage';
import { useID } from './IDContext';
import ManagerViewByEmpIdPage from './pages/ManagerViewByEmpId';
import AddExpensePage from './pages/AddExpensePage';
import EmployeeApprovedPage from './pages/EmployeeApprovedPage';
import EmployeeDeniedPage from './pages/EmployeeDeniedPage';
import EmployeeUpdatePage from './pages/EmployeeUpdatePage';
import EmployeeInformationPage from './pages/EmployeeInformationPage';
import ManagerViewPage from './pages/ManagerViewPage';
import ManagerApprovedPage from './pages/ManagerApprovedPage';
import ManagerDeniedPage from './pages/ManagerDeniedPage';
import ManagerLoginPage from './pages/ManagerLogin';
import ManagerPage from './pages/ManagerPage';
import ViewEmployeesPage from './pages/ViewEmployeesPage';

function App() {

  
  return (
    <div >
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/employee/add' element={<AddExpensePage/>}/>
        <Route path='/employee/login' element={<EmployeeLoginPage/>}/>
        <Route path='/employee/dashboard' element={<EmployeePage/>}/>
        <Route path='/employee/pending' element={<EmployeeViewPage/>}/>
        <Route path='/employee/approved' element={<EmployeeApprovedPage/>}/>
        <Route path='/employee/denied' element={<EmployeeDeniedPage/>}/>
        <Route path='/employee/update' element={<EmployeeUpdatePage/>}/>
        <Route path='/employee/profile' element={<EmployeeInformationPage/>}/>
        <Route path='/manager/pending' element={<ManagerViewPage/>}/>
        <Route path='/manager/approved' element={<ManagerApprovedPage/>}/>
        <Route path='/manager/denied' element={<ManagerDeniedPage/>}/>
        <Route path='/manager/login' element={<ManagerLoginPage/>}/>
        <Route path='/manager/dashboard' element={<ManagerPage/>}/>
        <Route path='/manager/employees' element={<ViewEmployeesPage/>}/>
        {/* <Route path='/manager/pending/employee' */}
        
      </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
