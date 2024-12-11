package com.example.Craspedia.appuser;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class AppUserService {

    private final AppUserRepository appUserRepository;

    @Autowired
    public AppUserService(AppUserRepository appUserRepository) {
        this.appUserRepository = appUserRepository;
    }

    public List<AppUser> getUsers() {
        return appUserRepository.findAll();
    }

    public void addNewAppUser(AppUser appUser) {
        Optional<AppUser> appUserOptional= appUserRepository.findAppUserByEmail(appUser.getEmail());
        if (appUserOptional.isPresent()) {
            throw new IllegalStateException("Email Taken.");
        } // To add more complex checks later
        appUserRepository.save(appUser);
    }

    public void deleteAppUser(Long id) {
        boolean exists = appUserRepository.existsById(id);
        if (!exists) {
            throw new IllegalStateException("App User not found.");
        }
        appUserRepository.deleteById(id);
    }

    @Transactional
    public void updateAppUserPassword(Long id, String newPassword) {
        AppUser appUser = appUserRepository.findById(id).orElseThrow(() -> new IllegalStateException("App User not found."));
        if (newPassword != null && newPassword.length() > 0 && !Objects.equals(appUser.getPassword(), newPassword)) {
            appUser.setPassword(newPassword);
        }
    }
}
