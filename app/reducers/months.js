import * as actionTypes from '../actions/types';

export const getMonthInitialState = (categories = [], projectedIncome = 0) => {
  const date = new Date();
  return {
    month: date.toLocaleString('en-us', { month: 'long' }),
    year: date.getFullYear(),
    categories,
    actualIncome: 0,
    projectedIncome
  };
};

const months = (state = getMonthInitialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_PROJECTED_INCOME: {
      return { ...state,
        months: { ...state.months,
          [state.viewedMonth]: {
            ...state.months[state.viewedMonth],
            projectedIncome: action.projectedIncome
          }
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default months;
