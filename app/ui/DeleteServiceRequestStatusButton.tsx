
"use client"
import React from 'react'
import DeleteServiceRequestStatusAction from '../actions/DeleteServiceRequestStatusAction'

function DeleteServiceRequestStatusButton({ id }: { id: number }) {
    return (
        <button onClick={() => {
            DeleteServiceRequestStatusAction(id)
        }}>Delete</button>
    )
}
export default DeleteServiceRequestStatusButton
