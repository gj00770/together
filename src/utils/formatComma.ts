export function formatComma(price: number) {
  const arrayPrice = Array.from(price?.toString() || "");
  const commaPrice = [];
  let counter = arrayPrice.length;
  for (let i = 0; i <= arrayPrice.length - 1; i++) {
    counter--;
    if (counter % 3 === 0 && counter !== 0) {
      commaPrice.push(`${arrayPrice[i]},`);
    } else {
      commaPrice.push(arrayPrice[i]);
    }
  }

  return commaPrice.join("");
}
