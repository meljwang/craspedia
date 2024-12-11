package com.example.Craspedia.appuser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/appuser")
public class AppUserController {
    private final AppUserService appUserService;

    @Autowired
    public AppUserController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @GetMapping
    public List<AppUser> getUsers() {
        return appUserService.getUsers();
    }

    @PostMapping
    public void registerNewUser(@RequestBody AppUser appUser) {
        appUserService.addNewAppUser(appUser);
    }

    @PutMapping(path = "{appUserId}")
    public void updateAppUserPassword(@PathVariable("appUserId") Long id, @RequestParam(required = true) String newPassword) {
        appUserService.updateAppUserPassword(id, newPassword);
    }

    @DeleteMapping(path = "{appUserId}")
    public void deleteAppUser(@PathVariable("appUserId") Long id) {
        appUserService.deleteAppUser(id);
    }


}
