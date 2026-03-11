
import React from 'react'
import { AddStaffAction } from '@/app/actions/AddStaffAction'

export default function AddStaff() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Add Staff</h1>
            <form action={AddStaffAction} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', maxWidth: '800px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Staff Name:</label>
                    <input type='text' name="StaffName" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Phone:</label>
                    <input type='text' name="Phone" style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Email:</label>
                    <input type='email' name="Email" style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Campus ID:</label>
                    <input type='number' name="CampusID" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gridColumn: 'span 2' }}>
                    <label>Description:</label>
                    <input type='text' name="Description" style={{ padding: '8px' }} />
                </div>
                <div style={{ gridColumn: 'span 2', marginTop: '10px' }}>
                    <input type='submit' value="Add Staff" style={{ padding: '10px 20px', cursor: 'pointer' }} />
                </div>
            </form>
        </div>
    )
}
