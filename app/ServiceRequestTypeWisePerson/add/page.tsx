
import React from 'react'
import { AddServiceRequestTypeWisePersonAction } from '@/app/actions/AddServiceRequestTypeWisePersonAction'

export default function AddServiceRequestTypeWisePerson() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Add Service Request Type Wise Person</h1>
            <form action={AddServiceRequestTypeWisePersonAction} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', maxWidth: '800px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Request Type ID:</label>
                    <input type='number' name="ServiceRequestTypeID" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Staff ID:</label>
                    <input type='number' name="StaffID" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>From Date:</label>
                    <input type='date' name="FromDate" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>To Date:</label>
                    <input type='date' name="ToDate" style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gridColumn: 'span 2' }}>
                    <label>Description:</label>
                    <input type='text' name="Description" style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>User ID:</label>
                    <input type='number' name="UserID" required style={{ padding: '8px' }} />
                </div>
                <div style={{ gridColumn: 'span 2', marginTop: '10px' }}>
                    <input type='submit' value="Add Person to Request Type" style={{ padding: '10px 20px', cursor: 'pointer' }} />
                </div>
            </form>
        </div>
    )
}
