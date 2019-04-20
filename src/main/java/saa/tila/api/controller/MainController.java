package saa.tila.api.controller;

import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import saa.tila.api.object.*;
import saa.tila.api.object.View;
import springfox.documentation.annotations.ApiIgnore;

@Controller
@RequestMapping("/api")
public class MainController {
    private MeasurementRepository MR;
    private StationRepository SR;

    MainController (StationRepository SR,MeasurementRepository MR){
        this.MR = MR;
        this.SR = SR;
    }

    @ApiIgnore
    @GetMapping(value = "doc")
    public String APIPage(){
        return "redirect:/swagger-ui.html#";
    }

    @PostMapping(value = "Measurement")
    public @ResponseBody
    String save(@RequestBody Measurement measurement) {
        MR.save(measurement);
        return "It works"; }

    @PatchMapping(value = "Measurement/{id}")
    public @ResponseBody
    String update(@RequestBody Measurement measurementDetail, @PathVariable(value = "id") Long id) {
        Measurement measurement = MR.findOne(id);
        measurement.setValue(measurementDetail.getValue());
        MR.save(measurement);
        return "It works"; }

    @GetMapping(value = "Measurements")
    public @ResponseBody
    Iterable<Measurement> GetAllMeasurement() {
        return MR.findAll();
    }

    @PostMapping(value = "Measurement/{id}")
    public ResponseEntity<String> delete(@PathVariable(value = "id") Long id) {
        MR.delete(id);
        return ResponseEntity.status(HttpStatus.CREATED).build(); }

    @JsonView(View.Main.class)
    @GetMapping(value = "Stations")
    public @ResponseBody
    Iterable<Station> allStation() {
        return SR.findAll();
    }
}