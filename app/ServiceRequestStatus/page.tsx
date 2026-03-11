
import { prisma } from '@/lib/prisma'
import React from 'react'
import Link from 'next/link'
import DeleteServiceRequestStatusButton from '../ui/DeleteServiceRequestStatusButton'

export default async function ServiceRequestStatusList() {
  const data = await prisma.servicerequeststatus.findMany({
    include: {
      sec_user: true
    }
  });
  return (
    <div style={{ padding: '20px' }}>
      <h1>Service Request Statuses</h1>
      <table border={1} style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Is Open</th>
            <th>Sequence</th>
            <th>Created By</th>
            <th>Detail</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((s) => (
              <tr key={s.ServiceRequestStatusID}>
                <td>{s.ServiceRequestStatusID}</td>
                <td>{s.ServiceRequestStatusName}</td>
                <td>{s.IsOpen ? 'Yes' : 'No'}</td>
                <td>{s.Sequence?.toString()}</td>
                <td>{s.sec_user?.UserName} ({s.UserID})</td>
                <td><Link href={"/ServiceRequestStatus/" + s.ServiceRequestStatusID}>Detail</Link></td>
                <td><Link href={"/ServiceRequestStatus/edit/" + s.ServiceRequestStatusID}>Edit</Link></td>
                <td><DeleteServiceRequestStatusButton id={s.ServiceRequestStatusID} /></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
