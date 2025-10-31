import styled, { keyframes } from 'styled-components';

// Keyframe animations
export const fadeOut = keyframes`
  from {
    opacity: 1;
    visibility: visible;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

export const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
`;

export const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

export const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const scaleIn = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

// Main container
export const LoaderContainer = styled.div<{ $isComplete: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #3776ab 0%, #ffd43b 30%, #306998 70%, #3776ab 100%);
  background-size: 200% 200%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${props => props.$isComplete ? fadeOut : 'none'} 0.8s ease-out forwards;
  
  /* Subtle background animation */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
    animation: ${shimmer} 4s ease-in-out infinite;
  }
`;

// Content wrapper
export const LoaderContent = styled.div`
  position: relative;
  text-align: center;
  color: white;
  z-index: 1;
  animation: ${scaleIn} 0.8s ease-out;
`;

// Typography
export const Logo = styled.h1`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 800;
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin: 0 0 10px 0;
  letter-spacing: 3px;
  text-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.4),
    0 0 40px rgba(255, 212, 59, 0.3);
  animation: ${pulse} 3s ease-in-out infinite;
  background: linear-gradient(45deg, #ffffff, #ffd43b, #ffffff);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Tagline = styled.p`
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  margin: 0 0 40px 0;
  opacity: 0.9;
  font-weight: 400;
  letter-spacing: 1.5px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

// Spinner section
export const SpinnerContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 30px;
  
  /* Outer ring for visual enhancement */
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    animation: ${spin} 3s linear infinite reverse;
  }
`;

export const Spinner = styled.div`
  width: 100%;
  height: 100%;
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-top: 4px solid rgba(255, 212, 59, 0.9);
  border-right: 4px solid rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  animation: ${spin} 1.2s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
  box-shadow: 0 0 20px rgba(255, 212, 59, 0.3);
`;

// Progress section
export const ProgressSection = styled.div`
  width: 100%;
  max-width: 350px;
  margin: 20px auto;
  
  @media (max-width: 768px) {
    max-width: 280px;
  }
  
  @media (max-width: 480px) {
    max-width: 220px;
  }
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  overflow: hidden;
  margin: 15px 0;
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.2),
    0 2px 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
`;

export const ProgressBar = styled.div<{ $progress: number }>`
  width: ${props => Math.min(props.$progress, 100)}%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 212, 59, 0.8) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 212, 59, 0.8) 100%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 2s linear infinite;
  transition: width 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(255, 212, 59, 0.4);
  position: relative;
  
  /* Glowing effect */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    animation: ${shimmer} 1.5s ease-in-out infinite;
  }
`;

export const ProgressText = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin: 10px 0 0 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
`;

// Status messages
export const LoadingText = styled.p`
  font-size: 1.1rem;
  margin: 25px 0 0 0;
  opacity: 0.8;
  font-weight: 400;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  min-height: 1.5em;
  transition: opacity 0.3s ease;
`;

// Welcome message card
export const WelcomeMessage = styled.div`
  margin-top: 30px;
  padding: 25px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  backdrop-filter: blur(20px);
  max-width: 420px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.15);
  
  /* Animated appearance */
  animation: ${slideUp} 1s ease-out 0.5s both;
  
  @media (max-width: 768px) {
    max-width: 320px;
    padding: 20px;
    margin-top: 25px;
  }
  
  @media (max-width: 480px) {
    max-width: 280px;
    padding: 18px;
    margin-top: 20px;
  }
`;

export const WelcomeTitle = styled.h3`
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  margin: 0 0 12px 0;
  font-weight: 700;
  color: white;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  line-height: 1.3;
`;

export const WelcomeSubtitle = styled.p`
  font-size: clamp(0.85rem, 2.2vw, 1rem);
  margin: 0;
  opacity: 0.9;
  font-weight: 300;
  line-height: 1.5;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
`;

// Loading tips (optional enhancement)
export const LoadingTips = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  opacity: 0.6;
  font-size: 0.85rem;
  max-width: 300px;
  
  @media (max-width: 768px) {
    bottom: 30px;
    font-size: 0.8rem;
    max-width: 250px;
  }
`;

export const Tip = styled.p`
  margin: 0;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  animation: ${slideUp} 0.6s ease-out;
`;