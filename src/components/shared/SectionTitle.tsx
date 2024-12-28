import React from 'react'

interface SectionTitleProps {
    title: string;
    color?: 'black' | 'yellow';
}

export default function SectionTitle({ title, color = 'black' }: SectionTitleProps) {
    const textColor = color === 'yellow' ? 'var(--yelly)' : 'var(--soft-black)';

    return (
        <h2 className={`${textColor} text-2xl uppercase text-center`}>{title}</h2>
    )
}
