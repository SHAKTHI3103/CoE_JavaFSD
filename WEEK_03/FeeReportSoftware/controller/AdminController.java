package controller;

import java.util.Scanner;

import service.AdminService;
import service.AuthenticationService;

public class AdminController {
    private final AuthenticationService authenticationService = new AuthenticationService();
    private final AdminService adminService = new AdminService();

    public void adminLogin(Scanner scanner) {
        System.out.print("Enter Username: ");
        String username = scanner.nextLine();
        System.out.print("Enter Password: ");
        String password = scanner.nextLine();
        if (authenticationService.authenticateAdmin(username, password)) {
            System.out.println("Admin login successful!!!!");
            manageAccountants(scanner);
        } else {
            System.out.println("Invalid credentials.");
        }
    }

    public void manageAccountants(Scanner scanner) {
        while (true) {
            System.out.println("1. Add Accountant");
            System.out.println("2. View Accountants");
            System.out.println("3. Edit Accountant");
            System.out.println("4. Delete Accountant");
            System.out.println("5. Logout");
            System.out.print("Enter choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine();
            switch (choice) {
                case 1: {
                    System.out.print("Enter Name: ");
                    String name = scanner.nextLine();
                    System.out.print("Enter Email: ");
                    String email = scanner.nextLine();
                    System.out.print("Enter Phone: ");
                    String phone = scanner.nextLine();
                    System.out.print("Enter Password: ");
                    String password = scanner.nextLine();

                    adminService.addAccountant(name, email, phone, password);
                } break;
                case 2: {
                    adminService.viewAccountants();
                } break;
                case 3: {
                    System.out.print("Enter Accountant ID to edit: ");
                    int id = scanner.nextInt();
                    scanner.nextLine();
                    System.out.print("Enter New Name: ");
                    String newName = scanner.nextLine();
                    System.out.print("Enter New Email: ");
                    String newEmail = scanner.nextLine();
                    System.out.print("Enter New Phone: ");
                    String newPhone = scanner.nextLine();
                    adminService.editAccountant(id, newName, newEmail, newPhone);
                } break;
                case 4: {
                    System.out.print("Enter Accountant ID to delete: ");
                    int id = scanner.nextInt();
                    scanner.nextLine();
                    adminService.deleteAccountant(id);
                } break;
                case 5:
                    return;
                default:
                    System.out.println("Invalid choice, Try again...");
            }
        }
    }
}
