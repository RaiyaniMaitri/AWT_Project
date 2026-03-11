
import { prisma } from '@/lib/prisma'
import { EditSec_UserAction } from '@/app/actions/EditSec_UserAction'
import React from 'react'
import Link from 'next/link'

export default async function EditSecUser({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const data = await prisma.sec_user.findFirst({
        where: { UserID: Number(id) }
    })
    const campuses = await prisma.campus.findMany();

    return (
        <div style={{ padding: '20px' }}>
            <h1>Edit User</h1>
            <form action={EditSec_UserAction} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', maxWidth: '800px' }}>
                <input type='hidden' defaultValue={data?.UserID} name="id" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>User Name:</label>
                    <input type='text' defaultValue={data?.UserName} name="UserName" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Email Address:</label>
                    <input type='email' defaultValue={data?.EmailAddress} name="EmailAddress" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Password:</label>
                    <input type='text' defaultValue={data?.Password} name="Password" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Mobile No:</label>
                    <input type='text' defaultValue={data?.MobileNo} name="MobileNo" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Profile Image URL:</label>
                    <input type='text' defaultValue={data?.ProfileImage || ''} name="ProfileImage" style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Campus:</label>
                    <select name="CampusID" defaultValue={data?.CampusID} required style={{ padding: '8px' }}>
                        {campuses.map(c => (
                            <option key={c.CampusID} value={c.CampusID}>{c.CampusName}</option>
                        ))}
                    </select>
                </div>
                <div style={{ gridColumn: 'span 2', display: 'flex', gap: '10px' }}>
                    <input type='submit' value="Update User" style={{ padding: '10px 20px', cursor: 'pointer' }} />
                    <Link href="/Sec_User" style={{ padding: '10px 20px', textDecoration: 'none', border: '1px solid #ccc', color: 'black' }}>Cancel</Link>
                </div>
            </form>
        </div>
    )
}
