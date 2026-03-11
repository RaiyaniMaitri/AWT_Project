
import React from 'react'
import { AddServiceRequestReplyAction } from '@/app/actions/AddServiceRequestReplyAction'

export default function AddServiceRequestReply() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Add Service Request Reply</h1>
            <form action={AddServiceRequestReplyAction} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', maxWidth: '800px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Request ID:</label>
                    <input type='number' name="ServiceRequestID" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Staff ID:</label>
                    <input type='number' name="StaffID" style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Reply Date Time:</label>
                    <input type='datetime-local' name="ServiceRequestReplyDateTime" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Status ID:</label>
                    <input type='number' name="ServiceRequestStatusID" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gridColumn: 'span 2' }}>
                    <label>Description:</label>
                    <input type='text' name="ServiceRequestReplyDescription" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>User ID:</label>
                    <input type='number' name="UserID" required style={{ padding: '8px' }} />
                </div>
                <div style={{ gridColumn: 'span 2', marginTop: '10px' }}>
                    <input type='submit' value="Add Reply" style={{ padding: '10px 20px', cursor: 'pointer' }} />
                </div>
            </form>
        </div>
    )
}
