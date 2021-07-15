package org.wecancodeit.mysteryeducator;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.mysteryeducator.models.Badge;
import org.wecancodeit.mysteryeducator.repositories.BadgeRepository;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {
    @Resource
    private BadgeRepository badgeRepository;


    @Override
    public void run(String... args) throws Exception {
        Badge badge1 = new Badge("Mars", "MarsCard", "mars.jpg");
        Badge badge2 = new Badge("Venus", "VenusCard", "venus.jpg");
        Badge badge3 = new Badge("Mona Lisa", "MonaLisaCard", "monalisa.jpg");

        badgeRepository.save(badge1);
        badgeRepository.save(badge2);
        badgeRepository.save(badge3);
    }
}
