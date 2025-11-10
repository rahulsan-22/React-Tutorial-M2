const Salary = ({salaryAmount,fun}) => {
  return (
    <div>
      <h1>Salary - {salaryAmount}</h1>
      <button onClick={fun}>Increment Salary</button>
    </div>
  )
}

export default Salary