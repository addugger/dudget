// budget-wide
export const ADD_MONTH = 'ADD_MONTH';
export const SET_VIEWED_MONTH = 'SET_VIEWED_MONTH';
export const SET_PROJECTED_INCOME = 'SET_PROJECTED_INCOME';
export const SAVE = 'SAVE';
// month specific
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const UPDATE_ACTUAL_INCOME = 'UPDATE_ACTUAL_INCOME';
export const UPDATE_CATEGORY_SPENT = 'UPDATE_CATEGORY_SPENT';
export const UPDATE_CATEGORY_BUDGET = 'UPDATE_CATEGORY_BUDGET';
export const SET_CATEGORY_ROLLOVER = 'SET_CATEGORY_ROLLOVER';

// next month index
let nextMonthIndex = 0;

// budget-wide
export function addMonth() {
  nextMonthIndex += 1;
  return { type: ADD_MONTH, index: nextMonthIndex };
}

export function setViewedMonth(index) {
  return { type: SET_VIEWED_MONTH, index };
}

export function setProjectedIncome(income) {
  return { type: SET_PROJECTED_INCOME, income };
}

// month specific
export function addCategory(groupName, catName, budget, rollover) {
  return {
    type: ADD_CATEGORY,
    groupName,
    catName,
    budget,
    rollover
  };
}

export function updateActualIncome(income) {
  return { type: UPDATE_ACTUAL_INCOME, income };
}

export function updateCategorySpent(spent) {
  return { type: UPDATE_CATEGORY_SPENT, spent };
}

export function updateCategoryBudget(budget) {
  return { type: UPDATE_CATEGORY_BUDGET, budget };
}

export function setCategoryRollover(rollover) {
  return { type: SET_CATEGORY_ROLLOVER, rollover };
}
