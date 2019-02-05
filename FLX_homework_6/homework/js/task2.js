function discountCalculation() {
    const price = parseFloat(prompt('Please, input amount of money (0-9999999)'));
    const discount = parseFloat(prompt('Please, input a discount (0-99)'));
    if (price <= 0 || price > 9999999 || discount < 0 || discount > 99 || isNaN(price) || isNaN(discount)) {
      return 'Invalid input data';
    }
    const priceWithDiscount = price - (price * discount / 100);
    const saved = price - priceWithDiscount;
    return `Price without discount: ${price.toFixed(2)}
    Discount: ${discount.toFixed(2)}%
    Price with discount: ${priceWithDiscount.toFixed(2)}
    Saved:${saved.toFixed(2)}`;
}
alert( discountCalculation() );