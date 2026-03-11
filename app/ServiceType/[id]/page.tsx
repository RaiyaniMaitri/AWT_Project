
import { prisma } from '@/lib/prisma'
import Link from 'next/link';
import React from 'react'

export default async function ServiceTypeDetail({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    const data = await prisma.servicetype.findFirst({
        where: { ServiceTypeID: Number(id) },
        include: {
            sec_user: true,
            servicerequesttype: true
        }
    })
    return (
        <div style={{ padding: '20px' }}>
            <h1>Service Type Details</h1>
            <table border={1} style={{ borderCollapse: 'collapse', width: '100%' }}>
                <tbody>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Type ID</th><td style={{ padding: '8px' }}>{data?.ServiceTypeID}</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Type Name</th><td style={{ padding: '8px' }}>{data?.ServiceTypeName}</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Sequence</th><td style={{ padding: '8px' }}>{data?.Sequence?.toString()}</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Created By</th><td style={{ padding: '8px' }}>{data?.sec_user?.UserName} ({data?.UserID})</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Is For Staff</th><td style={{ padding: '8px' }}>{data?.IsForStaff?.toString()}</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Is For Student</th><td style={{ padding: '8px' }}>{data?.IsForStudent?.toString()}</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Created</th><td style={{ padding: '8px' }}>{data?.Created?.toString()}</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Modified</th><td style={{ padding: '8px' }}>{data?.Modified?.toString()}</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Description</th><td colSpan={3} style={{ padding: '8px' }}>{data?.Description}</td>
                    </tr>
                </tbody>
            </table>

            <h2>Service Request Types</h2>
            <ul>
                {data?.servicerequesttype.map((item) => (
                    <li key={item.ServiceRequestTypeID}>{item.ServiceRequestTypeName}</li>
                ))}
            </ul>

            <Link href={"/ServiceType"}>Back</Link>
        </div>
    )
}
