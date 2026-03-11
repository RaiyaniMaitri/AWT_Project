
import React from 'react'
import { AddServiceDeptAction } from '@/app/actions/AddServiceDeptAction'

export default function AddServiceDept() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Add Service Department</h1>
            <form action={AddServiceDeptAction} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', maxWidth: '800px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Dept Name:</label>
                    <input type='text' name="ServiceDeptName" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Campus ID:</label>
                    <input type='number' name="CampusID" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Description:</label>
                    <input type='text' name="Description" style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>User ID:</label>
                    <input type='number' name="UserID" required style={{ padding: '8px' }} />
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                    <input type='submit' value="Add Department" style={{ padding: '10px 20px', cursor: 'pointer' }} />
                </div>
            </form>
        </div>
    )
}
