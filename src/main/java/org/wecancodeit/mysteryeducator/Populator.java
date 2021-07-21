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

        cardRepository.save(new Card("Mars", astronaut, "http://localhost:8080/images/mars.jpg", "https://api.le-systeme-solaire.net/rest/bodies/mars"));
        cardRepository.save(new Card("Earth", astronaut, "http://localhost:8080/images/earth.jpg", "https://api.le-systeme-solaire.net/rest/bodies/earth"));
        cardRepository.save(new Card("Saturn", astronaut, "http://localhost:8080/images/saturn.jpg", "https://api.le-systeme-solaire.net/rest/bodies/saturn"));
        cardRepository.save(new Card("Venus", astronaut, "http://localhost:8080/images/venus.jpg", "https://api.le-systeme-solaire.net/rest/bodies/venus"));
        cardRepository.save(new Card("Jupiter", astronaut, "http://localhost:8080/images/jupiter.jpg", "https://api.le-systeme-solaire.net/rest/bodies/jupiter"));
        cardRepository.save(new Card("Uranus", astronaut, "http://localhost:8080/images/uranus.jpg", "https://api.le-systeme-solaire.net/rest/bodies/uranus"));
        cardRepository.save(new Card("Mercury", astronaut, "http://localhost:8080/images/mercury.jpg", "https://api.le-systeme-solaire.net/rest/bodies/mercury"));
        cardRepository.save(new Card("Neptune", astronaut, "http://localhost:8080/images/neptune.jpg", "https://api.le-systeme-solaire.net/rest/bodies/neptune"));
//        cardRepository.save(new Card("Mona Lisa", curator, "monalisa.jpg", "api info to fetch"));
    }
}
