
import { prisma } from '@/lib/prisma'
import React from 'react'
import Link from 'next/link'
import DeleteServiceTypeButton from '../ui/DeleteServiceTypeButton'

export default async function ServiceTypeList() {
  const data = await prisma.servicetype.findMany({
    include: {
      sec_user: true
    }
  });
  return (
    <div style={{ padding: '20px' }}>
      <h1>Service Types</h1>
      <table border={1} style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>For Staff</th>
            <th>For Student</th>
            <th>Created By</th>
            <th>Detail</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((type) => (
              <tr key={type.ServiceTypeID}>
                <td>{type.ServiceTypeID}</td>
                <td>{type.ServiceTypeName}</td>
                <td>{type.IsForStaff ? 'Yes' : 'No'}</td>
                <td>{type.IsForStudent ? 'Yes' : 'No'}</td>
                <td>{type.sec_user?.UserName} ({type.UserID})</td>
                <td><Link href={"/ServiceType/" + type.ServiceTypeID}>Detail</Link></td>
                <td><Link href={"/ServiceType/edit/" + type.ServiceTypeID}>Edit</Link></td>
                <td><DeleteServiceTypeButton id={type.ServiceTypeID} /></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
