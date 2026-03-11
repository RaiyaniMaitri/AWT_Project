
"use client"
import React from 'react'
import DeleteServiceDeptPersonAction from '../actions/DeleteServiceDeptPersonAction'

function DeleteServiceDeptPersonButton({ id }: { id: number }) {
    return (
        <button onClick={() => {
            DeleteServiceDeptPersonAction(id)
        }}>Delete</button>
    )
}
export default DeleteServiceDeptPersonButton
