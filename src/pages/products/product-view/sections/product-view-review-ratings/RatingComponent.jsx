import StarIconEmpty from '@/assets/icons/StarIconEmpty';
import StarIconFull from '@/assets/icons/StarIconFull';
import StarIconHalf from '@/assets/icons/StarIconHalf';
import { useEffect, useState } from 'react';

const RatingComponent = ({ item }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = [];

    const fullStars = Math.floor(item.rating);
    const hasHalfStar = item?.rating % 1 !== 0;

    // Fill full stars
    for (let i = 0; i < fullStars; i++) {
      newStars.push(<StarIconFull key={i} />);
    }

    // Fill half star if applicable
    if (hasHalfStar) {
      newStars.push(<StarIconHalf key={fullStars} />);
    }

    // Fill remaining stars with empty stars
    const remainingStars = 5 - newStars.length;
    for (let i = 0; i < remainingStars; i++) {
      newStars.push(<StarIconEmpty key={fullStars + i + 1} />);
    }

    setStars(newStars);
  }, [item.rating]);

  return <div className='flex items-center gap-1'>{stars}</div>;
};

export default RatingComponent;
