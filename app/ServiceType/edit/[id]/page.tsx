
import { prisma } from '@/lib/prisma'
import { EditServiceTypeAction } from '@/app/actions/EditServiceTypeAction'
import React from 'react'
import Link from 'next/link'

export default async function EditServiceType({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const data = await prisma.servicetype.findFirst({
        where: { ServiceTypeID: Number(id) }
    })
    const users = await prisma.sec_user.findMany();

    return (
        <div style={{ padding: '20px' }}>
            <h1>Edit Service Type</h1>
            <form action={EditServiceTypeAction} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', maxWidth: '800px' }}>
                <input type='hidden' defaultValue={data?.ServiceTypeID} name="id" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Name:</label>
                    <input type='text' defaultValue={data?.ServiceTypeName} name="ServiceTypeName" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Sequence:</label>
                    <input type='text' defaultValue={data?.Sequence?.toString() || ''} name="Sequence" style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gridColumn: 'span 2' }}>
                    <label>Description:</label>
                    <input type='text' defaultValue={data?.Description || ''} name="Description" style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Created By User:</label>
                    <select name="UserID" defaultValue={data?.UserID} required style={{ padding: '8px' }}>
                        {users.map(u => (
                            <option key={u.UserID} value={u.UserID}>{u.UserName}</option>
                        ))}
                    </select>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <label>For Staff:</label>
                    <input type='checkbox' defaultChecked={data?.IsForStaff || false} name="IsForStaff" style={{ width: '20px', height: '20px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <label>For Student:</label>
                    <input type='checkbox' defaultChecked={data?.IsForStudent || false} name="IsForStudent" style={{ width: '20px', height: '20px' }} />
                </div>
                <div style={{ gridColumn: 'span 2', display: 'flex', gap: '10px', marginTop: '10px' }}>
                    <input type='submit' value="Update Service Type" style={{ padding: '10px 20px', cursor: 'pointer' }} />
                    <Link href="/ServiceType" style={{ padding: '10px 20px', textDecoration: 'none', border: '1px solid #ccc', color: 'black' }}>Cancel</Link>
                </div>
            </form>
        </div>
    )
}
