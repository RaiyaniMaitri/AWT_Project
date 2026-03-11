
"use client"
import React from 'react'
import DeleteCampusAction from '../actions/DeleteCampusAction'

function DeleteCampusButton({ id }: { id: number }) {
    return (
        <button onClick={() => {
            DeleteCampusAction(id)
        }}>Delete</button>
    )
}
export default DeleteCampusButton
