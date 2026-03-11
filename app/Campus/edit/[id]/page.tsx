
import { prisma } from '@/lib/prisma'
import { EditCampusAction } from '@/app/actions/EditCampusAction'
import React from 'react'
import Link from 'next/link'

export default async function EditCampus({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const data = await prisma.campus.findFirst({
        where: { CampusID: Number(id) }
    })

    return (
        <div style={{ padding: '20px' }}>
            <h1>Edit Campus</h1>
            <form action={EditCampusAction} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', maxWidth: '800px' }}>
                <input type='hidden' defaultValue={data?.CampusID} name="id" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Campus Name:</label>
                    <input type='text' defaultValue={data?.CampusName} name="CampusName" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Address:</label>
                    <input type='text' defaultValue={data?.Address || ''} name="Address" style={{ padding: '8px' }} />
                </div>
                <div style={{ gridColumn: 'span 2', display: 'flex', gap: '10px' }}>
                    <input type='submit' value="Update Campus" style={{ padding: '10px 20px', cursor: 'pointer' }} />
                    <Link href="/Campus" style={{ padding: '10px 20px', textDecoration: 'none', border: '1px solid #ccc', color: 'black' }}>Cancel</Link>
                </div>
            </form>
        </div>
    )
}
