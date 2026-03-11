
import { prisma } from '@/lib/prisma'
import Link from 'next/link';
import React from 'react'

export default async function ServiceDeptDetail({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    const data = await prisma.servicedept.findFirst({
        where: { ServiceDeptID: Number(id) },
        include: {
            campus: true,
            sec_user: true,
            servicedeptperson: true,
            servicerequesttype: true
        }
    })
    return (
        <div style={{ padding: '20px' }}>
            <h1>Service Department Details</h1>
            <table border={1} style={{ borderCollapse: 'collapse', width: '100%' }}>
                <tbody>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Dept ID</th><td style={{ padding: '8px' }}>{data?.ServiceDeptID}</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Dept Name</th><td style={{ padding: '8px' }}>{data?.ServiceDeptName}</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Campus</th><td style={{ padding: '8px' }}>{data?.campus?.CampusName} ({data?.CampusID})</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Created By</th><td style={{ padding: '8px' }}>{data?.sec_user?.UserName} ({data?.UserID})</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Description</th><td style={{ padding: '8px' }}>{data?.Description}</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Created</th><td style={{ padding: '8px' }}>{data?.Created?.toString()}</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Modified</th><td style={{ padding: '8px' }}>{data?.Modified?.toString()}</td>
                        <th></th><td></td>
                    </tr>
                </tbody>
            </table>

            <h2>Staff Assigned</h2>
            <ul>
                {data?.servicedeptperson.map((item) => (
                    <li key={item.ServiceDeptPersonID}>{item.Description}</li>
                ))}
            </ul>

            <h2>Service Request Types</h2>
            <ul>
                {data?.servicerequesttype.map((item) => (
                    <li key={item.ServiceRequestTypeID}>{item.ServiceRequestTypeName}</li>
                ))}
            </ul>

            <Link href={"/ServiceDept"}>Back</Link>
        </div>
    )
}
