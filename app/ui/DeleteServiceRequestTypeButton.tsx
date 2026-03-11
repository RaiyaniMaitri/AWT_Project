
"use client"
import React from 'react'
import DeleteServiceRequestTypeAction from '../actions/DeleteServiceRequestTypeAction'

function DeleteServiceRequestTypeButton({ id }: { id: number }) {
    return (
        <button onClick={() => {
            DeleteServiceRequestTypeAction(id)
        }}>Delete</button>
    )
}
export default DeleteServiceRequestTypeButton
