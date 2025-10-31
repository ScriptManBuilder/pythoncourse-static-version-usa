import React from 'react';
import {
  LoaderContainer,
  LoaderContent,
  Logo,
  Tagline,
  SpinnerContainer,
  Spinner,
  ProgressSection,
  ProgressBarContainer,
  ProgressBar,
  ProgressText,
  LoadingText
} from '../styles/components/InitialLoaderStyles';

interface InitialLoaderProps {
  progress: number;
}

const InitialLoader: React.FC<InitialLoaderProps> = ({ progress }) => {
  const isComplete = progress >= 100;

  // Dynamic loading messages based on progress
  const getLoadingMessage = () => {
    if (progress < 25) return 'Initializing Python learning platform...';
    if (progress < 50) return 'Loading course materials and resources...';
    if (progress < 75) return 'Preparing your interactive coding environment...';
    if (progress < 90) return 'Setting up your personalized dashboard...';
    return 'Almost ready to start your Python journey...';
  };

  return (
    <LoaderContainer $isComplete={isComplete}>
      <LoaderContent>
        <Logo>PYTHON LEARNING</Logo>
        <Tagline>Master Programming Excellence</Tagline>
        
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
        
        <ProgressSection>
          <ProgressBarContainer>
            <ProgressBar $progress={progress} />
          </ProgressBarContainer>
          <ProgressText>{Math.round(progress)}%</ProgressText>
        </ProgressSection>
        
        <LoadingText>
          {getLoadingMessage()}
        </LoadingText>
      </LoaderContent>
    </LoaderContainer>
  );
};

export default InitialLoader;