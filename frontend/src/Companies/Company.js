import React from 'react'
import {CardBody, Card, CardTitle, CardHeader} from 'reactstrap'
import './Company.css'
import CompanyDetails from './CompanyDetails'

const Company = ({companyArray}) => {

    return (
        <div>
            {companyArray.map(company =>
                <Card onClick={() => alert(`You clicked the ${company.name}`)} className='.col .col-auto' key={`${company.handle}`} sytle={{cursor: 'pointer'}}>
                    <CardHeader>
                        <CardTitle>
                            <p>{company.name}</p>
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                        <ul>
                            <li>Description: {company.description}</li>
                            <li>Employees: {company.numEmployees}</li>
                            {company.logoUrl ? <img src={company.logoUrl} alt='img not found'></img> : <p>No logo</p>}
                        </ul>
                    </CardBody>
                </Card>)}
        </div>
    )
}

export default Company