import { expect } from 'chai';
import * as creators from '../../app/actions/creators';
import * as types from '../../app/actions/types';

describe('actions', () => {
  it('addMonth should create add month action', () => {
    expect(creators.addMonth([2, 3, 4])).to.deep.equal(
      { type: types.ADD_MONTH, catIds: [2, 3, 4] }
    );
  });

  it('setProjectedIncome should create set projected income action', () => {
    expect(creators.setProjectedIncome(1.5)).to.deep.equal(
      { type: types.SET_PROJECTED_INCOME, income: 1.5 }
    );
  });

  it('setViewedMonth should create set viewed month action', () => {
    expect(creators.setViewedMonth(1)).to.deep.equal(
      { type: types.SET_VIEWED_MONTH, monthId: 1 }
    );
  });

  it('updateActualIncome should create update actual income action', () => {
    expect(creators.updateActualIncome(1.75)).to.deep.equal(
      { type: types.UPDATE_ACTUAL_INCOME, income: 1.75 }
    );
  });

  describe('addCategory', () => {
    it('with groupName should create add category for new group', () => {
      expect(creators.addCategory(
        { groupName: 'Grouper', catName: 'Catdog', budget: 5.90, rollover: true })).to.deep.equal(
          { type: types.ADD_CATEGORY, groupName: 'Grouper', groupId: -1, catName: 'Catdog', budget: 5.90, rollover: true }
      );
    });

    it('with groupId should create add category action for existing group', () => {
      expect(creators.addCategory(
        { groupId: 2, catName: 'Catdog', budget: 5.90, rollover: true })).to.deep.equal(
          { type: types.ADD_CATEGORY, groupName: '', groupId: 2, catName: 'Catdog', budget: 5.90, rollover: true }
      );
    });

    it('with no rollover should create add category action with rollover of false', () => {
      expect(creators.addCategory(
        { groupId: 2, catName: 'Catdog', budget: 5.90 })).to.deep.equal(
          { type: types.ADD_CATEGORY, groupName: '', groupId: 2, catName: 'Catdog', budget: 5.90, rollover: false }
      );
    });
  });

  it('setCategoryBudget should create set category budget action', () => {
    expect(creators.setCategoryBudget(1, 3.75)).to.deep.equal(
      { type: types.SET_CATEGORY_BUDGET, categoryId: 1, budget: 3.75 }
    );
  });

  it('setCategoryRollover should create set category rollover action', () => {
    expect(creators.setCategoryRollover(1, true)).to.deep.equal(
      { type: types.SET_CATEGORY_ROLLOVER, categoryId: 1, rollover: true }
    );
  });

  it('setCategorySpent should create set category spent action', () => {
    expect(creators.setCategorySpent(1, 2.39)).to.deep.equal(
      { type: types.SET_CATEGORY_SPENT, categoryId: 1, spent: 2.39 }
    );
  });
});
