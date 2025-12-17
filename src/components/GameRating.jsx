import React, {useState, useEffect, useCallback} from 'react'
import './gameRating.css'

function GameRating({rating}) {
    const [stars, setStars] = useState([]);

    const generateStars = useCallback(() => {
        let starsArr = [];
        if (rating > 5 || rating < 1) {
            return [];
        }
        for (let i = 0; i < rating; i++) {
            starsArr.push(i);
        }

        return starsArr;
    }, [rating]);

    useEffect(() => {
        setStars(generateStars());
    }, [generateStars]);

  return (
    <div className="gameRating">
        {stars.map((star, index) => (
            <i key={index} className="bi bi-star-fill"></i>
        ))}
    </div>
  )
}

export default GameRating