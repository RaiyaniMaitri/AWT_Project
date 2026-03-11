
import { prisma } from '@/lib/prisma'
import Link from 'next/link';
import React from 'react'

export default async function CampusDetail({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  const data = await prisma.campus.findFirst({
    where: { CampusID: Number(id) },
    include: {
      servicedept: true,
      staff: true,
      sec_user: true
    }
  })
  return (
    <div style={{ padding: '20px' }}>
      <h1>Campus Details</h1>
      <table border={1} style={{ borderCollapse: 'collapse', width: '100%' }}>
        <tbody>
          <tr>
            <th style={{ textAlign: 'left', padding: '8px' }}>CampusID</th><td style={{ padding: '8px' }}>{data?.CampusID}</td>
            <th style={{ textAlign: 'left', padding: '8px' }}>Campus Name</th><td style={{ padding: '8px' }}>{data?.CampusName}</td>
          </tr>
          <tr>
            <th style={{ textAlign: 'left', padding: '8px' }}>Address</th><td style={{ padding: '8px' }}>{data?.Address}</td>
            <th style={{ textAlign: 'left', padding: '8px' }}>Created</th><td style={{ padding: '8px' }}>{data?.Created?.toString()}</td>
          </tr>
          <tr>
            <th style={{ textAlign: 'left', padding: '8px' }}>Modified</th><td style={{ padding: '8px' }}>{data?.Modified?.toString()}</td>
            <th></th><td></td>
          </tr>
        </tbody>
      </table>

      <h2>Service Departments</h2>
      <ul>
        {data?.servicedept.map((item) => (
          <li key={item.ServiceDeptID}>{item.ServiceDeptName}</li>
        ))}
      </ul>

      <h2>Staff</h2>
      <ul>
        {data?.staff.map((item) => (
          <li key={item.StaffID}>{item.StaffName}</li>
        ))}
      </ul>

      <h2>Users</h2>
      <ul>
        {data?.sec_user.map((item) => (
          <li key={item.UserID}>{item.UserName}</li>
        ))}
      </ul>

      <Link href={"/Campus"}>Back</Link>
    </div>
  )
}
