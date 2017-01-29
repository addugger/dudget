/* eslint-disable max-len */
import * as types from './types';

// budget-wide
export const addMonth = () => ({ type: types.ADD_MONTH });

export const save = () => ({ type: types.SAVE });

export const setViewedMonth = (monthId) => ({ type: types.SET_VIEWED_MONTH, monthId });

// month specific
export const addCategory = (groupName, catName, budget, rollover) => ({
  type: types.ADD_CATEGORY,
  groupName,
  catName,
  budget,
  rollover
});

export const updateActualIncome = (income) => ({ type: types.UPDATE_ACTUAL_INCOME, income });

export const setCategoryRollover = (categoryId, rollover) => ({ type: types.SET_CATEGORY_ROLLOVER, rollover });

export const setProjectedIncome = (income) => ({ type: types.SET_PROJECTED_INCOME, income });

export const updateCategorySpent = (categoryId, spent) => ({ type: types.UPDATE_CATEGORY_SPENT, categoryId, spent });

export const updateCategoryBudget = (categoryId, budget) => ({ type: types.UPDATE_CATEGORY_BUDGET, categoryId, budget });
