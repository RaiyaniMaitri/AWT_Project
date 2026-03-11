
import React from 'react'
import { AddServiceRequestStatusAction } from '@/app/actions/AddServiceRequestStatusAction'

export default function AddServiceRequestStatus() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Add Service Request Status</h1>
            <form action={AddServiceRequestStatusAction} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', maxWidth: '800px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Status Name:</label>
                    <input type='text' name="ServiceRequestStatusName" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>System Name:</label>
                    <input type='text' name="ServiceRequestStatusSystemName" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Sequence:</label>
                    <input type='text' name="Sequence" style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>User ID:</label>
                    <input type='number' name="UserID" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gridColumn: 'span 2' }}>
                    <label>Description:</label>
                    <input type='text' name="Description" style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <label>Is Open:</label>
                    <input type='checkbox' name="IsOpen" style={{ width: '20px', height: '20px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <label>Is No Further Action:</label>
                    <input type='checkbox' name="IsNoFurtherActionRequired" style={{ width: '20px', height: '20px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <label>Is Allowed For Tech:</label>
                    <input type='checkbox' name="IsAllowedForTechnician" style={{ width: '20px', height: '20px' }} />
                </div>
                <div style={{ gridColumn: 'span 2', marginTop: '10px' }}>
                    <input type='submit' value="Add Status" style={{ padding: '10px 20px', cursor: 'pointer' }} />
                </div>
            </form>
        </div>
    )
}
