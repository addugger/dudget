import { ADD_MONTH, SET_VIEWED_MONTH, SAVE } from '../actions/types';
import { getMonthInitialState } from './months';

const initialState = { viewedMonth: 1, nextMonthId: 1 };

const budget = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MONTH: {
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
    case SAVE: {
      // TODO: persist current store. later realized this maybe doesn't go in a reducer so need
      // to figure out where it goes
      return state;
    }
    case SET_VIEWED_MONTH: {
      return { ...state, viewedMonth: action.monthId };
    }
    default: {
      return state;
    }
  }
};

export default budget;

// TODO: figure out the proper way to split up the reducers and do it!
