import { expect } from 'chai';
import months from '../../app/reducers/months';
import { ADD_MONTH,
  SET_PROJECTED_INCOME,
  SET_VIEWED_MONTH,
  UPDATE_ACTUAL_INCOME } from '../../app/actions/types';

const date = new Date();
const initialMonths = {
  nextMonthId: 1,
  viewedMonth: 1,
  1: {
    month: date.toLocaleString('en-us', { month: 'long' }),
    year: date.getFullYear(),
    categories: [],
    projectedIncome: 0,
    actualIncome: 0
  }
};

describe('reducers', () => {
  describe('months', () => {
    it('should handle initial state', () => {
      const defaultMonths = months(undefined, {});
      expect(defaultMonths.nextMonthId).to.exist;
      expect(defaultMonths.nextMonthId).to.equal(initialMonths.nextMonthId);
      expect(defaultMonths.viewedMonth).to.exist;
      expect(defaultMonths.viewedMonth).to.equal(initialMonths.viewedMonth);
      expect(defaultMonths[1]).to.exist;
      expect(defaultMonths[1].month).to.exist;
      expect(defaultMonths[1].month).to.equal(initialMonths[1].month);
      expect(defaultMonths[1].year).to.exist;
      expect(defaultMonths[1].year).to.equal(initialMonths[1].year);
      expect(defaultMonths[1].categories).to.exist;
      expect(defaultMonths[1].categories).to.be.empty;
      expect(defaultMonths[1].projectedIncome).to.exist;
      expect(defaultMonths[1].projectedIncome).to.equal(initialMonths[1].projectedIncome);
      expect(defaultMonths[1].actualIncome).to.exist;
      expect(defaultMonths[1].actualIncome).to.equal(initialMonths[1].actualIncome);
    });

    it('should handle ADD_MONTH', () => {
      const newDate = new Date();
      newDate.setMonth(newDate.getMonth() + 1);
      initialMonths[1].projectedIncome = 1;
      const addedMonth = months(initialMonths, { type: ADD_MONTH, catIds: [4, 5, 6] });
      console.log(JSON.stringify(addedMonth));
      expect(addedMonth.nextMonthId).to.equal(2);
      expect(addedMonth.viewedMonth).to.equal(2);
      expect(addedMonth[2]).to.exist;
      expect(addedMonth[2].month).to.equal(newDate.toLocaleString('en-us', { month: 'long' }));
      expect(addedMonth[2].year).to.equal(newDate.getFullYear());
      expect(addedMonth[2].categories).to.have.members([4, 5, 6]);
      expect(addedMonth[2].projectedIncome).to.equal(1);
      expect(addedMonth[2].actualIncome).to.equal(0);
      expect(addedMonth[1]).to.deep.equal(initialMonths[1]);
    });
  });
});
