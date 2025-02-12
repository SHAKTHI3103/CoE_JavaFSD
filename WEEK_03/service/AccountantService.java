package service;

import dao.AccountantDao;
import model.Student;
import java.util.List;
import java.util.logging.Logger; // Importing Logger

public class AccountantService {
    private final AccountantDao accountantDao = new AccountantDao();
    private static final Logger logger = Logger.getLogger(AccountantService.class.getName()); // Setting up logger

    public void addStudent(String name, String email, String course, double fee, double paid, double due, String address, String phone) {
        boolean success = accountantDao.addStudent(name, email, course, fee, paid, due, address, phone);
        if (success) {
            logger.info("Student added: " + name); // Logging successful addition
            System.out.println("Student added successfully!!!!");
        } else {
            logger.warning("Failed to add student: " + name); // Logging failure
            System.out.println("Failed to add student.");
        }
    }

    public void viewStudents() {
        List<Student> students = accountantDao.viewStudents();
        if (students.isEmpty()) {
            System.out.println("No students found.");
        } else {
            for (Student student : students) {
                System.out.println(student);
            }
        }
    }

    public void editStudent(int id, String name, String email) {
        boolean success = accountantDao.editStudent(id, name, email);
        if (success) {
            logger.info("Student updated: " + id); // Logging successful update
            System.out.println("Student updated successfully!!!!");
        } else {
            logger.warning("Student not found for update: " + id); // Logging failure
            System.out.println("Student not found.");
        }
    }

    public void deleteStudent(int id) {
        boolean success = accountantDao.deleteStudent(id);
        if (success) {
            logger.info("Student deleted: " + id); // Logging successful deletion
            System.out.println("Student deleted successfully!!!!");
        } else {
            logger.warning("Student not found for deletion: " + id); // Logging failure
            System.out.println("Student not found.");
        }
    }
}
