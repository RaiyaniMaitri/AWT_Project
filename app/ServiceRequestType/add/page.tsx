
import React from 'react'
import { AddServiceRequestTypeAction } from '@/app/actions/AddServiceRequestTypeAction'

export default function AddServiceRequestType() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Add Service Request Type</h1>
            <form action={AddServiceRequestTypeAction} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', maxWidth: '800px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Service Type ID:</label>
                    <input type='number' name="ServiceTypeID" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Dept ID:</label>
                    <input type='number' name="ServiceDeptID" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gridColumn: 'span 2' }}>
                    <label>Name:</label>
                    <input type='text' name="ServiceRequestTypeName" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gridColumn: 'span 2' }}>
                    <label>Description:</label>
                    <input type='text' name="Description" style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Sequence:</label>
                    <input type='text' name="Sequence" style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>User ID:</label>
                    <input type='number' name="UserID" required style={{ padding: '8px' }} />
                </div>
                <div style={{ gridColumn: 'span 2', marginTop: '10px' }}>
                    <input type='submit' value="Add Request Type" style={{ padding: '10px 20px', cursor: 'pointer' }} />
                </div>
            </form>
        </div>
    )
}
