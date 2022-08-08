export function useSlashDate(data: number) {
  const arrayData = Array.from(data?.toString() || "");
  const commaData = [];
  let counter = 0;
  for (let i = 0; i <= arrayData.length - 1; i++) {
    counter++;
    //2022
    if (counter === 4 || counter === 6) {
      commaData.push(`${arrayData[i]}/`);
    } else {
      commaData.push(arrayData[i]);
    }
  }
  return commaData.join("");
}
