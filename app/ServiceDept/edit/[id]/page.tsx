
import { prisma } from '@/lib/prisma'
import { EditServiceDeptAction } from '@/app/actions/EditServiceDeptAction'
import React from 'react'
import Link from 'next/link'

export default async function EditServiceDept({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const data = await prisma.servicedept.findFirst({
        where: { ServiceDeptID: Number(id) }
    })
    const campuses = await prisma.campus.findMany();
    const users = await prisma.sec_user.findMany();

    return (
        <div style={{ padding: '20px' }}>
            <h1>Edit Service Department</h1>
            <form action={EditServiceDeptAction} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', maxWidth: '800px' }}>
                <input type='hidden' defaultValue={data?.ServiceDeptID} name="id" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Service Dept Name:</label>
                    <input type='text' defaultValue={data?.ServiceDeptName} name="ServiceDeptName" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Campus:</label>
                    <select name="CampusID" defaultValue={data?.CampusID} required style={{ padding: '8px' }}>
                        {campuses.map(c => (
                            <option key={c.CampusID} value={c.CampusID}>{c.CampusName}</option>
                        ))}
                    </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                <div style={{ gridColumn: 'span 2', display: 'flex', gap: '10px' }}>
                    <input type='submit' value="Update Department" style={{ padding: '10px 20px', cursor: 'pointer' }} />
                    <Link href="/ServiceDept" style={{ padding: '10px 20px', textDecoration: 'none', border: '1px solid #ccc', color: 'black' }}>Cancel</Link>
                </div>
            </form>
        </div>
    )
}
