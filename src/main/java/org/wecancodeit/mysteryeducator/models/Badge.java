package org.wecancodeit.mysteryeducator.models;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

public class Badge {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String card;
    private String image;

    public Badge () {}

    public Badge(String name, String card, String image) {
        this.name = name;
        this.card = card;
        this.image = image;
    }

    public Long getId() {
        return this.id;
    }

    public String name() {
        return this.name;
    }

    public String card() {
        return this.card;
    }

    public String image() {
        return this.image;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Badge)) return false;

        Badge badge = (Badge) o;

        return id.equals(badge.id);
    }

    @Override
    public int hashCode() {
        return id.hashCode();
    }
}
