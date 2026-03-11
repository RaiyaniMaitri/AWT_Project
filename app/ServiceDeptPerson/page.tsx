
import { prisma } from '@/lib/prisma'
import React from 'react'
import Link from 'next/link'
import DeleteServiceDeptPersonButton from '../ui/DeleteServiceDeptPersonButton'

export default async function ServiceDeptPersonList() {
  const data = await prisma.servicedeptperson.findMany({
    include: {
      servicedept: true,
      staff: true,
      sec_user: true
    }
  });
  return (
    <div style={{ padding: '20px' }}>
      <h1>Service Dept Persons</h1>
      <table border={1} style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Dept</th>
            <th>Staff</th>
            <th>Is HOD</th>
            <th>Created By</th>
            <th>Detail</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((p) => (
              <tr key={p.ServiceDeptPersonID}>
                <td>{p.ServiceDeptPersonID}</td>
                <td>{p.servicedept?.ServiceDeptName} ({p.ServiceDeptID})</td>
                <td>{p.staff?.StaffName} ({p.StaffID})</td>
                <td>{p.IsHODStaff ? 'Yes' : 'No'}</td>
                <td>{p.sec_user?.UserName} ({p.UserID})</td>
                <td><Link href={"/ServiceDeptPerson/" + p.ServiceDeptPersonID}>Detail</Link></td>
                <td><Link href={"/ServiceDeptPerson/edit/" + p.ServiceDeptPersonID}>Edit</Link></td>
                <td><DeleteServiceDeptPersonButton id={p.ServiceDeptPersonID} /></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
