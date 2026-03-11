
"use client"
import React from 'react'
import DeleteServiceRequestTypeWisePersonAction from '../actions/DeleteServiceRequestTypeWisePersonAction'

function DeleteServiceRequestTypeWisePersonButton({ id }: { id: number }) {
    return (
        <button onClick={() => {
            DeleteServiceRequestTypeWisePersonAction(id)
        }}>Delete</button>
    )
}
export default DeleteServiceRequestTypeWisePersonButton
