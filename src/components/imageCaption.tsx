import React from 'react';

export interface ImageCaptionProps {
    caption: string;
}

export default function ImageCaption({caption}: ImageCaptionProps) {
    return (
        <p style={{
            textAlign: 'center', 
            color: 'var(--ifm-color-emphasis-500)', 
            marginTop: '0px', 
            marginBottom: '20px',
            fontSize: '0.9em',
            transform: 'translateY(-16px)'
        }}>{caption}</p>
    )
}