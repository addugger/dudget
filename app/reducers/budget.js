// import * as actionTypes from '../actions/types';
// import getMonthInitialState from './months';

// const getIntialState = () => ({
//   viewedMonth: 1,
//   nextMonthId: 1,
//   nextGroupId: 0,
//   nextCategoryId: 0,
//   months: getMonthInitialState(),
//   groups: {},
//   categories: {}
// });

// const budget = (state = getIntialState(), action) => {
//   switch (action.type) {
//     case actionTypes.SAVE: {
//       // TODO: persist current store. later realized this maybe doesn't go in a reducer so need
//       // to figure out where it goes
//       return state;
//     }
//     case actionTypes.UPDATE_CATEGORY_BUDGET: {
//       return { ...state,
//         categories: { ...state.categories,
//           [action.categoryId]: { ...state.categories[action.categoryId],
//             budget: action.budget
//           }
//         }
//       };
//     }
//     case actionTypes.UPDATE_CATEGORY_SPENT: {
//       return { ...state,
//         categories: { ...state.categories,
//           [action.categoryId]: { ...state.categories[action.categoryId],
//             spent: action.spent
//           }
//         }
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };

// /*
//   TODO: Consider following changes to allow refactoring to separate reducers:
//   # Move viewedMonth and nextMonthId inside month and always pass month id with action for month
//   updates
//   # Move nextCategoryId inside categories. Move nextGroupId inside groups (just to make things
//   look similar) and move groups inside categories.
//   # Or may just be able to refactor it passing reducers from top down (see example todoApp passing
//   to todos)
// */

// export default budget;
