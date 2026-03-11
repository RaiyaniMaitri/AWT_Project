
import { prisma } from '@/lib/prisma'
import Link from 'next/link';
import React from 'react'

export default async function ServiceRequestStatusDetail({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    const data = await prisma.servicerequeststatus.findFirst({
        where: { ServiceRequestStatusID: Number(id) },
        include: {
            sec_user: true,
            servicerequest: true,
            servicerequestreply: true
        }
    })
    return (
        <div style={{ padding: '20px' }}>
            <h1>Service Request Status Details</h1>
            <table border={1} style={{ borderCollapse: 'collapse', width: '100%' }}>
                <tbody>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Status ID</th><td style={{ padding: '8px' }}>{data?.ServiceRequestStatusID}</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Status Name</th><td style={{ padding: '8px' }}>{data?.ServiceRequestStatusName}</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>System Name</th><td style={{ padding: '8px' }}>{data?.ServiceRequestStatusSystemName}</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Sequence</th><td style={{ padding: '8px' }}>{data?.Sequence?.toString()}</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Is Open</th><td style={{ padding: '8px' }}>{data?.IsOpen?.toString()}</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Created By</th><td style={{ padding: '8px' }}>{data?.sec_user?.UserName} ({data?.UserID})</td>
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

            <h2>Service Requests</h2>
            <ul>
                {data?.servicerequest.map((item) => (
                    <li key={item.ServiceRequestID}>{item.ServiceRequestTitle} ({item.ServiceRequestNo})</li>
                ))}
            </ul>

            <Link href={"/ServiceRequestStatus"}>Back</Link>
        </div>
    )
}
