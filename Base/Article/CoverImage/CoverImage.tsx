import { FC } from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import { figcaptionStyle, figcaptionLinkStyle } from './styles';

const ImageWrapper = styled('div')`
  margin-top: 2em;
  margin-bottom: 2em;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

type CoverImagePropTypes = {
  src: string;
  width: string;
  height: string;
  alt: string;
  authorHref: string;
  authorName: string;
  blurDataURL?: string;
};

export const CoverImage: FC<CoverImagePropTypes> = ({
  src,
  width,
  height,
  alt,
  authorHref,
  authorName,
  blurDataURL,
}) => (
  <ImageWrapper>
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      blurDataURL={blurDataURL}
      placeholder="blur"
    />
    {authorName ? (
      <span style={figcaptionStyle}>
        Photo by{' '}
        <a
          href={authorHref}
          style={figcaptionLinkStyle}
          target="_blank"
          rel="noreferrer"
        >
          {authorName}
        </a>
      </span>
    ) : null}
  </ImageWrapper>
);
