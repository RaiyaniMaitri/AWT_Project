
import { prisma } from '@/lib/prisma'
import Link from 'next/link';
import React from 'react'

export default async function ServiceRequestReplyDetail({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    const data = await prisma.servicerequestreply.findFirst({
        where: { ServiceRequestReplyID: Number(id) },
        include: {
            servicerequest: true,
            staff: true,
            servicerequeststatus: true,
            sec_user: true
        }
    })
    return (
        <div style={{ padding: '20px' }}>
            <h1>Service Request Reply Details</h1>
            <table border={1} style={{ borderCollapse: 'collapse', width: '100%' }}>
                <tbody>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Reply ID</th><td style={{ padding: '8px' }}>{data?.ServiceRequestReplyID}</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Request</th><td style={{ padding: '8px' }}>{data?.servicerequest?.ServiceRequestTitle} ({data?.ServiceRequestID})</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Staff</th><td style={{ padding: '8px' }}>{data?.staff?.StaffName} ({data?.StaffID})</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Date Time</th><td style={{ padding: '8px' }}>{data?.ServiceRequestReplyDateTime?.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Status</th><td style={{ padding: '8px' }}>{data?.servicerequeststatus?.ServiceRequestStatusName} ({data?.ServiceRequestStatusID})</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Created By</th><td style={{ padding: '8px' }}>{data?.sec_user?.UserName} ({data?.UserID})</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Created</th><td style={{ padding: '8px' }}>{data?.Created?.toString()}</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Modified</th><td style={{ padding: '8px' }}>{data?.Modified?.toString()}</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Description</th><td colSpan={3} style={{ padding: '8px' }}>{data?.ServiceRequestReplyDescription}</td>
                    </tr>
                </tbody>
            </table>
            <Link href={"/ServiceRequestReply"}>Back</Link>
        </div>
    )
}
