import React from 'react'

interface SectionTitleProps {
    title: string;
    color?: 'yellow' | 'pure-black';
}

export default function SectionTitle({ title, color = 'pure-black' }: SectionTitleProps) {
    const textColor =
        color === 'yellow' ? 'var(--color-yelly)' :
            'var(--color-pure-black)';

    return (
        <h2
            style={{ color: textColor }}
            className={`text-2xl uppercase text-center`}>{title}</h2>
    )
}
