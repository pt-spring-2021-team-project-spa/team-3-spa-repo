package org.wecancodeit.mysteryeducator.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.mysteryeducator.models.Badge;
import org.wecancodeit.mysteryeducator.models.Card;

import java.util.Collection;

@Repository
public interface CardRepository extends CrudRepository<Card, Long> {
    public Collection<Card> findByBadge(Badge badge);
}
