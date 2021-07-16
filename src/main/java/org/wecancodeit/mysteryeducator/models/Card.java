package org.wecancodeit.mysteryeducator.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Card {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @ManyToOne
    private Badge badge;
    private String image;
    private Boolean isCollected;
    private Collection<String> facts = new ArrayList<>();

    protected Card() {
    }

    public Card(String name, Badge badge, String image, String... facts) {
        this.name = name;
        this.badge = badge;
        this.image = image;
        isCollected = false;
        for (String fact : facts) {
            this.facts.add(fact);
        }
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Badge getBadge() {
        return badge;
    }

    public String getImage() {
        return image;
    }

    public Collection<String> getFacts() {
        return facts;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Card)) return false;
        Card badge = (Card) o;
        return id.equals(badge.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}



