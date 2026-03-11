
"use client"
import React from 'react'
import DeleteServiceTypeAction from '../actions/DeleteServiceTypeAction'

function DeleteServiceTypeButton({ id }: { id: number }) {
    return (
        <button onClick={() => {
            DeleteServiceTypeAction(id)
        }}>Delete</button>
    )
}
export default DeleteServiceTypeButton
