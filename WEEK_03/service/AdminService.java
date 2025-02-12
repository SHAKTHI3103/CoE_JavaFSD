package service;

import dao.AdminDao;
import model.Accountant;
import java.util.List;
import java.util.logging.Logger; // Importing Logger

public class AdminService {
    private final AdminDao adminDao = new AdminDao();
    private static final Logger logger = Logger.getLogger(AdminService.class.getName()); // Setting up logger

    public void addAccountant(String name, String email, String phone, String password) {
        boolean success = adminDao.addAccountant(name, email, phone, password);
        if (success) {
            logger.info("Accountant added: " + name); // Logging successful addition
            System.out.println("Accountant added successfully!!!!");
        } else {
            logger.warning("Failed to add accountant: " + name); // Logging failure
            System.out.println("Failed to add accountant.");
        }
    }

    public void viewAccountants() {
        List<Accountant> accountants = adminDao.viewAccountants();
        if (accountants.isEmpty()) {
            System.out.println("No accountants found.");
        } else {
            for (Accountant accountant : accountants) {
                System.out.println(accountant);
            }
        }
    }

    public void editAccountant(int id, String name, String email, String phone) {
        boolean success = adminDao.editAccountant(id, name, email, phone);
        if (success) {
            logger.info("Accountant updated: " + id); // Logging successful update
            System.out.println("Accountant updated successfully!!!!");
        } else {
            logger.warning("Accountant not found for update: " + id); // Logging failure
            System.out.println("Accountant not found.");
        }
    }

    public void deleteAccountant(int id) {
        boolean success = adminDao.deleteAccountant(id);
        if (success) {
            logger.info("Accountant deleted: " + id); // Logging successful deletion
            System.out.println("Accountant deleted successfully!!!!");
        } else {
            logger.warning("Accountant not found for deletion: " + id); // Logging failure
            System.out.println("Accountant not found.");
        }
    }
}
