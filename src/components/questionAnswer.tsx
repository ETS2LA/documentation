import React from 'react';

export interface QuestionAndAnswerProps {
    children?: React.ReactNode;
}

export default function QuestionAndAnswer({children}: QuestionAndAnswerProps) {
    return (
        <div style={{borderRadius: '5px', background: 'var(--ifm-code-background)', padding: '10px', margin: '20px 0', gap: '12px', display: 'flex', flexDirection: 'column'}}>
            <p style={{margin: 0}}><strong>Question</strong> {children[0]}</p>
            <p style={{margin: 0}}><strong>Answer</strong> {children[1]}</p>
        </div>
    )
}