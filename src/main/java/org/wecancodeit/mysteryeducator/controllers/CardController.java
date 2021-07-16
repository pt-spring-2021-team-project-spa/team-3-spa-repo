package org.wecancodeit.mysteryeducator.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.mysteryeducator.models.Card;
import org.wecancodeit.mysteryeducator.repositories.CardRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
public class CardController {
   @Resource
   private CardRepository cardRepository;

   @GetMapping("/api/cards")
   public Collection<Card> getAllCards() {
      return (Collection<Card>) cardRepository.findAll();
   }

   @GetMapping("/api/cards/{cardId}")
   public Card getCard(@PathVariable Long cardId) {
      return cardRepository.findById(cardId).get();
   }
}
