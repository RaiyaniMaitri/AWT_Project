
import { prisma } from '@/lib/prisma'
import React from 'react'
import Link from 'next/link'
import DeleteServiceRequestTypeWisePersonButton from '../ui/DeleteServiceRequestTypeWisePersonButton'

export default async function ServiceRequestTypeWisePersonList() {
  const data = await prisma.servicerequesttypewiseperson.findMany({
    include: {
      servicerequesttype: true,
      staff: true,
      sec_user: true
    }
  });
  return (
    <div style={{ padding: '20px' }}>
      <h1>Service Request Type Wise Persons</h1>
      <table border={1} style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Request Type</th>
            <th>Staff</th>
            <th>Created By</th>
            <th>Detail</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((p) => (
              <tr key={p.ServiceRequestTypeWisePersonID}>
                <td>{p.ServiceRequestTypeWisePersonID}</td>
                <td>{p.servicerequesttype?.ServiceRequestTypeName} ({p.ServiceRequestTypeID})</td>
                <td>{p.staff?.StaffName} ({p.StaffID})</td>
                <td>{p.sec_user?.UserName} ({p.UserID})</td>
                <td><Link href={"/ServiceRequestTypeWisePerson/" + p.ServiceRequestTypeWisePersonID}>Detail</Link></td>
                <td><Link href={"/ServiceRequestTypeWisePerson/edit/" + p.ServiceRequestTypeWisePersonID}>Edit</Link></td>
                <td><DeleteServiceRequestTypeWisePersonButton id={p.ServiceRequestTypeWisePersonID} /></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
