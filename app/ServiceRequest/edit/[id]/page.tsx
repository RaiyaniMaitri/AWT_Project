
import { prisma } from '@/lib/prisma'
import { EditServiceRequestAction } from '@/app/actions/EditServiceRequestAction'
import React from 'react'
import Link from 'next/link'

export default async function EditServiceRequest({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const data = await prisma.servicerequest.findFirst({
        where: { ServiceRequestID: Number(id) }
    })
    const staff = await prisma.staff.findMany();
    const requestTypes = await prisma.servicerequesttype.findMany();
    const statuses = await prisma.servicerequeststatus.findMany();
    const users = await prisma.sec_user.findMany();

    const formattedDateTime = data?.ServiceRequestDateTime ? data.ServiceRequestDateTime.toISOString().slice(0, 16) : '';

    return (
        <div style={{ padding: '20px' }}>
            <h1>Edit Service Request</h1>
            <form action={EditServiceRequestAction} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', maxWidth: '800px' }}>
                <input type='hidden' defaultValue={data?.ServiceRequestID} name="id" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Request No:</label>
                    <input type='text' defaultValue={data?.ServiceRequestNo} name="ServiceRequestNo" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Date Time:</label>
                    <input type='datetime-local' defaultValue={formattedDateTime} name="ServiceRequestDateTime" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Assigned Staff:</label>
                    <select name="StaffID" defaultValue={data?.StaffID || ''} style={{ padding: '8px' }}>
                        <option value="">None</option>
                        {staff.map(s => (
                            <option key={s.StaffID} value={s.StaffID}>{s.StaffName}</option>
                        ))}
                    </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Request Type:</label>
                    <select name="ServiceRequestTypeID" defaultValue={data?.ServiceRequestTypeID} required style={{ padding: '8px' }}>
                        {requestTypes.map(t => (
                            <option key={t.ServiceRequestTypeID} value={t.ServiceRequestTypeID}>{t.ServiceRequestTypeName}</option>
                        ))}
                    </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gridColumn: 'span 2' }}>
                    <label>Title:</label>
                    <input type='text' defaultValue={data?.ServiceRequestTitle} name="ServiceRequestTitle" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gridColumn: 'span 2' }}>
                    <label>Description:</label>
                    <textarea defaultValue={data?.ServiceRequestDescription} name="ServiceRequestDescription" required style={{ padding: '8px', minHeight: '100px' }}></textarea>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Status:</label>
                    <select name="ServiceRequestStatusID" defaultValue={data?.ServiceRequestStatusID} required style={{ padding: '8px' }}>
                        {statuses.map(s => (
                            <option key={s.ServiceRequestStatusID} value={s.ServiceRequestStatusID}>{s.ServiceRequestStatusName}</option>
                        ))}
                    </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Created By User:</label>
                    <select name="UserID" defaultValue={data?.UserID} required style={{ padding: '8px' }}>
                        {users.map(u => (
                            <option key={u.UserID} value={u.UserID}>{u.UserName}</option>
                        ))}
                    </select>
                </div>
                <div style={{ gridColumn: 'span 2', display: 'flex', gap: '10px' }}>
                    <input type='submit' value="Update Request" style={{ padding: '10px 20px', cursor: 'pointer' }} />
                    <Link href="/ServiceRequest" style={{ padding: '10px 20px', textDecoration: 'none', border: '1px solid #ccc', color: 'black' }}>Cancel</Link>
                </div>
            </form>
        </div>
    )
}
