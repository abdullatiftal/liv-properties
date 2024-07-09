import React from 'react';
import Image from 'next/image';
import { TeamMember } from '@/app/types';

export const MeetTheTeam = (props: { teamMembers: TeamMember }) => {
    return (
        <>
            {Array.isArray(props.teamMembers) &&
                props.teamMembers.map((member) => (
                    <div key={member.id}>
                        <Image
                            src={member.image}
                            alt='Photo of Tim'
                            width={261}
                            height={319}
                            className='border border-solid border-[#EDDFD0] border-opacity-50'
                        />
                        <div className='mt-[11px] text-[23px] font-[700]'>
                            {member.heading}
                        </div>
                        <div className='text-xs'>{member.subheading}</div>
                        <div className='mt-[10px] h-[3px] w-[28px] bg-[#EDDFD0]' />
                    </div>
                ))}
        </>
    );
};
