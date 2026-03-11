
import { prisma } from '@/lib/prisma'
import Link from 'next/link';
import React from 'react'

export default async function StaffDetail({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    const data = await prisma.staff.findFirst({
        where: { StaffID: Number(id) },
        include: {
            campus: true,
            servicedeptperson: true,
            servicerequest: true,
            servicerequestreply: true,
            servicerequesttypewiseperson: true
        }
    })
    return (
        <div style={{ padding: '20px' }}>
            <h1>Staff Details</h1>
            <table border={1} style={{ borderCollapse: 'collapse', width: '100%' }}>
                <tbody>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Staff ID</th><td style={{ padding: '8px' }}>{data?.StaffID}</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Staff Name</th><td style={{ padding: '8px' }}>{data?.StaffName}</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Phone</th><td style={{ padding: '8px' }}>{data?.Phone}</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Email</th><td style={{ padding: '8px' }}>{data?.Email}</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Campus</th><td style={{ padding: '8px' }}>{data?.campus?.CampusName} ({data?.CampusID})</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Created</th><td style={{ padding: '8px' }}>{data?.Created?.toString()}</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Modified</th><td style={{ padding: '8px' }}>{data?.Modified?.toString()}</td>
                        <th></th><td></td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Description</th><td colSpan={3} style={{ padding: '8px' }}>{data?.Description}</td>
                    </tr>
                </tbody>
            </table>

            <h2>Service Dept Persons</h2>
            <ul>
                {data?.servicedeptperson.map((item) => (
                    <li key={item.ServiceDeptPersonID}>{item.Description}</li>
                ))}
            </ul>

            <Link href={"/Staff"}>Back</Link>
        </div>
    )
}
