
"use client"
import React from 'react'
import DeleteServiceRequestAction from '../actions/DeleteServiceRequestAction'

function DeleteServiceRequestButton({ id }: { id: number }) {
    return (
        <button onClick={() => {
            DeleteServiceRequestAction(id)
        }}>Delete</button>
    )
}
export default DeleteServiceRequestButton
