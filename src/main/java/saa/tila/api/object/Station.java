package saa.tila.api.object;
import com.fasterxml.jackson.annotation.JsonView;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Station {
    @Id
    @JsonView(View.Main.class)
    private Long Id;
    @JsonView(View.Main.class)
    private String Name;
    @JsonView(View.Main.class)
    private double PositionX;
    @JsonView(View.Main.class)
    private double PositionY;

    @OneToMany(cascade=CascadeType.ALL,mappedBy="Id_Station")
    private List<Measurement> Measurements;
    public Station(Long id, String name, double positionX, double positionY, ArrayList<Measurement> measurements) {
        Id = id;
        Name = name;
        PositionX = positionX;
        PositionY = positionY;
        Measurements = measurements;}
    public Station(Long id, String name, double positionX, double positionY) {
        Id = id;
        Name = name;
        PositionX = positionX;
        PositionY = positionY;}
    public Station() {
        Id = null;
        Name = null;
        PositionX = 0;
        PositionY = 0;
        Measurements = null;}
    public Long getId() {
        return Id;
    }
    public void setId(Long id) {
        Id = id;
    }
    public String getName() {
        return Name;
    }
    public void setName(String name) {
        Name = name;
    }
    public double getPositionX() {
        return PositionX;
    }
    public void setPositionX(double positionX) {
        this.PositionX = positionX;
    }
    public double getPositionY() {
        return PositionY;
    }
    public void setPositionY(double positionY) {
        PositionY = positionY;
    }
    public List<Measurement> getMeasurements() {
        return Measurements;
    }
    public void setMeasurements(ArrayList<Measurement> measurements) {
        Measurements = measurements;
    }}