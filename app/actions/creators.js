import * as types from './types';

// budget-wide
export function addMonth() {
  return { type: types.ADD_MONTH };
}

export function setViewedMonth(index) {
  return { type: types.SET_VIEWED_MONTH, index };
}

export function setProjectedIncome(income) {
  return { type: types.SET_PROJECTED_INCOME, income };
}

// month specific
export function addCategory(groupName, catName, budget, rollover) {
  return {
    type: types.ADD_CATEGORY,
    groupName,
    catName,
    budget,
    rollover
  };
}

export function updateActualIncome(income) {
  return { type: types.UPDATE_ACTUAL_INCOME, income };
}

export function updateCategorySpent(spent) {
  return { type: types.UPDATE_CATEGORY_SPENT, spent };
}

export function updateCategoryBudget(budget) {
  return { type: types.UPDATE_CATEGORY_BUDGET, budget };
}

export function setCategoryRollover(rollover) {
  return { type: types.SET_CATEGORY_ROLLOVER, rollover };
}
