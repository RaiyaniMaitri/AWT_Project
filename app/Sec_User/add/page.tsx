
import React from 'react'
import { AddSec_UserAction } from '@/app/actions/AddSec_UserAction'

export default function AddSecUser() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Add User</h1>
            <form action={AddSec_UserAction} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', maxWidth: '800px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>User Name:</label>
                    <input type='text' name="UserName" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Email:</label>
                    <input type='email' name="EmailAddress" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Password:</label>
                    <input type='password' name="Password" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Mobile No:</label>
                    <input type='text' name="MobileNo" required style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Profile Image URL:</label>
                    <input type='text' name="ProfileImage" style={{ padding: '8px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Campus ID:</label>
                    <input type='number' name="CampusID" required style={{ padding: '8px' }} />
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                    <input type='submit' value="Add User" style={{ padding: '10px 20px', cursor: 'pointer' }} />
                </div>
            </form>
        </div>
    )
}
