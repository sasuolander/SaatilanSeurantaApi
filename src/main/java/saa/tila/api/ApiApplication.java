package saa.tila.api;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import saa.tila.api.object.Measurement;
import saa.tila.api.object.MeasurementRepository;
import saa.tila.api.object.Station;
import saa.tila.api.object.StationRepository;
import java.text.SimpleDateFormat;

@SpringBootApplication
public class ApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(ApiApplication.class, args);
    }

    @Bean
    public CommandLineRunner StarterPack(MeasurementRepository MR, StationRepository SR) {
        return (args) -> {
            SimpleDateFormat formater = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            Station Tokyo = new Station(1L, "Tokyo", 139.7328635, 35.6584421);
            Station Helsinki = new Station(2L, "Helsinki", 24.9490830, 60.1697530);
            Station New_York = new Station(3L, "New York", -73.9938438, 40.7406905);
            Station Amsterdam = new Station(4L, "Amsterdam", 4.9040238, 52.3650691);
            Station Dubai = new Station(5L, "Dubai", 55.1562243, 25.092535);
            Measurement testi1 = new Measurement(1L, 1L, formater.parse("2017-08-20 09:37:55"), 5.2);
            Measurement testi2 = new Measurement(2L, 2L, formater.parse("2017-06-02 08:07:41"), 5.8);
            Measurement testi3 = new Measurement(3L, 3L, formater.parse("2017-06-02 08:07:41"), 5.6);
            Measurement testi4 = new Measurement(4L, 4L, formater.parse("2017-06-02 08:07:41"), 5.8);
            Measurement testi5 = new Measurement(5L, 5L, formater.parse("2017-06-02 08:07:41"), 5.7);
            SR.save(Tokyo);SR.save(Helsinki);SR.save(New_York);SR.save(Amsterdam);SR.save(Dubai);MR.save(testi1);
            MR.save(testi2);MR.save(testi3);MR.save(testi4);MR.save(testi5);
        };
    }
}