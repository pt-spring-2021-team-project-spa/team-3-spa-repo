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
        Badge renoir = new Badge("Renoir", "renoir.jpg");

        badgeRepository.save(astronaut);
        badgeRepository.save(renoir);

        cardRepository.save(new Card(
                "Mars",
                astronaut,
                "http://localhost:8080/images/mars.jpg",
                "https://api.le-systeme-solaire.net/rest/bodies/mars"));

        cardRepository.save(new Card(
                "Earth",
                astronaut,
                "http://localhost:8080/images/earth.jpg",
                "https://api.le-systeme-solaire.net/rest/bodies/earth"));

        cardRepository.save(new Card(
                "Saturn",
                astronaut,
                "http://localhost:8080/images/saturn.jpg",
                "https://api.le-systeme-solaire.net/rest/bodies/saturn"));

        cardRepository.save(new Card(
                "Venus",
                astronaut,
                "http://localhost:8080/images/venus.jpg",
                "https://api.le-systeme-solaire.net/rest/bodies/venus"));

        cardRepository.save(new Card(
                "Jupiter",
                astronaut,
                "http://localhost:8080/images/jupiter.jpg",
                "https://api.le-systeme-solaire.net/rest/bodies/jupiter"));

        cardRepository.save(new Card(
                "Uranus",
                astronaut,
                "http://localhost:8080/images/uranus.jpg",
                "https://api.le-systeme-solaire.net/rest/bodies/uranus"));

        cardRepository.save(new Card(
                "Mercury",
                astronaut,
                "http://localhost:8080/images/mercury.jpg",
                "https://api.le-systeme-solaire.net/rest/bodies/mercury"));

        cardRepository.save(new Card(
                "Neptune",
                astronaut,
                "http://localhost:8080/images/neptune.jpg",
                "https://api.le-systeme-solaire.net/rest/bodies/neptune"));

//        cardRepository.save(new Card(
//                "Reclining Nude",
//                renoir,
//                "https://images.metmuseum.org/CRDImages/ep/original/DP-14976-001.jpg",
//                "https://collectionapi.metmuseum.org/public/collection/v1/objects/438013"));

        cardRepository.save(new Card(
                "Still Life with Peaches",
                renoir,
                "https://images.metmuseum.org/CRDImages/ep/original/DT1140.jpg",
                "https://collectionapi.metmuseum.org/public/collection/v1/objects/438012"));

        cardRepository.save(new Card(
                "Sea and Cliffs",
                renoir,
                "https://images.metmuseum.org/CRDImages/rl/original/DT3130.jpg",
                "https://collectionapi.metmuseum.org/public/collection/v1/objects/459111"));

        cardRepository.save(new Card(
                "By the Seashore",
                renoir,
                "https://images.metmuseum.org/CRDImages/ep/original/DP-14936-039.jpg",
                "https://collectionapi.metmuseum.org/public/collection/v1/objects/437430"));

        cardRepository.save(new Card(
                "Tilla Durieux",
                renoir,
                "https://images.metmuseum.org/CRDImages/ep/web-large/DT1487.jpg",
                "https://collectionapi.metmuseum.org/public/collection/v1/objects/437432"));

        cardRepository.save(new Card(
                "Eugene Murer",
                renoir,
                "https://images.metmuseum.org/CRDImages/ep/web-large/DT1882.jpg",
                "https://collectionapi.metmuseum.org/public/collection/v1/objects/438011"));

        cardRepository.save(new Card(
                "Two Young Girls at the Piano",
                renoir,
                "https://images.metmuseum.org/CRDImages/rl/web-large/DT3131.jpg",
                "https://collectionapi.metmuseum.org/public/collection/v1/objects/459112"));
    }
}
