
import { prisma } from '@/lib/prisma'
import Link from 'next/link';
import React from 'react'

export default async function ServiceRequestDetail({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    const data = await prisma.servicerequest.findFirst({
        where: { ServiceRequestID: Number(id) },
        include: {
            staff: true,
            servicerequesttype: true,
            servicerequeststatus: true,
            sec_user: true,
            servicerequestreply: true
        }
    })
    return (
        <div style={{ padding: '20px' }}>
            <h1>Service Request Details</h1>
            <table border={1} style={{ borderCollapse: 'collapse', width: '100%' }}>
                <tbody>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Request ID</th><td style={{ padding: '8px' }}>{data?.ServiceRequestID}</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Request No</th><td style={{ padding: '8px' }}>{data?.ServiceRequestNo}</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Date Time</th><td style={{ padding: '8px' }}>{data?.ServiceRequestDateTime?.toLocaleString()}</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Staff</th><td style={{ padding: '8px' }}>{data?.staff?.StaffName} ({data?.StaffID})</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Type</th><td style={{ padding: '8px' }}>{data?.servicerequesttype?.ServiceRequestTypeName} ({data?.ServiceRequestTypeID})</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Status</th><td style={{ padding: '8px' }}>{data?.servicerequeststatus?.ServiceRequestStatusName} ({data?.ServiceRequestStatusID})</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Created By</th><td style={{ padding: '8px' }}>{data?.sec_user?.UserName} ({data?.UserID})</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Created</th><td style={{ padding: '8px' }}>{data?.Created?.toString()}</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Modified</th><td style={{ padding: '8px' }}>{data?.Modified?.toString()}</td>
                        <th></th><td></td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Title</th><td colSpan={3} style={{ padding: '8px' }}>{data?.ServiceRequestTitle}</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Description</th><td colSpan={3} style={{ padding: '8px' }}>{data?.ServiceRequestDescription}</td>
                    </tr>
                </tbody>
            </table>

            <h2>Replies</h2>
            <ul>
                {data?.servicerequestreply.map((item) => (
                    <li key={item.ServiceRequestReplyID}>{item.ServiceRequestReplyDescription}</li>
                ))}
            </ul>

            <Link href={"/ServiceRequest"}>Back</Link>
        </div>
    )
}
