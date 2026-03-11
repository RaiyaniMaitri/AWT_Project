
import { prisma } from '@/lib/prisma'
import { EditServiceDeptPersonAction } from '@/app/actions/EditServiceDeptPersonAction'
import React from 'react'
import Link from 'next/link'

export default async function EditServiceDeptPerson({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const data = await prisma.servicedeptperson.findFirst({
        where: { ServiceDeptPersonID: Number(id) }
    })
    const depts = await prisma.servicedept.findMany();
    const staff = await prisma.staff.findMany();
    const users = await prisma.sec_user.findMany();

    const fromDate = data?.FromDate ? data.FromDate.toISOString().split('T')[0] : '';
    const toDate = data?.ToDate ? data.ToDate.toISOString().split('T')[0] : '';

    return (
        <div style={{ padding: '20px' }}>
            <h1>Edit Service Dept Person</h1>
            <form action={EditServiceDeptPersonAction} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', maxWidth: '800px' }}>
                <input type='hidden' defaultValue={data?.ServiceDeptPersonID} name="id" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Dept:</label>
                    <select name="ServiceDeptID" defaultValue={data?.ServiceDeptID} required style={{ padding: '8px' }}>
                        {depts.map(d => (
                            <option key={d.ServiceDeptID} value={d.ServiceDeptID}>{d.ServiceDeptName}</option>
                        ))}
                    </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Staff:</label>
                    <select name="StaffID" defaultValue={data?.StaffID} required style={{ padding: '8px' }}>
                        {staff.map(s => (
                            <option key={s.StaffID} value={s.StaffID}>{s.StaffName}</option>
                        ))}
                    </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>From Date:</label>
                    <input type='date' defaultValue={fromDate} name="FromDate" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>To Date:</label>
                    <input type='date' defaultValue={toDate} name="ToDate" style={{ padding: '8px' }} />
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <label>Is HOD:</label>
                    <input type='checkbox' defaultChecked={data?.IsHODStaff || false} name="IsHODStaff" style={{ width: '20px', height: '20px' }} />
                </div>
                <div style={{ gridColumn: 'span 2', display: 'flex', gap: '10px', marginTop: '10px' }}>
                    <input type='submit' value="Update Person" style={{ padding: '10px 20px', cursor: 'pointer' }} />
                    <Link href="/ServiceDeptPerson" style={{ padding: '10px 20px', textDecoration: 'none', border: '1px solid #ccc', color: 'black' }}>Cancel</Link>
                </div>
            </form>
        </div>
    )
}
