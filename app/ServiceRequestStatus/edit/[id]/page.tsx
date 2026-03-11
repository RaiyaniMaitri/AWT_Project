
import { prisma } from '@/lib/prisma'
import { EditServiceRequestStatusAction } from '@/app/actions/EditServiceRequestStatusAction'
import React from 'react'
import Link from 'next/link'

export default async function EditServiceRequestStatus({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const data = await prisma.servicerequeststatus.findFirst({
        where: { ServiceRequestStatusID: Number(id) }
    })
    const users = await prisma.sec_user.findMany();

    return (
        <div style={{ padding: '20px' }}>
            <h1>Edit Service Request Status</h1>
            <form action={EditServiceRequestStatusAction} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', maxWidth: '800px' }}>
                <input type='hidden' defaultValue={data?.ServiceRequestStatusID} name="id" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Status Name:</label>
                    <input type='text' defaultValue={data?.ServiceRequestStatusName} name="ServiceRequestStatusName" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>System Name:</label>
                    <input type='text' defaultValue={data?.ServiceRequestStatusSystemName} name="ServiceRequestStatusSystemName" required style={{ padding: '8px' }} />
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
                <div style={{ display: 'flex', flexDirection: 'column', gridColumn: 'span 2' }}>
                    <label>Description:</label>
                    <input type='text' defaultValue={data?.Description || ''} name="Description" style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <label>Is Open:</label>
                    <input type='checkbox' defaultChecked={data?.IsOpen || false} name="IsOpen" style={{ width: '20px', height: '20px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <label>Is No Further Action:</label>
                    <input type='checkbox' defaultChecked={data?.IsNoFurtherActionRequired || false} name="IsNoFurtherActionRequired" style={{ width: '20px', height: '20px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <label>Is Allowed For Tech:</label>
                    <input type='checkbox' defaultChecked={data?.IsAllowedForTechnician || false} name="IsAllowedForTechnician" style={{ width: '20px', height: '20px' }} />
                </div>
                <div style={{ gridColumn: 'span 2', display: 'flex', gap: '10px', marginTop: '10px' }}>
                    <input type='submit' value="Update Status" style={{ padding: '10px 20px', cursor: 'pointer' }} />
                    <Link href="/ServiceRequestStatus" style={{ padding: '10px 20px', textDecoration: 'none', border: '1px solid #ccc', color: 'black' }}>Cancel</Link>
                </div>
            </form>
        </div>
    )
}
