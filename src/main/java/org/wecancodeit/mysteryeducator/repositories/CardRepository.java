package org.wecancodeit.mysteryeducator.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.mysteryeducator.models.Card;

@Repository
public interface CardRepository extends CrudRepository<Card, Long> {
}
