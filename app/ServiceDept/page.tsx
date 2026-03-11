
import { prisma } from '@/lib/prisma'
import React from 'react'
import Link from 'next/link'
import DeleteServiceDeptButton from '../ui/DeleteServiceDeptButton'

export default async function ServiceDeptList() {
  const data = await prisma.servicedept.findMany({
    include: {
      campus: true,
      sec_user: true
    }
  });
  return (
    <div style={{ padding: '20px' }}>
      <h1>Service Departments</h1>
      <table border={1} style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Campus</th>
            <th>Created By</th>
            <th>Detail</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((d) => (
              <tr key={d.ServiceDeptID}>
                <td>{d.ServiceDeptID}</td>
                <td>{d.ServiceDeptName}</td>
                <td>{d.campus?.CampusName} ({d.CampusID})</td>
                <td>{d.sec_user?.UserName} ({d.UserID})</td>
                <td><Link href={"/ServiceDept/" + d.ServiceDeptID}>Detail</Link></td>
                <td><Link href={"/ServiceDept/edit/" + d.ServiceDeptID}>Edit</Link></td>
                <td><DeleteServiceDeptButton id={d.ServiceDeptID} /></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
