package saa.tila.api.controller;

import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import saa.tila.api.object.*;
import saa.tila.api.object.View;

@Controller
@RequestMapping("/api")
public class MainController {
    @Autowired
    private MeasurementRepository MR;
    @Autowired
    private StationRepository SR;

    //Create
    @RequestMapping(value = "Measurement", method = RequestMethod.POST)
    public @ResponseBody
    String save(@RequestBody Measurement measurement) {
        MR.save(measurement);
        return "It works";
    }

    //Update
    @RequestMapping(value = "Measurement/{id}", method = RequestMethod.PATCH)
    public @ResponseBody
    String update(@RequestBody Measurement measurementDetail, @PathVariable(value = "id") Long id) {

        Measurement measurement = MR.findOne(id);
        measurement.setValue(measurementDetail.getValue());

        Measurement update = MR.save(measurement);

        return "It works";
    }

    //Read
    @RequestMapping(value = "Measurements", method = RequestMethod.GET)
    public @ResponseBody
    Iterable<Measurement> GetAllMeasurement() {
        return MR.findAll();
    }

    //Delete
    //@CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(value = "Measurement/{id}", method = RequestMethod.POST)
    public ResponseEntity<String> delete(@PathVariable(value = "id") Long id) {
        MR.delete(id);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @JsonView(View.Main.class)
    @RequestMapping(value = "Stations", method = RequestMethod.GET)
    public @ResponseBody
    Iterable<Station> allStation() {
        return SR.findAll();
    }
}