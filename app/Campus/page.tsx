
import { prisma } from '@/lib/prisma'
import React from 'react'
import Link from 'next/link'
import DeleteCampusButton from '../ui/DeleteCampusButton'

export default async function CampusList() {
  const data = await prisma.campus.findMany();
  return (
    <div style={{ padding: '20px' }}>
      <h1>Campus List</h1>
      <table border={1} style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>CampusID</th>
            <th>CampusName</th>
            <th>Address</th>
            <th>Created</th>
            <th>Detail</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((c) => (
              <tr key={c.CampusID}>
                <td>{c.CampusID}</td>
                <td>{c.CampusName}</td>
                <td>{c.Address}</td>
                <td>{c.Created?.toString()}</td>
                <td><Link href={"/Campus/" + c.CampusID}>Detail</Link></td>
                <td><Link href={"/Campus/edit/" + c.CampusID}>Edit</Link></td>
                <td><DeleteCampusButton id={c.CampusID} /></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
