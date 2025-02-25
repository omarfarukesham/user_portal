import { useEffect, useState } from 'react';

const useFindPosition = (ref) => {
  const [position, setPosition] = useState({
    isTop: false,
    isBottom: false,
    isLeft: false,
    isRight: false,
    top: undefined,
    bottom: undefined,
    left: undefined,
    right: undefined,
    width: undefined,
    heigh: undefined,
  });

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const isTop = rect.top <= viewportHeight / 2;
      const isBottom = rect.bottom >= viewportHeight / 2;
      const isLeft = rect.left <= viewportWidth / 2;
      const isRight = rect.right >= viewportWidth / 2;

      setPosition({
        isTop,
        isBottom,
        isLeft,
        isRight,
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right,
        width: rect.width,
        heigh: rect.height,
      });
    }
  }, [ref]);

  return position;
};

export default useFindPosition;
