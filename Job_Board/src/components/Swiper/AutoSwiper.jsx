import React from 'react';
import styled, { keyframes, css } from 'styled-components';

function AutoSwiper() {
  const row1 = [
    "https://tse4.mm.bing.net/th?id=OIP.ttCkj8l8aMSMG2bYt95oCgHaCD&pid=Api&P=0&h=220",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    "https://tse4.mm.bing.net/th?id=OIP.8VtXZMWRns9qwI9EyU8Z1QHaBa&pid=Api&P=0&h=220",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
  ];

  return (
    <>
    <div className='text-4xl justify-center flex mt-7 '>
        <h1>Top {''}
          <span className='text-blue-500'><strong>Hiring Companies</strong></span>
           </h1>
      </div>
    <AppContainer>
      <Wrapper>
        
        <Marquee>
          <MarqueeGroup>
            {row1.map((e, index) => (
              <ImageGroup key={index}>
                <Image src={e} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((e, index) => (
              <ImageGroup key={index + row1.length}>
                <Image src={e} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </AppContainer>
    </>
  );
}

export default AutoSwiper;

const AppContainer = styled.div`
  width: 90vw;
  height: 40vh;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


const Marquee = styled.div`
  display: flex;
  width: 90%;
  overflow: hidden;
  user-select: none;

  // mask-image: linear-gradient(
  //   to right,
  //   hsl(0 0% 0% / 0),
  //   hsl(0 0% 0% / 1) 10%,
  //   hsl(0 0% 0% / 1) 90%,
  //   hsl(0 0% 0% / 0)
  // );
`;


const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;
const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 20s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  // border: 1px solid black; 
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

