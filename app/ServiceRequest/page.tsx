
import { prisma } from '@/lib/prisma'
import React from 'react'
import Link from 'next/link'
import DeleteServiceRequestButton from '../ui/DeleteServiceRequestButton'

export default async function ServiceRequestList() {
  const data = await prisma.servicerequest.findMany({
    include: {
      staff: true,
      servicerequesttype: true,
      servicerequeststatus: true,
      sec_user: true
    }
  });
  return (
    <div style={{ padding: '20px' }}>
      <h1>Service Requests</h1>
      <table border={1} style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Req No</th>
            <th>Title</th>
            <th>Staff</th>
            <th>Type</th>
            <th>Status</th>
            <th>Created By</th>
            <th>Detail</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((r) => (
              <tr key={r.ServiceRequestID}>
                <td>{r.ServiceRequestNo}</td>
                <td>{r.ServiceRequestTitle}</td>
                <td>{r.staff?.StaffName || 'N/A'} ({r.StaffID})</td>
                <td>{r.servicerequesttype?.ServiceRequestTypeName} ({r.ServiceRequestTypeID})</td>
                <td>{r.servicerequeststatus?.ServiceRequestStatusName} ({r.ServiceRequestStatusID})</td>
                <td>{r.sec_user?.UserName} ({r.UserID})</td>
                <td><Link href={"/ServiceRequest/" + r.ServiceRequestID}>Detail</Link></td>
                <td><Link href={"/ServiceRequest/edit/" + r.ServiceRequestID}>Edit</Link></td>
                <td><DeleteServiceRequestButton id={r.ServiceRequestID} /></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
