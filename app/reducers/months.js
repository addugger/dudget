import * as actionTypes from '../actions/types';

export const getMonthsInitialState = () => {
  const date = new Date();
  return {
    nextMonthId: 1,
    viewedMonth: 1,
    1: {
      month: date.toLocaleString('en-us', { month: 'long' }),
      year: date.getFullYear(),
      categories: [],
      projectedIncome: 0,
      actualIncome: 0
    }
  };
};

const months = (state = getMonthsInitialState(), action) => {
  switch (action.type) {
    case actionTypes.ADD_MONTH: {
      const date = new Date(
        `${state[state.nextMonthId].month} 01 ${state[state.nextMonthId].year}`);
      date.setMonth(date.getMonth() + 1);
      const nextId = state.nextMonthId.valueOf + 1;
      return { ...state,
        [nextId]: {
          month: date.toLocaleString('en-us', { month: 'long' }),
          year: date.getFullYear(),
          categories: action.catIds,
          actualIncome: 0,
          projectedIncome: state[state.viewedMonth].projectedIncome
        },
        viewedMonth: nextId,
        nextMonthId: nextId
      };
    }
    case actionTypes.SET_PROJECTED_INCOME: {
      return { ...state,
        [state.viewedMonth]: { ...state[state.viewedMonth],
          projectedIncome: action.income
        }
      };
    }
    case actionTypes.SET_VIEWED_MONTH: {
      return { ...state, viewedMonth: action.monthId };
    }
    case actionTypes.UPDATE_ACTUAL_INCOME: {
      return { ...state,
        [state.viewedMonth]: { ...state[state.viewedMonth],
          actualIncome: action.income
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default months;
