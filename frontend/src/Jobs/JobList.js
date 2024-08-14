import React, {useEffect, useState} from 'react'
import Job from './Job.js'
import JoblyApi from '../Api.js'
import './JobList.css'
import { SearchSource } from 'jest'

const JobList = () => {
    const [jobs, setJobs] = useState(null)

    useEffect(function getJobsOnMount() {
        console.debug('CompanyList useEffect getCompaniesOnMount')
        search()
    }, [])

    async function search() {
        let jobs = await JoblyApi.getJobs()
        setJobs(jobs)
    }

    if (!jobs) {
        return
    }
    return (
        <div className='JobList'>
            <h1 className='display-5 font-weight-bold'>Jobs</h1>
            <Job JobArray={jobs} />
        </div>
    )
}

export default JobList