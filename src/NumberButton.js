import React from 'react'
import {useState} from 'react'

export default function NumberButton({id}){
    return(
        <button
        id={id}
        >
        {id}
        </button>

    )
}
/* pass in value + read it on onclick to update state */