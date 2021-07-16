package org.wecancodeit.mysteryeducator.models;



import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Badge {
    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @OneToMany(mappedBy = "badge")
    @JsonIgnore
    private Collection<Card> cards;

    private String image;
    private Boolean isComplete;

    protected Badge() {
    }

    public Badge(String name, String image) {
        this.name = name;
        this.image = image;
        isComplete = false;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Collection<Card> getCards() {
        return cards;
    }

    public String getImage() {
        return image;
    }

    public Boolean isComplete() {
        return isComplete;
    }

    public void isCompete(Boolean bool) {
        isComplete = bool;
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
        return Objects.hash(id);
    }
}



