
import { prisma } from '@/lib/prisma'
import React from 'react'
import Link from 'next/link'
import DeleteServiceRequestReplyButton from '../ui/DeleteServiceRequestReplyButton'

export default async function ServiceRequestReplyList() {
  const data = await prisma.servicerequestreply.findMany({
    include: {
      servicerequest: true,
      staff: true,
      servicerequeststatus: true,
      sec_user: true
    }
  });
  return (
    <div style={{ padding: '20px' }}>
      <h1>Service Request Replies</h1>
      <table border={1} style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Request Title</th>
            <th>Staff</th>
            <th>Status</th>
            <th>Created By</th>
            <th>Detail</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((reply) => (
              <tr key={reply.ServiceRequestReplyID}>
                <td>{reply.ServiceRequestReplyID}</td>
                <td>{reply.servicerequest?.ServiceRequestTitle} ({reply.ServiceRequestID})</td>
                <td>{reply.staff?.StaffName || 'N/A'} ({reply.StaffID})</td>
                <td>{reply.servicerequeststatus?.ServiceRequestStatusName} ({reply.ServiceRequestStatusID})</td>
                <td>{reply.sec_user?.UserName} ({reply.UserID})</td>
                <td><Link href={"/ServiceRequestReply/" + reply.ServiceRequestReplyID}>Detail</Link></td>
                <td><Link href={"/ServiceRequestReply/edit/" + reply.ServiceRequestReplyID}>Edit</Link></td>
                <td><DeleteServiceRequestReplyButton id={reply.ServiceRequestReplyID} /></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
