const ages = [12, 23, 45, 45];
const ages2 = [11, 21, 14, 12];
const ages3 = [22, 24, 34, 36, 66];
const allAges = ages.concat(ages2).concat([05]).concat(ages3);
const allAges2 = [...ages, ...ages2, 05, ...ages3];
// console.log(allAges2);

const business = 650;
const minister = 450
const sochib = 250;
const takaPoisa = [650, 450, 250, 850];
// const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takaPoisa);

console.log(maximum);