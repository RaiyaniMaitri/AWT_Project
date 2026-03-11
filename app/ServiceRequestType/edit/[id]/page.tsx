
import { prisma } from '@/lib/prisma'
import { EditServiceRequestTypeAction } from '@/app/actions/EditServiceRequestTypeAction'
import React from 'react'
import Link from 'next/link'

export default async function EditServiceRequestType({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const data = await prisma.servicerequesttype.findFirst({
        where: { ServiceRequestTypeID: Number(id) }
    })
    const serviceTypes = await prisma.servicetype.findMany();
    const depts = await prisma.servicedept.findMany();
    const users = await prisma.sec_user.findMany();

    return (
        <div style={{ padding: '20px' }}>
            <h1>Edit Service Request Type</h1>
            <form action={EditServiceRequestTypeAction} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', maxWidth: '800px' }}>
                <input type='hidden' defaultValue={data?.ServiceRequestTypeID} name="id" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Service Type:</label>
                    <select name="ServiceTypeID" defaultValue={data?.ServiceTypeID} required style={{ padding: '8px' }}>
                        {serviceTypes.map(t => (
                            <option key={t.ServiceTypeID} value={t.ServiceTypeID}>{t.ServiceTypeName}</option>
                        ))}
                    </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Dept:</label>
                    <select name="ServiceDeptID" defaultValue={data?.ServiceDeptID} required style={{ padding: '8px' }}>
                        {depts.map(d => (
                            <option key={d.ServiceDeptID} value={d.ServiceDeptID}>{d.ServiceDeptName}</option>
                        ))}
                    </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gridColumn: 'span 2' }}>
                    <label>Name:</label>
                    <input type='text' defaultValue={data?.ServiceRequestTypeName} name="ServiceRequestTypeName" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gridColumn: 'span 2' }}>
                    <label>Description:</label>
                    <input type='text' defaultValue={data?.Description || ''} name="Description" style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Sequence:</label>
                    <input type='text' defaultValue={data?.Sequence?.toString() || ''} name="Sequence" style={{ padding: '8px' }} />
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
                    <input type='submit' value="Update Request Type" style={{ padding: '10px 20px', cursor: 'pointer' }} />
                    <Link href="/ServiceRequestType" style={{ padding: '10px 20px', textDecoration: 'none', border: '1px solid #ccc', color: 'black' }}>Cancel</Link>
                </div>
            </form>
        </div>
    )
}
