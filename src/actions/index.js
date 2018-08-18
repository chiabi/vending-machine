// {
//   types: 'CHOOSE_ITEMS',
//   id: 1
// }
// {
//   types: 'COIN',
//   coin: 50
// }

const CHOOSE_ITEMS = 'CHOOSE_ITEMS';
const PAYMENT_COIN = 'PAYMENT_COIN';
const RETURN_COIN = 'RETURN_COIN';

export const chooseItems = (id) => ({
  type: CHOOSE_ITEMS,
  id
})

export const paymentCoin = (coin) => ({
  type: PAYMENT_COIN,
  coin
})

export const returnCoin = (coins) => ({
  type: RETURN_COIN,
  coins
})

// {
//   wallet: {
//     coin50: 10,
//     coin100: 10,
//     coin500: 10,
//   },
//   items: [
//     {
//       id: 1,
//       name: "coca-cola",
//       price: 1200,
//       quantity: 20
//     },
//     {
//       id: 1,
//       name: "sida",
//       price: 700,
//       quantity: 20
//     },
//     {
//       id: 1,
//       name: "orange juice",
//       price: 800,
//       quantity: 20
//     },
//     {
//       id: 1,
//       name: "bori cha",
//       price: 1200,
//       quantity: 20
//     },
//     {
//       id: 1,
//       name: "samdasu",
//       price: 800,
//       quantity: 20
//     }
//   ]
// }