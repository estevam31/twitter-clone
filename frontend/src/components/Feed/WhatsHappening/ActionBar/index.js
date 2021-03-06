import React from 'react';

import {
  Container,
  LeftIconsContainer,
  RightIconsContainer,
  ImageIcon,
  GifIcon,
  StatsIcon,
  SmileIcon,
  ButtonContainer,
  PlusIcon,
  Divider,
  Circle
} from './styles';

import TweetButton from '../../../TweetButton';

export default function ActionBar({ handleTweetButton }) {
  return (
    <Container>
      <LeftIconsContainer>
        <ImageIcon />
        <GifIcon />
        <StatsIcon />
        <SmileIcon />
      </LeftIconsContainer>
      <RightIconsContainer>
        <Circle />
        <Divider />
        <PlusIcon />
        <ButtonContainer>
          <TweetButton onClick={handleTweetButton} />
        </ButtonContainer>
      </RightIconsContainer>
    </Container>
  );
}
