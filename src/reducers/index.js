import {
  chooseItems,
  paymentCoin,
  returnCoint
} from '../actions/index'

const chooseItem = (state = initialState, action) => {
  switch (action.type) {
    case 'CHOOSE_ITEMS':
      return [...state, action.id]
  }
}
