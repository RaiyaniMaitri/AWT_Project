
import { prisma } from '@/lib/prisma'
import { EditServiceRequestReplyAction } from '@/app/actions/EditServiceRequestReplyAction'
import React from 'react'
import Link from 'next/link'

export default async function EditServiceRequestReply({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const data = await prisma.servicerequestreply.findFirst({
        where: { ServiceRequestReplyID: Number(id) }
    })
    const requests = await prisma.servicerequest.findMany();
    const staff = await prisma.staff.findMany();
    const statuses = await prisma.servicerequeststatus.findMany();
    const users = await prisma.sec_user.findMany();

    const formattedDateTime = data?.ServiceRequestReplyDateTime ? data.ServiceRequestReplyDateTime.toISOString().slice(0, 16) : '';

    return (
        <div style={{ padding: '20px' }}>
            <h1>Edit Service Request Reply</h1>
            <form action={EditServiceRequestReplyAction} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', maxWidth: '800px' }}>
                <input type='hidden' defaultValue={data?.ServiceRequestReplyID} name="id" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Request:</label>
                    <select name="ServiceRequestID" defaultValue={data?.ServiceRequestID} required style={{ padding: '8px' }}>
                        {requests.map(r => (
                            <option key={r.ServiceRequestID} value={r.ServiceRequestID}>{r.ServiceRequestTitle}</option>
                        ))}
                    </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Replied By Staff:</label>
                    <select name="StaffID" defaultValue={data?.StaffID || ''} style={{ padding: '8px' }}>
                        <option value="">None</option>
                        {staff.map(s => (
                            <option key={s.StaffID} value={s.StaffID}>{s.StaffName}</option>
                        ))}
                    </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Reply Date Time:</label>
                    <input type='datetime-local' defaultValue={formattedDateTime} name="ServiceRequestReplyDateTime" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Update Status To:</label>
                    <select name="ServiceRequestStatusID" defaultValue={data?.ServiceRequestStatusID} required style={{ padding: '8px' }}>
                        {statuses.map(s => (
                            <option key={s.ServiceRequestStatusID} value={s.ServiceRequestStatusID}>{s.ServiceRequestStatusName}</option>
                        ))}
                    </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gridColumn: 'span 2' }}>
                    <label>Description:</label>
                    <input type='text' defaultValue={data?.ServiceRequestReplyDescription} name="ServiceRequestReplyDescription" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Created By User:</label>
                    <select name="UserID" defaultValue={data?.UserID} required style={{ padding: '8px' }}>
                        {users.map(u => (
                            <option key={u.UserID} value={u.UserID}>{u.UserName}</option>
                        ))}
                    </select>
                </div>
                <div style={{ gridColumn: 'span 2', display: 'flex', gap: '10px', marginTop: '10px' }}>
                    <input type='submit' value="Update Reply" style={{ padding: '10px 20px', cursor: 'pointer' }} />
                    <Link href="/ServiceRequestReply" style={{ padding: '10px 20px', textDecoration: 'none', border: '1px solid #ccc', color: 'black' }}>Cancel</Link>
                </div>
            </form>
        </div>
    )
}
