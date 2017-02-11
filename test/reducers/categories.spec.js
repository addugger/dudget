import { expect } from 'chai';
import categories from '../../app/reducers/categories';
import { ADD_CATEGORY,
  SET_CATEGORY_BUDGET,
  SET_CATEGORY_ROLLOVER,
  SET_CATEGORY_SPENT } from '../../app/actions/types';

let initialCategories;

describe('reducers', () => {
  beforeEach(() => {
    initialCategories = {
      nextCategoryId: 0,
      groups: {
        nextGroupId: 0
      }
    };
  });

  describe('categories', () => {
    it('should handle initial state', () => {
      const defaultCategories = categories(undefined, {});
      expect(defaultCategories).to.deep.equal(initialCategories);
    });
    describe('ADD_CATEGORY', () => {
      it('should add category with new group', () => {
        const addedCategory = categories(initialCategories, {
          type: ADD_CATEGORY,
          groupName: 'Groupie',
          catName: 'Catniss',
          budget: 1.2,
          rollover: true
        });
        const compareCategories = {
          nextCategoryId: 1,
          groups: { nextGroupId: 1,
            1: { name: 'Groupie' }
          },
          1: { groupId: 1,
            name: 'Catniss',
            budget: 1.2,
            spent: 0,
            rollover: true
          }
        };
        expect(addedCategory).to.deep.equal(compareCategories);
      });

      it('should add category with existing group', () => {
        initialCategories.groups = { nextGroupId: 1, 1: { name: 'Groupie' } };
        const addedCategory = categories(initialCategories, {
          type: ADD_CATEGORY,
          groupId: 1,
          catName: 'Catniss',
          budget: 1.2,
          rollover: true
        });
        const compareCategories = {
          nextCategoryId: 1,
          groups: { nextGroupId: 1,
            1: { name: 'Groupie' }
          },
          1: { groupId: 1,
            name: 'Catniss',
            budget: 1.2,
            spent: 0,
            rollover: true
          }
        };
        expect(addedCategory).to.deep.equal(compareCategories);
      });
    });

    it('should handle SET_CATEGORY_BUDGET', () => {
      const addedCategory = categories(initialCategories, {
        type: ADD_CATEGORY,
        groupName: 'Groupie',
        catName: 'Catniss',
        budget: 1.2,
        rollover: true
      });
      const budgetSetCategory = categories(addedCategory,
        { type: SET_CATEGORY_BUDGET, categoryId: 1, budget: 1.5 }
      );
      addedCategory[1].budget = 1.5;
      expect(budgetSetCategory).to.deep.equal(addedCategory);
    });

    it('should handle SET_CATEGORY_ROLLOVER', () => {
      const addedCategory = categories(initialCategories, {
        type: ADD_CATEGORY,
        groupName: 'Groupie',
        catName: 'Catniss',
        budget: 1.2,
        rollover: true
      });
      const rolloverSetCategory = categories(addedCategory,
        { type: SET_CATEGORY_ROLLOVER, categoryId: 1, rollover: false }
      );
      addedCategory[1].rollover = false;
      expect(rolloverSetCategory).to.deep.equal(addedCategory);
    });

    it('should handle SET_CATEGORY_SPENT', () => {
      const addedCategory = categories(initialCategories, {
        type: ADD_CATEGORY,
        groupName: 'Groupie',
        catName: 'Catniss',
        budget: 1.2,
        rollover: true
      });
      const spentSetCategory = categories(addedCategory,
        { type: SET_CATEGORY_SPENT, categoryId: 1, spent: 3.5 }
      );
      addedCategory[1].spent = 3.5;
      expect(spentSetCategory).to.deep.equal(addedCategory);
    });
  });
});
