
import { prisma } from '@/lib/prisma'
import Link from 'next/link';
import React from 'react'

export default async function ServiceRequestTypeDetail({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    const data = await prisma.servicerequesttype.findFirst({
        where: { ServiceRequestTypeID: Number(id) },
        include: {
            servicetype: true,
            servicedept: true,
            sec_user: true,
            servicerequest: true,
            servicerequesttypewiseperson: true
        }
    })
    return (
        <div style={{ padding: '20px' }}>
            <h1>Service Request Type Details</h1>
            <table border={1} style={{ borderCollapse: 'collapse', width: '100%' }}>
                <tbody>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>ID</th><td style={{ padding: '8px' }}>{data?.ServiceRequestTypeID}</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Name</th><td style={{ padding: '8px' }}>{data?.ServiceRequestTypeName}</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Service Type</th><td style={{ padding: '8px' }}>{data?.servicetype?.ServiceTypeName} ({data?.ServiceTypeID})</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Dept</th><td style={{ padding: '8px' }}>{data?.servicedept?.ServiceDeptName} ({data?.ServiceDeptID})</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Sequence</th><td style={{ padding: '8px' }}>{data?.Sequence?.toString()}</td>
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

            <Link href={"/ServiceRequestType"}>Back</Link>
        </div>
    )
}
