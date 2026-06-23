import { useReveal } from '../hooks/useReveal';

/**
 * Wrap any element to have it fade/slide in once it scrolls into view.
 * Honors `prefers-reduced-motion` via the global rule on `.reveal`.
 */
function Reveal({ delay = 0, className = '', style, children, ...rest }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Reveal;
