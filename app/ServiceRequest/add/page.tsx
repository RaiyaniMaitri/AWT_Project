
import React from 'react'
import { AddServiceRequestAction } from '@/app/actions/AddServiceRequestAction'

export default function AddServiceRequest() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Add Service Request</h1>
            <form action={AddServiceRequestAction} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', maxWidth: '800px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Request No:</label>
                    <input type='text' name="ServiceRequestNo" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Date Time:</label>
                    <input type='datetime-local' name="ServiceRequestDateTime" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Staff ID:</label>
                    <input type='number' name="StaffID" style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Request Type ID:</label>
                    <input type='number' name="ServiceRequestTypeID" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gridColumn: 'span 2' }}>
                    <label>Title:</label>
                    <input type='text' name="ServiceRequestTitle" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gridColumn: 'span 2' }}>
                    <label>Description:</label>
                    <textarea name="ServiceRequestDescription" required style={{ padding: '8px', minHeight: '100px' }}></textarea>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Status ID:</label>
                    <input type='number' name="ServiceRequestStatusID" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>User ID:</label>
                    <input type='number' name="UserID" required style={{ padding: '8px' }} />
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                    <input type='submit' value="Add Request" style={{ padding: '10px 20px', cursor: 'pointer' }} />
                </div>
            </form>
        </div>
    )
}
