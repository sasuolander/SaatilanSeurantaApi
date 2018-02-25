package saa.tila.api.object;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Measurement {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;
    private Long Id_Station;
    private Date Time;
    private double Value;

    public Measurement(Date time, double value) {
        Time = time;
        Value = value;
    }

    public Measurement(Long id, Long id_station, Date time, double value) {
        Id = id;
        Id_Station = id_station;
        Time = time;
        Value = value;
    }

    public Measurement() {
        Id = 0L;
        Id_Station = 0L;
        Time = null;
        Value = 0;
    }

    public Long getId_Station() {
        return Id_Station;
    }

    public void setId_Station(Long id) {
        Id_Station = id;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    //@JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonSerialize(using = CustomDateFormater2.class)
    @JsonDeserialize(using = CustomDateFormater.class)
    public Date getTime() {
        return Time;
    }

    public void setTime(Date time) {
        Time = time;
    }

    public double getValue() {
        return Value;
    }

    public void setValue(double value) {
        Value = value;
    }
}