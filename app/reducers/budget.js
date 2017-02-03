import * as actionTypes from '../actions/types';

const getCategoryInitialState = ({ groupId, name, budget, rollover = false }) => ({
  group: groupId,
  name,
  budget,
  spent: 0,
  rollover
});

const getIntialState = () => ({
  viewedMonth: 1,
  nextMonthId: 1,
  nextGroupId: 0,
  nextCategoryId: 0,
  months: getMonthInitialState(),
  groups: {},
  categories: {}
});

const getMonthInitialState = (categories = [], projectedIncome = 0) => {
  const date = new Date();
  return {
    month: date.toLocaleString('en-us', { month: 'long' }),
    year: date.getFullYear(),
    categories,
    actualIncome: 0,
    projectedIncome
  };
};

const replicatePrevCats = (prevCatIds, categories, nextCategoryId) => {
  let catId = nextCategoryId.valueOf;
  const cats = categories;
  prevCatIds.foreach((id) => {
    catId += 1;
    cats[catId] = { ...categories[id], spent: 0 };
  });
  return { categories: cats, nextCategoryId: catId };
};

const budget = (state = getIntialState(), action) => {
  switch (action.type) {
    case actionTypes.ADD_CATEGORY: {
      let nextGroupId = state.nextGroupId.valueOf;
      let groupId = action.groupId;
      let groups = {};
      // If new group, first create new group
      if (action.groupName) {
        nextGroupId += 1;
        groups = { ...state.groups,
          [nextGroupId]: action.groupName
        };
        groupId = nextGroupId;
      } else { groups = { ...state.groups }; }
      // Create new category
      const nextCategoryId = state.nextCategoryId.valueOf + 1;
      const categories = { ...state.categories,
        [nextCategoryId]: getCategoryInitialState({
          groupId,
          name: action.catName,
          budget: action.budget,
          rollover: action.rollover
        })
      };
      return { ...state,
        groups,
        categories
      };
    }
    case actionTypes.ADD_MONTH: {
      const nextId = state.nextMonthId.valueOf + 1;
      const catsCatId = replicatePrevCats(...state.months[state.nextMonthId].categories,
        ...state.categories,
        state.nextCategoryId.valueOf
      );
      return { ...state,
        months: { ...state.months,
          [nextId]: getMonthInitialState(catsCatId.categories, state.projectedIncome)
        },
        viewedMonth: nextId,
        nextMonthId: nextId,
        nextCategoryId: catsCatId.nextCategoryId + 1
      };
    }
    case actionTypes.SAVE: {
      // TODO: persist current store. later realized this maybe doesn't go in a reducer so need
      // to figure out where it goes
      return state;
    }
    case actionTypes.SET_CATEGORY_ROLLOVER: {
      return { ...state,
        categories: { ...state.categories,
          [action.categoryId]: { ...state.categories[action.categoryId],
            rollover: action.rollover
          }
        }
      };
    }
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
    case actionTypes.SET_VIEWED_MONTH: {
      return { ...state, viewedMonth: action.monthId };
    }
    case actionTypes.UPDATE_ACTUAL_INCOME: {
      return { ...state,
        months: { ...state.months,
          [state.viewedMonth]: { ...state.months[state.viewedMonth],
            actualIncome: action.income
          }
        }
      };
    }
    case actionTypes.UPDATE_CATEGORY_BUDGET: {
      return { ...state,
        categories: { ...state.categories,
          [action.categoryId]: { ...state.categories[action.categoryId],
            budget: action.budget
          }
        }
      };
    }
    case actionTypes.UPDATE_CATEGORY_SPENT: {
      return { ...state,
        categories: { ...state.categories,
          [action.categoryId]: { ...state.categories[action.categoryId],
            spent: action.spent
          }
        }
      };
    }
    default: {
      return state;
    }
  }
};

/* TODO: Consider following changes to allow refactoring to separate reducers:
 # Move viewedMonth and nextMonthId inside month and always pass month id with action for month
 updates
 # Move nextCategoryId inside categories. Move nextGroupId inside groups (just to make things look similar) and move groups inside categories.
*/

export default budget;
