export default function createReportObject(employeesList) {
  const allEmployees = {};

  // Assuming employeesList is an object with department names as keys
  for (const department in employeesList) {
    allEmployees[department] = employeesList[department];
  }

  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(allEmployees).length;
    },
  };
}
