
import { prisma } from '@/lib/prisma'
import { EditStaffAction } from '@/app/actions/EditStaffAction'
import React from 'react'
import Link from 'next/link'

export default async function EditStaff({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const data = await prisma.staff.findFirst({
        where: { StaffID: Number(id) }
    })
    const campuses = await prisma.campus.findMany();

    return (
        <div style={{ padding: '20px' }}>
            <h1>Edit Staff</h1>
            <form action={EditStaffAction} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', maxWidth: '800px' }}>
                <input type='hidden' defaultValue={data?.StaffID} name="id" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Staff Name:</label>
                    <input type='text' defaultValue={data?.StaffName} name="StaffName" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Phone:</label>
                    <input type='text' defaultValue={data?.Phone || ''} name="Phone" style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Email:</label>
                    <input type='email' defaultValue={data?.Email || ''} name="Email" style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Campus:</label>
                    <select name="CampusID" defaultValue={data?.CampusID} required style={{ padding: '8px' }}>
                        {campuses.map(c => (
                            <option key={c.CampusID} value={c.CampusID}>{c.CampusName}</option>
                        ))}
                    </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gridColumn: 'span 2' }}>
                    <label>Description:</label>
                    <input type='text' defaultValue={data?.Description || ''} name="Description" style={{ padding: '8px' }} />
                </div>
                <div style={{ gridColumn: 'span 2', display: 'flex', gap: '10px', marginTop: '10px' }}>
                    <input type='submit' value="Update Staff" style={{ padding: '10px 20px', cursor: 'pointer' }} />
                    <Link href="/Staff" style={{ padding: '10px 20px', textDecoration: 'none', border: '1px solid #ccc', color: 'black' }}>Cancel</Link>
                </div>
            </form>
        </div>
    )
}
