# Initial Notes
* The plan is to build a monthly budget desktop app using Electron.  As a  starting point, I'm using C. T. Lin's electron-react-boilerplate.
* First I'll make sure to set the project up with Travis and Appveyor as this is also a personal excercise in CI practices.
* Once I'm at this point, I'm going to create a branch to save off the sample project so I have something to go back to, and then begin work on my monthly budget app (Dudget is a combination of budget and my last name, Dugger).
* Be forewarned that my plan is really for this project to be a learning process that I can then use as a springboard to work on something more complex (a Magic the Gathering desktop app).  So the plan is to keep this project relatively simple (though I am writing it to replace the horrible Google Sheets spreadsheet my wife currently uses for our monthly budget).

# Dudget Requirements
Here's an initial, very rough list of requirements.
* Groups
    * Budgeted Amt: sum of group's category budgets
    * Spent Amt: sum of group's category spents
    * Remainder: Budgeted Amt - Spent Amt
    * Categories
        * Budgeted Amt
        * Spent Amt
        * Remainder: Budgeted Amt - Spent Amt
        * Rolls over?
        * If does rollover
            * Rollover Amt: Previous month Remainder + Current Remainder
* Overall/Summary
    * Projected Income
    * Actual Income
    * Budgeted Amt: sum of all category budgets
    * Spent Amt: sum of all category spents
    * Budget Remainder: Budgeted Amt - Spent Amt
    * Actual Remainder: Actual Income - Spent Amt
* Save/Update
* Create New Month
* Create new group
* Create new category