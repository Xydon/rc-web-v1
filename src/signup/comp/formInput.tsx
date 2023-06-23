import React from 'react';

export interface RIformInput {
    placeholder : string
}

export namespace PIformInput {
}

export default function formInput(props: RIformInput) {
    return(
        
        <input type="text" className = "p-2 rounded-xl border-0" placeholder={props.placeholder}/>
        
    )
}