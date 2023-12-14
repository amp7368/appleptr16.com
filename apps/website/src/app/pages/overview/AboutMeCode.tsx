import highlight from 'highlight.js/lib/core';
import javaLanguage from 'highlight.js/lib/languages/java';
import textLink from '../../../assets/about.java';
import { useEffect, useState } from 'react';
import { AppPaper } from '../../components/base/AppPaper';

highlight.registerLanguage('java', javaLanguage);

export function AboutMeCode() {
    const aboutMeCodeBlockId = 'aboutMeCodeBlock';
    useEffect(() => {
        const element = document.getElementById(aboutMeCodeBlockId);
        if (!element) {
            console.error(`${aboutMeCodeBlockId} does not exist!`);
            return;
        }
        fetch(textLink)
            .then((res) => res.text())
            .then((text) => {
                element.innerHTML = highlight.highlight(text, {
                    ignoreIllegals: true,
                    language: 'java',
                }).value;
            });
    }, [aboutMeCodeBlockId]);
    return (
        <AppPaper sx={{ padding: 3 }}>
            <div
                id={aboutMeCodeBlockId}
                style={{ whiteSpace: 'pre', fontWeight: 500 }}
            />
        </AppPaper>
    );
}
