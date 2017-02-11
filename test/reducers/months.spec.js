import { expect } from 'chai';
import months from '../../app/reducers/months';
import { ADD_MONTH,
  SET_PROJECTED_INCOME,
  SET_VIEWED_MONTH,
  UPDATE_ACTUAL_INCOME } from '../../app/actions/types';

let date;
let initialMonths;

describe('reducers', () => {
  beforeEach(() => {
    date = new Date();
    initialMonths = {
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
  });

  describe('months', () => {
    it('should handle initial state', () => {
      const defaultMonths = months(undefined, {});
      expect(defaultMonths.nextMonthId).to.exist;
      expect(defaultMonths.nextMonthId).to.equal(initialMonths.nextMonthId);
      expect(defaultMonths.viewedMonth).to.exist;
      expect(defaultMonths.viewedMonth).to.equal(initialMonths.viewedMonth);
      expect(defaultMonths[1]).to.exist;
      expect(defaultMonths[1]).to.deep.equal(initialMonths[1]);
    });

    it('should handle ADD_MONTH', () => {
      date.setMonth(date.getMonth() + 1);
      initialMonths[1].projectedIncome = 1;
      const addedMonth = months(initialMonths, { type: ADD_MONTH, catIds: [4, 5, 6] });
      expect(addedMonth.nextMonthId).to.equal(2);
      expect(addedMonth.viewedMonth).to.equal(2);
      expect(addedMonth[2]).to.exist;
      expect(addedMonth[2].month).to.equal(date.toLocaleString('en-us', { month: 'long' }));
      expect(addedMonth[2].year).to.equal(date.getFullYear());
      expect(addedMonth[2].categories).to.have.members([4, 5, 6]);
      expect(addedMonth[2].projectedIncome).to.equal(1);
      expect(addedMonth[2].actualIncome).to.equal(0);
      expect(addedMonth[1]).to.deep.equal(initialMonths[1]);
    });

    it('should handle SET_PROJECTED_INCOME', () => {
      const projectedMonth = months(initialMonths, { type: SET_PROJECTED_INCOME, income: 1 });
      initialMonths[1].projectedIncome = 1;
      expect(initialMonths).to.deep.equal(projectedMonth);
    });

    it('should handle SET_VIEWED_MONTH', () => {
      const addedMonth = months(initialMonths, { type: ADD_MONTH, catIds: [] });
      expect(addedMonth.viewedMonth).to.equal(2);
      const newViewedMonth = months(addedMonth, { type: SET_VIEWED_MONTH, monthId: 1 });
      addedMonth.viewedMonth = 1;
      expect(addedMonth).to.deep.equal(newViewedMonth);
    });

    it('should handle UPDATE_ACTUAL_INCOME', () => {
      const incomeUpdateMonth = months(initialMonths, { type: UPDATE_ACTUAL_INCOME, income: 1 });
      initialMonths[1].actualIncome = 1;
      expect(initialMonths).to.deep.equal(incomeUpdateMonth);
    });
  });
});
