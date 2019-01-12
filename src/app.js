import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

store.dispatch(
  addExpense({ description: "Water Bill", amount: 4500, createdAt: -1000 })
);
store.dispatch(
  addExpense({ description: "Gas Bill", amount: 1100, createdAt: 1000 })
);
store.dispatch(
  addExpense({ description: "Rent", amount: 22000, createdAt: 300 })
);

const state = store.getState();
const visibileExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibileExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
