import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const expenses = [
    {
      id: 1,
      description: "aaa",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 2,
      description: "bbb",
      amount: 11,
      category: "Utilities",
    },
    {
      id: 3,
      description: "ccc",
      amount: 12,
      category: "Utilities",
    },
    {
      id: 4,
      description: "ddd",
      amount: 13,
      category: "Utilities",
    },
  ];

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => console.log("delete", id)}
      />
    </div>
  );
}

export default App;
