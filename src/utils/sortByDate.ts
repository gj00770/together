import { groupBy } from "lodash";
import Product from "../../pages/product";
import { PurchaseItem } from "../types/PurchaseItem";

function version1(array: PurchaseItem[]) {
  let result: {
    date: number;
    year: number;
    month: number;
    list: PurchaseItem[];
  }[] = [];
  for (let i = 0; i < array.length; i++) {
    let date = array[i].time.getDate();
    let month = array[i].time.getMonth();
    let year = array[i].time.getMonth();

    let bool = true;
    for (let j = 0; j < result.length; j++) {
      if (
        date == result[j].date &&
        month == result[j].month &&
        year === result[j].year
      ) {
        bool = false;
        result[j].list.push(array[i]);
        break;
      }
    }
    if (bool === true) {
      // push
      //true
      result.push({ year, month, date, list: [array[i]] });
      // list
    }
  }

  return result;
}

function version2(array: PurchaseItem[]) {
  const result: {
    date: number;
    year: number;
    month: number;
    list: PurchaseItem[];
  }[] = [];
  for (const purchaseItem of array) {
    const date = purchaseItem.time.getDate();
    const month = purchaseItem.time.getMonth();
    const year = purchaseItem.time.getMonth();

    const index = result.findIndex((group) => {
      return date == group.date && month == group.month && year === group.year;
    });

    if (index === -1) {
      result.push({ year, month, date, list: [purchaseItem] });
    } else {
      result[index].list.push(purchaseItem);
    }
  }

  return result;
}

function version3(array: PurchaseItem[]) {
  // { '2022-01-01': [product, product], '2022-01-02': [product, product], ...}

  const result: Record<string, PurchaseItem[]> = groupBy(
    array,
    (purchaseItem) => {
      const date = purchaseItem.time.getDate();
      const month = purchaseItem.time.getMonth();
      const year = purchaseItem.time.getMonth();
      return `${year}-${month}-${date}`;
    }
  );
  const arr: {
    date: number;
    year: number;
    month: number;
    list: PurchaseItem[];
  }[] = [];
  0;
  for (const key in result) {
    let date = key;
    let product = result[key];
    let split = date.split("-");
    arr.push({
      year: Number(split[0]),
      month: Number(split[1]),
      date: Number(split[2]),
      list: product,
    });
  }
  return arr;
}

export function version4(array: PurchaseItem[]) {
  const result: Record<string, PurchaseItem[]> = groupBy(
    array,
    (purchaseItem) => {
      const date = new Date(purchaseItem.time).getDate();
      const month = new Date(purchaseItem.time).getMonth();
      const year = new Date(purchaseItem.time).getFullYear();
      console.log(date, month, year);
      return `${year}-${month}-${date}`;
    }
  );
  // [ ['2022-01-01', [product, product]], ['2022-01-02', [product, product]] ]
  return Object.entries(result).map(([key, list]) => {
    const [year, month, date] = key.split("-").map(Number);
    return { year, month, date, list };
  });
}

// [ { 날짜: '2022-01-10', list: [product, product] }, { 날짜: '2022-01-11', list: [product, product] },
// [ [{ 날짜 : 2022-01-19} , [ product , product]],[      ] ]
//
/// date ===  i +

// 날짜 정보 를

// -----> ----> 다르면

//for문을돌면서 2022 01 02  2022 01 02  2022 01 02  2022 01 03 2022 01 04 2022 0104
//   [  1      2           3                1      1          2 ]
//[3,1,2]
// count [[{} [product ]]]

//버블솔트나 삽입정렬
// 정렬을 해야지 n
//
