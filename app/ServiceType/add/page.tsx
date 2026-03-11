
import React from 'react'
import { AddServiceTypeAction } from '@/app/actions/AddServiceTypeAction'

export default function AddServiceType() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Add Service Type</h1>
            <form action={AddServiceTypeAction} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', maxWidth: '800px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Name:</label>
                    <input type='text' name="ServiceTypeName" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Sequence:</label>
                    <input type='text' name="Sequence" style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gridColumn: 'span 2' }}>
                    <label>Description:</label>
                    <input type='text' name="Description" style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>User ID:</label>
                    <input type='number' name="UserID" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <label>For Staff:</label>
                    <input type='checkbox' name="IsForStaff" style={{ width: '20px', height: '20px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <label>For Student:</label>
                    <input type='checkbox' name="IsForStudent" style={{ width: '20px', height: '20px' }} />
                </div>
                <div style={{ gridColumn: 'span 2', marginTop: '10px' }}>
                    <input type='submit' value="Add Service Type" style={{ padding: '10px 20px', cursor: 'pointer' }} />
                </div>
            </form>
        </div>
    )
}
