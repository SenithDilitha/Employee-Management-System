package net.javaguides.EMS.exercise.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name="employees")
public class Employee implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name="fullname")
    private String fullName;

    @Column(name= "email")
    private String email;

    @Column(name="skills")
    private String skills;

    @JsonFormat(pattern = "yyy-MM-dd")
    @Column(name="dob",columnDefinition="DATETIME")
    private Date dob;

    public Employee(String fullName, String email, String skills,Date dob) {
        this.fullName = fullName;
        this.email = email;
        this.skills = skills;
        this.dob=dob;
    }

    public Employee() {
        super();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

      public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }
}
