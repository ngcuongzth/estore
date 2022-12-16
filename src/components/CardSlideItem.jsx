import React from 'react'

const CardSlideItem = ({ data }) => {
    const { title, salePrice, originalPrice, rating, image, promotionPercent, color, size } = data;
    const rate = rating.rate;
    return (
        <div>CardItem</div>
    )
}

export default CardSlideItem