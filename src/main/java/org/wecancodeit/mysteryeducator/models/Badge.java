package org.wecancodeit.mysteryeducator.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Badge {
    @Id
    @GeneratedValue
    private long id;
    private String name;
    private String card;
    private String image;

    protected Badge () {}

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
    public String toString() {
        return "Badge{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", card='" + card + '\'' +
                ", image='" + image + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Badge)) return false;

        Badge badge = (Badge) o;

        return id == badge.id;
    }

    @Override
    public int hashCode() {
        return (int) (id ^ (id >>> 32));
    }
}
