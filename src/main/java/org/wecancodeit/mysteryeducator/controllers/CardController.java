package org.wecancodeit.mysteryeducator.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.mysteryeducator.models.Card;
import org.wecancodeit.mysteryeducator.repositories.BadgeRepository;
import org.wecancodeit.mysteryeducator.repositories.CardRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;
import java.util.Random;

@RestController
public class CardController {
   @Resource
   private CardRepository cardRepository;

   @Resource
   private BadgeRepository badgeRepository;

   @GetMapping("/api/cards")
   public Collection<Card> getAllCards() {
      return (Collection<Card>) cardRepository.findAll();
   }

   @GetMapping("/api/cards/{cardId}")
   public Card getCard(@PathVariable Long cardId) {
      return cardRepository.findById(cardId).get();
   }

   @GetMapping("api/cards/random")
   public Card getRandomCard() {
      Collection<Card> cards = (Collection<Card>) cardRepository.findAll();
      Card card = getRandom(cards).get();
      card.isCollected(true);
      if (cards.stream().allMatch(x -> x.getIsCollected() == true)) {
         card.getBadge().isComplete();
      }
         badgeRepository.save(card.getBadge());
      return card;
   }

   public static <E> Optional<E> getRandom (Collection<E> e) {
      return e.stream()
              .skip(new Random().nextInt(e.size()))
              .findFirst();
   }
}
