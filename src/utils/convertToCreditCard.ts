const convertToCreditCard = (card_id, accessToken) => {
  let cardNumber1 = '0000000000000000';
  if (accessToken && card_id) {
    cardNumber1 = card_id;
  }
  let tempCardNumber: string[] = [];
  let firstNumber = cardNumber1.slice(0, 4);
  let secondNumber = cardNumber1.slice(4, 8);
  let thirdNumber = cardNumber1.slice(8, 12);
  let fourNumber = cardNumber1.slice(12, 16);
  tempCardNumber.push(firstNumber);
  tempCardNumber.push(secondNumber);
  tempCardNumber.push(thirdNumber);
  tempCardNumber.push(fourNumber);
  return tempCardNumber;
};
export default convertToCreditCard;
