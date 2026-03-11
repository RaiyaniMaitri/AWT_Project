
import { prisma } from '@/lib/prisma'
import Link from 'next/link';
import React from 'react'

export default async function ServiceDeptPersonDetail({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    const data = await prisma.servicedeptperson.findFirst({
        where: { ServiceDeptPersonID: Number(id) },
        include: {
            servicedept: true,
            staff: true,
            sec_user: true
        }
    })
    return (
        <div style={{ padding: '20px' }}>
            <h1>Service Dept Person Details</h1>
            <table border={1} style={{ borderCollapse: 'collapse', width: '100%' }}>
                <tbody>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>ID</th><td style={{ padding: '8px' }}>{data?.ServiceDeptPersonID}</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Dept</th><td style={{ padding: '8px' }}>{data?.servicedept?.ServiceDeptName} ({data?.ServiceDeptID})</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Staff</th><td style={{ padding: '8px' }}>{data?.staff?.StaffName} ({data?.StaffID})</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>From Date</th><td style={{ padding: '8px' }}>{data?.FromDate?.toLocaleDateString()}</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>To Date</th><td style={{ padding: '8px' }}>{data?.ToDate?.toLocaleDateString()}</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Is HOD</th><td style={{ padding: '8px' }}>{data?.IsHODStaff?.toString()}</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Created By</th><td style={{ padding: '8px' }}>{data?.sec_user?.UserName} ({data?.UserID})</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Created</th><td style={{ padding: '8px' }}>{data?.Created?.toString()}</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Modified</th><td style={{ padding: '8px' }}>{data?.Modified?.toString()}</td>
                        <th style={{ textAlign: 'left', padding: '8px' }}>Description</th><td style={{ padding: '8px' }}>{data?.Description}</td>
                    </tr>
                </tbody>
            </table>
            <Link href={"/ServiceDeptPerson"}>Back</Link>
        </div>
    )
}
