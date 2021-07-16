package org.wecancodeit.mysteryeducator.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.wecancodeit.mysteryeducator.models.Badge;

import java.util.Optional;

@Repository
public interface BadgeRepository extends CrudRepository<Badge, Long> {
//    Optional<Badge> findById(Long id);

}
