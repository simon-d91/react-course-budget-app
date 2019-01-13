// get total amount for expenses
export default (expenses) => expenses.reduce((total, expense) => total + expense.amount, 0);