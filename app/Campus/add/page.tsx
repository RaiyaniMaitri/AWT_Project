
import React from 'react'
import { AddCampusAction } from '@/app/actions/AddCampusAction'

export default function AddCampus() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Add Campus</h1>
      <form action={AddCampusAction} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', maxWidth: '800px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>Campus Name:</label>
          <input type='text' name="CampusName" required style={{ padding: '8px' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>Address:</label>
          <input type='text' name="Address" style={{ padding: '8px' }} />
        </div>
        <div style={{ gridColumn: 'span 2' }}>
          <input type='submit' value="Add Campus" style={{ padding: '10px 20px', cursor: 'pointer' }} />
        </div>
      </form>
    </div>
  )
}
