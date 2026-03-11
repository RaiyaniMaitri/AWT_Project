
import { prisma } from '@/lib/prisma'
import Link from 'next/link';
import React from 'react'

export default async function ServiceRequestTypeWisePersonDetail({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    const data = await prisma.servicerequesttypewiseperson.findFirst({
        where: { ServiceRequestTypeWisePersonID: Number(id) },
        include: {
            servicerequesttype: true,
            staff: true,
            sec_user: true
        }
    })
    return (
        <div style={{ padding: '20px' }}>
            <h1>Service Request Type Wise Person Details</h1>
            <table border={1} style={{ borderCollapse: 'collapse', width: '100%' }}>
                <tbody>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>ID</th><td style={{ padding: '8px' }}>{data?.ServiceRequestTypeWisePersonID}</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Request Type</th><td style={{ padding: '8px' }}>{data?.servicerequesttype?.ServiceRequestTypeName} ({data?.ServiceRequestTypeID})</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Staff</th><td style={{ padding: '8px' }}>{data?.staff?.StaffName} ({data?.StaffID})</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>From Date</th><td style={{ padding: '8px' }}>{data?.FromDate?.toLocaleDateString()}</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>To Date</th><td style={{ padding: '8px' }}>{data?.ToDate?.toLocaleDateString()}</td>
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
            <Link href={"/ServiceRequestTypeWisePerson"}>Back</Link>
        </div>
    )
}
