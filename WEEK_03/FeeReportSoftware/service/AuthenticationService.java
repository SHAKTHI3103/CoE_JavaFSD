package service;

import dao.AccountantDao;
import dao.AdminDao;
import java.security.MessageDigest; // Importing MessageDigest for hashing
import java.security.NoSuchAlgorithmException;

public class AuthenticationService {

    private final AdminDao adminDao = new AdminDao();
    private final AccountantDao accountantDao = new AccountantDao();

    private String hashPassword(String password) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] hashedBytes = md.digest(password.getBytes());
            StringBuilder sb = new StringBuilder();
            for (byte b : hashedBytes) {
                sb.append(String.format("%02x", b));
            }
            return sb.toString();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }

    public boolean authenticateAdmin(String username, String password) {
        String hashedPassword = hashPassword(password);
        return adminDao.authenticateAdmin(username, hashedPassword);
    }

    public boolean authenticateAccountant(String email, String password) {
        String hashedPassword = hashPassword(password);
        return accountantDao.authenticateAccountant(email, hashedPassword);
    }
}
