import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogAuthor from '@theme/Blog/Components/Author';
import type {Props} from '@theme/BlogPostItem/Header/Authors';
import styles from './styles.module.css';

/*

<BlogAuthor
  author={{
    ...author,
    // Handle author images using relative paths
    imageURL: assets.authorsImageUrls[idx] ?? author.imageURL,
  }}
/>

*/

// Component responsible for the authors layout
export default function BlogPostItemHeaderAuthors({
  className,
}: Props): ReactNode {
  const {
    metadata: {authors},
    assets,
  } = useBlogPost();
  const authorsCount = authors.length;
  if (authorsCount === 0) {
    return null;
  }
  const imageOnly = authors.every(({name}) => !name);
  const singleAuthor = authors.length === 1;
  return (
    <div
      className={clsx(
        'margin-top--md margin-bottom--sm',
        imageOnly ? styles.imageOnlyAuthorRow : 'row',
        className,
      )}>
      <div className={clsx(imageOnly ? styles.imageOnlyAuthorRow : 'row')} style={{
        gap: "4px",
        paddingLeft: "32px",
        fontSize: "0.9rem",
        color: "var(--ifm-color-emphasis-500)",
      }}>
        <p>Posted by:</p>
        {authors.map((author, idx) => (
          <div className="avatar margin-bottom--sm" key={idx}>
            <a href={author.url} style={{ 
              fontWeight: 600,
              color: "var(--ifm-color-emphasis-500)"
            }}>
              {author.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
