import React from 'react';

export interface RIbenefits {
    content : string
}

export namespace PIbenefits {
}

export default function benefits(props: RIbenefits) {
    return(
        <div className="mt-3 flex justify-evenly align-center justify-between bg-slate-200 border-1 rounded-xl p-3 ">
            <div className='mr-3'>
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_655_54)">
                                    <rect x="2" y="1" width="48" height="48" rx="24" fill="white"/>
                                    <path d="M34 19L23 30L18 25" stroke="#00A06B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <rect x="2.5" y="1.5" width="47" height="47" rx="23.5" stroke="#E2E8F0"/>
                                    </g>
                                    <defs>
                                    <filter id="filter0_d_655_54" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="1"/>
                                    <feGaussianBlur stdDeviation="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_655_54"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_655_54" result="shape"/>
                                    </filter>
                                    </defs>
                                    </svg>
            </div>                                    
            <div className='w-3/5 text-sm align-middle'>
                {props.content}
            </div>                                       
                            </div>
    )
}