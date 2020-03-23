package net.javaguides.EMS.exercise.controller;

import net.javaguides.EMS.exercise.exception.ResourceNotFoundException;
import net.javaguides.EMS.exercise.model.Employee;
import net.javaguides.EMS.exercise.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    //get employees
    @GetMapping("employees")
    public List<Employee> listAllEmployee(){
        return employeeService.getAllEmployees();
    }

    //get employee by id
    @GetMapping("employees/{id}")
    public ResponseEntity<Employee> employeeById(@PathVariable(value="id") Long employeeId) throws ResourceNotFoundException {
        return employeeService.getEmployeeById(employeeId);
    }

    //save employee
    @PostMapping("employee")
    public String saveEmployee(@RequestBody Employee employee){
        employeeService.createEmployee(employee);
        return employee.getFullName() +" is added to the server successfully";
    }
    //update employee
    @PutMapping("employees/{id}")
    public ResponseEntity<Employee> changeEmployee(@PathVariable(value="id") Long employeeId, @Valid @RequestBody Employee employeeDetails) throws ResourceNotFoundException{
        return employeeService.updateEmployee(employeeId,employeeDetails);
    }

    //delete employee
    @DeleteMapping("employees/{id}")
    public Map<String,Boolean> removeEmployee(@PathVariable(value="id") Long employeeId) throws ResourceNotFoundException {
        return employeeService.deleteEmployee(employeeId);
    }

}
