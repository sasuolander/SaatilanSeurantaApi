package saa.tila.api.controller;

import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
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

    @RequestMapping(value = "Measurement", method = RequestMethod.POST)
    public @ResponseBody
    String save(@RequestBody Measurement measurement) {
        MR.save(measurement);
        return "It works";
    }

    @RequestMapping(value = "Measurements", method = RequestMethod.GET)
    public @ResponseBody
    Iterable<Measurement> GetAllMeasurement() {
        return MR.findAll();
    }

    //@CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(value = "Measurement/{id}", method = RequestMethod.POST)
    public String delete(@PathVariable(value = "id") Long id) {
        MR.delete(id);
        return "It works";
    }

    @JsonView(View.Main.class)
    @RequestMapping(value = "Stations", method = RequestMethod.GET)
    public @ResponseBody
    Iterable<Station> allStation() {
        return SR.findAll();
    }
}