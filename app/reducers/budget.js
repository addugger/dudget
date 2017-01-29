import * as types from '../actions/types';

function getInitialState() {
  return {
    viewedMonth: 1,
    nextMonthId: 1,
    months: {
      1: getMonthInitialState()
    }
  };
}

function getMonthInitialState(categories = [], projectedIncome = 0) {
  const date = new Date();
  return {
    month: date.toLocaleString('en-us', { month: 'long' }),
    year: date.getFullYear(),
    categories,
    actualIncome: 0,
    projectedIncome
  };
}

function budgetApp(state = getInitialState(), action) {
  switch (action.type) {
    case types.ADD_MONTH: {
      const nextId = state.nextMonthId + 1;
      const prevCats = Object.assign({}, state.months[state.nextMonthId].categories);
      return { ...state,
        months: { ...state.months,
          [nextId]: getMonthInitialState(prevCats, state.projectedIncome)
        },
        viewedMonth: nextId,
        nextMonthId: nextId
      };
    }
    default: {
      return state;
    }
  }
}

export default budgetApp;
