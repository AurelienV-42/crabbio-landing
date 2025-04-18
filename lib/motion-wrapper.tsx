"use client"

import React from 'react';

interface MotionProps {
  children: React.ReactNode;
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  whileHover?: any;
  whileTap?: any;
  whileInView?: any;
  viewport?: any;
  variants?: any;
  className?: string;
  style?: React.CSSProperties;
  [x: string]: any;
}

// This is a simplified motion wrapper that provides animation props
// but doesn't actually animate anything to avoid installing framer-motion
export const motion = {
  div: React.forwardRef<HTMLDivElement, MotionProps>(
    ({ children, className, style, ...props }, ref) => {
      return (
        <div ref={ref} className={className} style={style}>
          {children}
        </div>
      );
    }
  ),
  h1: React.forwardRef<HTMLHeadingElement, MotionProps>(
    ({ children, className, style, ...props }, ref) => {
      return (
        <h1 ref={ref} className={className} style={style}>
          {children}
        </h1>
      );
    }
  ),
  h2: React.forwardRef<HTMLHeadingElement, MotionProps>(
    ({ children, className, style, ...props }, ref) => {
      return (
        <h2 ref={ref} className={className} style={style}>
          {children}
        </h2>
      );
    }
  ),
  h3: React.forwardRef<HTMLHeadingElement, MotionProps>(
    ({ children, className, style, ...props }, ref) => {
      return (
        <h3 ref={ref} className={className} style={style}>
          {children}
        </h3>
      );
    }
  ),
  p: React.forwardRef<HTMLParagraphElement, MotionProps>(
    ({ children, className, style, ...props }, ref) => {
      return (
        <p ref={ref} className={className} style={style}>
          {children}
        </p>
      );
    }
  ),
  section: React.forwardRef<HTMLElement, MotionProps>(
    ({ children, className, style, ...props }, ref) => {
      return (
        <section ref={ref} className={className} style={style}>
          {children}
        </section>
      );
    }
  ),
};