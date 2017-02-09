import * as actionTypes from '../actions/types';

const getCategoryInitialState = () => ({
  nextCategoryId: 0,
  groups: {
    nextGroupId: 0
  }
});

const categories = (state = getCategoryInitialState(), action) => {
  switch (action.type) {
    case actionTypes.ADD_CATEGORY: {
      let nextGroupId = state.groups.nextGroupId.valueOf;
      let groupId = action.groupId;
      let groups = {};
      // If new group, first create new group
      if (action.groupName) {
        nextGroupId += 1;
        groups = { ...state.groups,
          [nextGroupId]: { name: action.groupName }
        };
        groupId = nextGroupId;
      } else { groups = { ...state.groups }; }
      // Create new category
      const nextCategoryId = state.nextCategoryId.valueOf + 1;
      const cats = { ...state,
        groups,
        [nextCategoryId]: {
          groupId,
          name: action.catName,
          budget: action.budget,
          rollover: action.rollover
        }
      };
      return { ...state, cats };
    }
    case actionTypes.SET_CATEGORY_ROLLOVER: {
      return { ...state,
        [action.categoryId]: { ...state[action.categoryId],
          rollover: action.rollover
        }
      };
    }
    case actionTypes.SET_CATEGORY_BUDGET: {
      return { ...state,
        [action.categoryId]: { ...state[action.categoryId],
          budget: action.budget
        }
      };
    }
    case actionTypes.SET_CATEGORY_SPENT: {
      return { ...state,
        [action.categoryId]: { ...state[action.categoryId],
          spent: action.spent
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default categories;
