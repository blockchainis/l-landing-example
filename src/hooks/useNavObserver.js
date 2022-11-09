import { useEffect, useRef } from "react";

export default function useNavObserver(cb) {
  const targetRef = useRef(null);
  const cbRef = useRef(cb);
  useEffect(() => {
    const intersectionCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cbRef.current();
        }
      });
    };

    const observer = new IntersectionObserver(intersectionCallback, {
      threshold: 0.7,
    });

    if (targetRef.current) {
      const targetEl = targetRef.current;
      observer.observe(targetEl);
      return () => {
        observer.unobserve(targetEl);
      };
    }
  }, [targetRef]);

  return targetRef;
}
