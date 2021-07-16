package org.wecancodeit.mysteryeducator.models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Card {
    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @ManyToOne
    @JsonIgnore
    private Badge badge;

    private String image;
    private Boolean isCollected;
//    @ElementCollection
//    private Collection<String> facts;
    private String facts;
    protected Card() {
    }

    public Card(String name, Badge badge, String image, String facts) {
        this.name = name;
        this.badge = badge;
        this.image = image;
        isCollected = false;
        this.facts = facts;
//        this.facts.addAll(Arrays.asList(facts));
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

    public String getFacts() {
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



