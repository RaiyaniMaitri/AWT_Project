
"use client"
import React from 'react'
import DeleteServiceDeptAction from '../actions/DeleteServiceDeptAction'

function DeleteServiceDeptButton({ id }: { id: number }) {
    return (
        <button onClick={() => {
            DeleteServiceDeptAction(id)
        }}>Delete</button>
    )
}
export default DeleteServiceDeptButton
