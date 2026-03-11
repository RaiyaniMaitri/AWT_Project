
import { prisma } from '@/lib/prisma'
import React from 'react'
import Link from 'next/link'
import DeleteServiceRequestTypeButton from '../ui/DeleteServiceRequestTypeButton'

export default async function ServiceRequestTypeList() {
  const data = await prisma.servicerequesttype.findMany({
    include: {
      servicetype: true,
      servicedept: true,
      sec_user: true
    }
  });
  return (
    <div style={{ padding: '20px' }}>
      <h1>Service Request Types</h1>
      <table border={1} style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Service Type</th>
            <th>Dept</th>
            <th>Created By</th>
            <th>Detail</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((t) => (
              <tr key={t.ServiceRequestTypeID}>
                <td>{t.ServiceRequestTypeID}</td>
                <td>{t.ServiceRequestTypeName}</td>
                <td>{t.servicetype?.ServiceTypeName} ({t.ServiceTypeID})</td>
                <td>{t.servicedept?.ServiceDeptName} ({t.ServiceDeptID})</td>
                <td>{t.sec_user?.UserName} ({t.UserID})</td>
                <td><Link href={"/ServiceRequestType/" + t.ServiceRequestTypeID}>Detail</Link></td>
                <td><Link href={"/ServiceRequestType/edit/" + t.ServiceRequestTypeID}>Edit</Link></td>
                <td><DeleteServiceRequestTypeButton id={t.ServiceRequestTypeID} /></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
