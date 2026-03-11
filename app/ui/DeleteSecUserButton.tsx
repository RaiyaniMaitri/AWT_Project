
"use client"
import React from 'react'
import DeleteSecUserAction from '../actions/DeleteSec_UserAction'

function DeleteSecUserButton({ id }: { id: number }) {
    return (
        <button onClick={() => {
            DeleteSecUserAction(id)
        }}>Delete</button>
    )
}
export default DeleteSecUserButton
