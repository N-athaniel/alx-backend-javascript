export default function createEmployeesObject(departmentName, employees) {
  const fullBudget = {
    [departmentName]: employees,
  };

  return fullBudget;
}
