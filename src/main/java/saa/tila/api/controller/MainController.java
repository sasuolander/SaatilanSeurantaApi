package saa.tila.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import saa.tila.api.object.Measurement;
import saa.tila.api.object.MeasurementRepository;
import saa.tila.api.object.Station;
import saa.tila.api.object.StationRepository;

import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("/api")
public class MainController {
    @Autowired
    private MeasurementRepository MR;
    @Autowired
    private StationRepository SR;

    @RequestMapping(value = "Measurement", method = RequestMethod.POST)
    public @ResponseBody String save(@RequestBody Measurement measurement){
        MR.save(measurement);
        return "It works";
    }
    //delete
    @RequestMapping(value = "Measurement/{id}",  method = RequestMethod.DELETE)
    public String delete(@PathVariable(value="id") Long id){
        MR.delete(id);
        return null;
    }

    @RequestMapping(value = "Station", method = RequestMethod.GET)
    public @ResponseBody Iterable<Station> allStation(){
        return SR.findAll();
    }
}
