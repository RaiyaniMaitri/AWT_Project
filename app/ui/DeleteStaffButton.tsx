
"use client"
import React from 'react'
import DeleteStaffAction from '../actions/DeleteStaffAction'

function DeleteStaffButton({ id }: { id: number }) {
    return (
        <button onClick={() => {
            DeleteStaffAction(id)
        }}>Delete</button>
    )
}
export default DeleteStaffButton
