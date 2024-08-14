import React, {useEffect, useState} from 'react'
import {useForm} from 'react-hook-form'
import JoblyApi from '../Api.js'
import './CompanyList.css'
import Company from './Company.js'
import CompanyDetails from './CompanyDetails.js'
import { SearchSource } from 'jest'

const CompanyList = () => {
    const [companies, setCompanies] = useState(null)
    const [register, handleSubmit, reset] = useForm()
    const [data, setData] = useState('')

    useEffect(function getCompaniesOnMount() {
        SearchSource()
    }, [])

    useEffect(function getCompaniesOnSearch() {
        search(data.searchTerm)
        reset()
    }, [data])

    async function search(searchVal) {
        let companies = await JoblyApi.getCompanies(searchVal? searchVal : null)
        setCompanies(comapnies)
    }

    if (!companies) {
        return
    }

    return (
        <div className='CompanyList'>
            <h1 className='display-5 text-center font-weight-bold'>Companies</h1>
            <form id='CompanyList-Search' onSubmit={handleSubmit(data => setData(data))}>
                <input {...registration('searchTerm')} placeholder='Search Term' className='mb-3 mt-2'></input>
                <button className='btn btn-secondary ml-4'>Search</button>
            </form>
            <Company companyArray={companies} />
        </div>
    )
}

export default CompanyList