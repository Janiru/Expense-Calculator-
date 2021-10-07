import React, { useEffect, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 236.7,
    date: new Date(2021, 2, 4),
  },
  {
    id: "e2",
    title: "Food",
    amount: 36.7,
    date: new Date(2021, 4, 14),
  },
  {
    id: "e3",
    title: "Mechanical Keyboard",
    amount: 120,
    date: new Date(2020, 10, 20),
  },
  {
    id: "e4",
    title: "RTX 3070",
    amount: 2450,
    date: new Date(2021, 6, 18),
  },    
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);
  const [theme,toggleTheme] = useState('DARK')
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  useEffect(()=>{
    if(theme==='LIGHT'){
      document.documentElement.setAttribute("data-theme", "dark");
      console.log('theme changed to light')
    }else{
      document.documentElement.setAttribute("data-theme", "light");
    }
  },[theme])

  return (
    <div>
      <input type="checkbox" id="toggleTheme" class="theme-toggle" onClick={()=>{toggleTheme(theme==='DARK'?'LIGHT':'DARK')}} />
      <label class="toggle-btn" for="toggleTheme">Toggle</label>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
