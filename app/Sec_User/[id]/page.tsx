
import { prisma } from '@/lib/prisma'
import Link from 'next/link';
import React from 'react'

export default async function SecUserDetail({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    const data = await prisma.sec_user.findFirst({
        where: { UserID: Number(id) },
        include: {
            campus: true,
            servicerequest: true,
            servicedept: true,
            servicedeptperson: true,
            servicerequestreply: true,
            servicerequeststatus: true,
            servicerequesttype: true,
            servicerequesttypewiseperson: true,
            servicetype: true
        }
    })
    return (
        <div style={{ padding: '20px' }}>
            <h1>Sec_User Details</h1>
            <table border={1} style={{ borderCollapse: 'collapse', width: '100%' }}>
                <tbody>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>UserID</th><td style={{ padding: '8px' }}>{data?.UserID}</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>UserName</th><td style={{ padding: '8px' }}>{data?.UserName}</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>EmailAddress</th><td style={{ padding: '8px' }}>{data?.EmailAddress}</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Password</th><td style={{ padding: '8px' }}>{data?.Password}</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>MobileNo</th><td style={{ padding: '8px' }}>{data?.MobileNo}</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Campus</th><td style={{ padding: '8px' }}>{data?.campus?.CampusName} ({data?.CampusID})</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Created</th><td style={{ padding: '8px' }}>{data?.Created?.toString()}</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Modified</th><td style={{ padding: '8px' }}>{data?.Modified?.toString()}</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>ProfileImage</th><td style={{ padding: '8px' }}>{data?.ProfileImage}</td>
                        <th></th><td></td>
                    </tr>
                </tbody>
            </table>

            <h2>Service Requests</h2>
            <ul>
                {data?.servicerequest.map((item) => (
                    <li key={item.ServiceRequestID}>{item.ServiceRequestTitle}</li>
                ))}
            </ul>

            <h2>Service Departments Created</h2>
            <ul>
                {data?.servicedept.map((item) => (
                    <li key={item.ServiceDeptID}>{item.ServiceDeptName}</li>
                ))}
            </ul>

            <Link href={"/Sec_User"}>Back</Link>
        </div>
    )
}
