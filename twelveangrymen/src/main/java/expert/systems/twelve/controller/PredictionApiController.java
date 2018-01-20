package expert.systems.twelve.controller;

import expert.systems.twelve.manager.TwelveAngManager;
import expert.systems.twelve.model.Question;
import expert.systems.twelve.model.Result;
import jdk.jshell.spi.ExecutionControl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class PredictionApiController {

    @Autowired
    private TwelveAngManager _logicManager;

    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(path = "/api/probability", method = RequestMethod.POST)
    public Result countProbabilities(@RequestBody Question question){
        return _logicManager.CalculateProbabilities(question);
    }
}
