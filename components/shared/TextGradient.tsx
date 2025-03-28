import React from 'react'

interface TextGradientProps {
    text: string;
    fromColor?: string;
    toColor?: string;
}

export default function TextGradient({
    text,
    fromColor = 'from-winny',
    toColor = 'to-yelly'
}: TextGradientProps) {
    return (
        <span className={`bg-gradient-to-r ${fromColor} ${toColor} inline-block text-transparent bg-clip-text`}>
            {text}
        </span>
    )
}
