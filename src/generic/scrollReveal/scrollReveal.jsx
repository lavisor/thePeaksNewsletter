import React, { useRef, useEffect, FC, CSSProperties } from "react";
import scrollReveal from "scrollreveal";


const ScrollReveal = ({children}) => {

    const sectionRef = useRef(null);
    useEffect(() => {
      if (sectionRef.current)
        scrollReveal().reveal(sectionRef.current, {
          scale: 0.85,
          delay: 100,
          reset: true
        });
    }, []);

    return (
        <section
          ref={sectionRef}
          data-testid="section"
        >
          {children}
        </section>
      );
}

export default ScrollReveal