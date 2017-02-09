/* eslint-disable max-len */
import * as types from './types';

export const save = () => ({ type: types.SAVE });

// months
export const addMonth = (catIds) => ({ type: types.ADD_MONTH, catIds });

export const setProjectedIncome = (income) => ({ type: types.SET_PROJECTED_INCOME, income });

export const setViewedMonth = (monthId) => ({ type: types.SET_VIEWED_MONTH, monthId });

export const updateActualIncome = (income) => ({ type: types.UPDATE_ACTUAL_INCOME, income });

// categories
export const addCategory = ({ groupName = '', groupId = 0, catName, budget, rollover = false }) => ({
  type: types.ADD_CATEGORY,
  groupName,
  groupId,
  catName,
  budget,
  rollover
});

export const setCategoryRollover = (categoryId, rollover) => ({ type: types.SET_CATEGORY_ROLLOVER, rollover });

export const updateCategorySpent = (categoryId, spent) => ({ type: types.UPDATE_CATEGORY_SPENT, categoryId, spent });

export const updateCategoryBudget = (categoryId, budget) => ({ type: types.UPDATE_CATEGORY_BUDGET, categoryId, budget });
