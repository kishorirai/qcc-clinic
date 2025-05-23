import React, { useRef, useEffect, useState } from 'react';

const FadingText = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSentence, setCurrentSentence] = useState(0);

  const sentences = [
    { 
      line1: "Leaders in", 
      line2: "Cosmetic Dentistry", 
      highlight1: "Leaders", 
      highlight2: "" 
    },
    { 
      line1: "State-of-the-art", 
      line2: "Modern Clinic", 
      highlight1: "", 
      highlight2: "Modern Clinic" 
    },
    { 
      line1: "Redefining Standards", 
      line2: "in Patient Care", 
      highlight1: "Redefining Standards", 
      highlight2: "" 
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const containerHeight = container.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress within the container
        const scrollTop = Math.max(0, -rect.top);
        const scrollableHeight = containerHeight - windowHeight;
        const progress = scrollableHeight > 0 ? Math.min(1, scrollTop / scrollableHeight) : 0;
        
        setScrollProgress(progress);
        
        // Determine which sentence should be visible
        const sectionProgress = progress * sentences.length;
        const activeIndex = Math.min(Math.floor(sectionProgress), sentences.length - 1);
        setCurrentSentence(activeIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sentences.length]);

  // Calculate opacity for each sentence with no overlap
  const getOpacity = (index) => {
    const sectionSize = 1 / sentences.length;
    const sectionStart = index * sectionSize;
    const sectionEnd = (index + 1) * sectionSize;
    const sectionMid = sectionStart + (sectionSize / 2);
    
    // Define clear boundaries with no overlap
    const fadeInStart = sectionStart;
    const fadeInEnd = sectionStart + (sectionSize * 0.3);
    const fadeOutStart = sectionEnd - (sectionSize * 0.3);
    const fadeOutEnd = sectionEnd;
    
    if (scrollProgress < fadeInStart || scrollProgress > fadeOutEnd) {
      return 0;
    }
    
    if (scrollProgress >= fadeInEnd && scrollProgress <= fadeOutStart) {
      return 1;
    }
    
    if (scrollProgress < fadeInEnd) {
      return (scrollProgress - fadeInStart) / (fadeInEnd - fadeInStart);
    }
    
    if (scrollProgress > fadeOutStart) {
      return 1 - (scrollProgress - fadeOutStart) / (fadeOutEnd - fadeOutStart);
    }
    
    return 0;
  };

  return (
    <div 
      ref={containerRef}
      className="relative h-screen w-full bg-white"
      style={{ minHeight: '300vh' }} // Make it scrollable
    >
      {/* Fixed centered text container */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative text-center">
          {sentences.map((sentence, index) => (
            <div
              key={index}
              className="absolute inset-0 flex items-center justify-center transition-opacity duration-2000 ease-in-out"
              style={{ 
                opacity: getOpacity(index),
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%',
                width: 'max-content'
              }}
            >
              <div className="text-center">
                <div className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight px-8">
                  <div className="mb-4">
                    {sentence.line1.split(' ').map((word, wordIndex) => {
                      const isHighlighted = sentence.highlight1.includes(word);
                      return (
                        <span 
                          key={wordIndex}
                          className={isHighlighted ? 'text-sky-400' : 'text-black'}
                        >
                          {word}{wordIndex < sentence.line1.split(' ').length - 1 ? ' ' : ''}
                        </span>
                      );
                    })}
                  </div>
                  <div>
                    {sentence.line2.split(' ').map((word, wordIndex) => {
                      const isHighlighted = sentence.highlight2.includes(word);
                      return (
                        <span 
                          key={wordIndex}
                          className={isHighlighted ? 'text-sky-400' : 'text-black'}
                        >
                          {word}{wordIndex < sentence.line2.split(' ').length - 1 ? ' ' : ''}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FadingText;