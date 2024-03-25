import { useEffect } from "react";

const useIntersectionObserver = (targetSelector, handleIntersection, options) => {
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);
    const targets = document.querySelectorAll(targetSelector);
    targets.forEach(target => observer.observe(target));
    return () => observer.disconnect();
  }, [targetSelector, handleIntersection, options]);
};

export default useIntersectionObserver;