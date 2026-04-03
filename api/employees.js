import { Router } from "express";
import { addEmployee, getEmployeeById } from "#db/employees";

const employeeRouter = Router();

employeeRouter.post("/", (request, response, next) => {
  if (!request.body || Object.keys(request.body).length === 0) {
    return response.status(400).send("Request must have a body and a name.");
  }

  const { name } = request.body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    return response.status(400).send("A valid employee name is required.");
  }

  try {
    const newId = addEmployee(name);

    const newEmployee = getEmployeeById(newId);

    return response.status(201).json(newEmployee);
  } catch (error) {
    next(error);
  }
});

export default employeeRouter;
