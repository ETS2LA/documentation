import React from 'react';

export interface FeatureAuthor {
    name: string;
    url: string;
}

export interface FeatureAuthorsProps {
    authors: FeatureAuthor[];
}

export default function FeatureAuthors({authors}: FeatureAuthorsProps) {
    return (
        <div style={{
            gap: '4px',
            display: 'flex', 
            flexDirection: 'row', 
            color: 'var(--ifm-color-emphasis-500)', 
            fontSize: '0.9em',
            transform: 'translateY(-12px)',
            height: '28px'
        }}>
            <p style={{color: 'var(--ifm-color-emphasis-500)'}}>Authors: </p>
            {authors.map((author, index) => (
                <a style={{margin: 0, color: 'var(--ifm-color-emphasis-500)'}} key={index} href={author.url} target="_blank" rel="noopener noreferrer">
                    <strong>{author.name}</strong>
                </a>
            ))}
        </div>
    )
}