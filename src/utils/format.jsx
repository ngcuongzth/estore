export const formatName = (string) => {
    return string.replace("Giày", "");
}

// 23605.00 => 1usd
export const formatPrice = (price, exchange_rate = 23605) => {
    return (price / exchange_rate).toFixed(2);
}