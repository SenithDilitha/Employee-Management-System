package net.javaguides.EMS.exercise.service;

import net.javaguides.EMS.exercise.exception.ResourceNotFoundException;
import net.javaguides.EMS.exercise.model.Employee;
import net.javaguides.EMS.exercise.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;


    // save a new employee
    public Employee createEmployee(Employee employee){
        return this.employeeRepository.save(employee);
    }

    //get employees
    public List<Employee> getAllEmployees(){
        return this.employeeRepository.findAll();
    }

    //get an employee by id
    public ResponseEntity<Employee> getEmployeeById(Long employeeId)
            throws ResourceNotFoundException {
        Employee employee=employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this ID :: "+employeeId));
        return ResponseEntity.ok().body(employee);
    }

    //update an employee
    public ResponseEntity<Employee> updateEmployee( Long employeeId,
                                                    Employee employeeDetails) throws ResourceNotFoundException {
        Employee employee=employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this ID :: "+employeeId));
        employee.setEmail(employeeDetails.getEmail());
        employee.setDob(employeeDetails.getDob());
        employee.setFullName((employeeDetails.getFullName()));
        employee.setSkills(employeeDetails.getSkills());

        return ResponseEntity.ok(this.employeeRepository.save(employee));
    }

    //delete an employee
    public Map<String,Boolean> deleteEmployee(Long employeeId) throws ResourceNotFoundException {
        Employee employee=employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this ID :: "+employeeId));

        employeeRepository.delete(employee);

        Map<String,Boolean> response=new HashMap<>();
        response.put("deleted",Boolean.TRUE);

        return response;
    }


}
