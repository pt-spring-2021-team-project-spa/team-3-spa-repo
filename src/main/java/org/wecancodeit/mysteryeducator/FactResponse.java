package org.wecancodeit.mysteryeducator;

public class FactResponse {

    private long id;
    private String factSubject;
    private String factContent;

    public long getId() {
        return id;
    }

    public String getFactSubject() {
        return factSubject;
    }

    public String getFactContent() {
        return factContent;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setFactSubject(String factSubject) {
        this.factSubject = factSubject;
    }

    public void setFactContent(String factContent) {
        this.factContent = factContent;
    }

    public FactResponse(long id, String factSubject, String factContent) {
        this.id = id;
        this.factSubject = factSubject;
        this.factContent = factContent;
    }
}
