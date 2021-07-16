package org.wecancodeit.mysteryeducator.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Card {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String card;
    private String image;
    private ArrayList<String> facts = new Collection;

    protected Card() {
    }

    public Card(String name, String card, String image, String... facts) {
        this.name = name;
        this.card = card;
        this.image = image;
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

    public String getCard() {
        return card;
    }

    public String getImage() {
        return image;
    }

    public ArrayList<String> getFacts() {
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



