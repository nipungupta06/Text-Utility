import React from 'react'

export default function Alert(props) {
    return (
        props.alert && 
        <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {props.alert.msg}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}
