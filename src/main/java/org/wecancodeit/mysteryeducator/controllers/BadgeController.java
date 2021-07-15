package org.wecancodeit.mysteryeducator.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.mysteryeducator.models.Badge;
import org.wecancodeit.mysteryeducator.repositories.BadgeRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
@CrossOrigin
public class BadgeController {
   @Resource
   private BadgeRepository badgeRepository;

   @GetMapping("/api/badges")
   public Collection<Badge> getAllBadges() {
      return (Collection<Badge>) badgeRepository.findAll();
   }

   @GetMapping("/api/badges/{badgeId}")
   public Badge getBadgeById(@PathVariable long badgeId) {
      return badgeRepository.findById(badgeId).get();
   }


}
