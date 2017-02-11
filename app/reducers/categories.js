import { ADD_CATEGORY,
  SET_CATEGORY_ROLLOVER,
  SET_CATEGORY_BUDGET,
  SET_CATEGORY_SPENT } from '../actions/types';

const getCategoryInitialState = () => ({
  nextCategoryId: 0,
  groups: {
    nextGroupId: 0
  }
});

const categories = (state = getCategoryInitialState(), action) => {
  switch (action.type) {
    case ADD_CATEGORY: {
      let nextGroupId = state.groups.nextGroupId;
      let groupId = action.groupId;
      let groups;
      // If new group, first create new group
      if (action.groupName) {
        nextGroupId += 1;
        groups = { ...state.groups,
          nextGroupId,
          [nextGroupId]: { name: action.groupName }
        };
        groupId = nextGroupId;
      } else { groups = { ...state.groups }; }
      // Create new category
      const nextCategoryId = state.nextCategoryId + 1;
      const cats = { ...state,
        groups,
        nextCategoryId,
        [nextCategoryId]: {
          groupId,
          name: action.catName,
          budget: action.budget,
          rollover: action.rollover,
          spent: 0
        }
      };
      return cats;
    }
    case SET_CATEGORY_ROLLOVER: {
      return { ...state,
        [action.categoryId]: { ...state[action.categoryId],
          rollover: action.rollover
        }
      };
    }
    case SET_CATEGORY_BUDGET: {
      return { ...state,
        [action.categoryId]: { ...state[action.categoryId],
          budget: action.budget
        }
      };
    }
    case SET_CATEGORY_SPENT: {
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
