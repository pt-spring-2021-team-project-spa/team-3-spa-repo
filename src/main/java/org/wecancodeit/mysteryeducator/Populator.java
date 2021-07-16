package org.wecancodeit.mysteryeducator;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.mysteryeducator.models.Badge;
import org.wecancodeit.mysteryeducator.models.Card;
import org.wecancodeit.mysteryeducator.repositories.BadgeRepository;
import org.wecancodeit.mysteryeducator.repositories.CardRepository;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {
    @Resource
    private BadgeRepository badgeRepository;

    @Resource
    private CardRepository cardRepository;

    @Override
    public void run(String... args) throws Exception {
        Badge astronaut = new Badge("Astronaut", "astronaut.jpg");
        Badge historian = new Badge("Historian", "historian.jpg");
        Badge curator = new Badge("Curator", "curator.jpg");

        badgeRepository.save(astronaut);
        badgeRepository.save(historian);
        badgeRepository.save(curator);

        cardRepository.save(new Card("Mars", astronaut, "mars.jpg", "api info to fetch"));
        cardRepository.save(new Card("Venus", astronaut, "venus.jpg", "api infor to fetch"));
        cardRepository.save(new Card("Mona Lisa", curator, "monalisa.jpg", "api info to fetch"));



    }
}
