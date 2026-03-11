
import { prisma } from '@/lib/prisma'
import React from 'react'
import Link from 'next/link'
import DeleteSecUserButton from '../ui/DeleteSecUserButton'

export default async function SecUserList() {
  const data = await prisma.sec_user.findMany({
    include: {
      campus: true
    }
  });
  return (
    <div style={{ padding: '20px' }}>
      <h1>Users</h1>
      <table border={1} style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>UserID</th>
            <th>UserName</th>
            <th>EmailAddress</th>
            <th>Campus</th>
            <th>Detail</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((u) => (
              <tr key={u.UserID}>
                <td>{u.UserID}</td>
                <td>{u.UserName}</td>
                <td>{u.EmailAddress}</td>
                <td>{u.campus?.CampusName} ({u.CampusID})</td>
                <td><Link href={"/Sec_User/" + u.UserID}>Detail</Link></td>
                <td><Link href={"/Sec_User/edit/" + u.UserID}>Edit</Link></td>
                <td><DeleteSecUserButton id={u.UserID} /></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
