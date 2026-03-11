
"use client"
import React from 'react'
import DeleteServiceRequestReplyAction from '../actions/DeleteServiceRequestReplyAction'

function DeleteServiceRequestReplyButton({ id }: { id: number }) {
    return (
        <button onClick={() => {
            DeleteServiceRequestReplyAction(id)
        }}>Delete</button>
    )
}
export default DeleteServiceRequestReplyButton
