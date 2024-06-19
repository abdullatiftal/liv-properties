'use client'

import { useState } from 'react'

const tabsState = {
    who: false,
    mission: false,
    vision: false,
    meet: false
}

export const WhoWeAre = () => {
    return (
        <div className='mt-[136px] flex flex-wrap text-xs'>
            <span className={`py-[10px] w-[93px] border-b border-solid border-[#eddfd0] border-opacity-60 text-center border-b-[4px]`}>Who&nbsp;we&nbsp;are</span>
            <span className={`py-[10px] w-[93px] border-b border-solid border-[#eddfd0] border-opacity-60 text-center`}>Mission</span>
            <span className={`py-[10px] w-[83px] border-b border-solid border-[#eddfd0] border-opacity-60 text-center`}>Vision</span>
            <span className={`py-[10px] w-[103px] border-b border-solid border-[#eddfd0] border-opacity-60 text-center`}>Meet&nbsp;the&nbsp;team</span>
        </div>
    )
}