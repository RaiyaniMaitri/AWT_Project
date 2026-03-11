
import { prisma } from '@/lib/prisma'
import React from 'react'
import Link from 'next/link'
import DeleteStaffButton from '../ui/DeleteStaffButton'

export default async function StaffList() {
  const data = await prisma.staff.findMany({
    include: {
      campus: true
    }
  });
  return (
    <div style={{ padding: '20px' }}>
      <h1>Staff List</h1>
      <table border={1} style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Campus</th>
            <th>Detail</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((s) => (
              <tr key={s.StaffID}>
                <td>{s.StaffID}</td>
                <td>{s.StaffName}</td>
                <td>{s.Phone}</td>
                <td>{s.Email}</td>
                <td>{s.campus?.CampusName} ({s.CampusID})</td>
                <td><Link href={"/Staff/" + s.StaffID}>Detail</Link></td>
                <td><Link href={"/Staff/edit/" + s.StaffID}>Edit</Link></td>
                <td><DeleteStaffButton id={s.StaffID} /></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
