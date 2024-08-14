import React from 'react'
import CompanyList from './Companies/CompanyList'
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import JobList from './Jobs/JobList'
import SignIn from './User/SignIn'
import SignUp from './User/SignUp'
import Profile from './User/Profile'

const Router = () => {
    return (
    <Routes>
        <Route path='/' exact='true' element={<Home/>} />
        <Route path='/companies' exact='true' element={<CompanyList/>} />
        <Route path='/jobs' exact='true' element={<JobList/>} />
        <Route path='/signin' exact='true' element={<SignIn/>} />
        <Route path='/signup' exact='true' element={<SignUp/>} />
        <Route path='/profile' exact='true' element={<Profile/>} />
        <Route path='*' element={<h1 className='notFound'>We can't find what you are looking for</h1>} />
    </Routes>
    )
}

export default Router