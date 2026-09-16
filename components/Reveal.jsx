'use client';

import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

const Reveal = forwardRef(function Reveal(
  { children, delay = 0, className = '', as: Tag = 'div', ...rest },
  forwardedRef
) {
  const localRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useImperativeHandle(forwardedRef, () => localRef.current);

  useEffect(() => {
    const node = localRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={localRef}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: '0.7s',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: visible ? `${delay}ms` : '0ms',
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
});

export default Reveal;
