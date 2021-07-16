package org.wecancodeit.mysteryeducator;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin
// @RequestMapping("/api/facts/")
public class FactController {

//    @Value("${app.name:Default Demo App}")
//    private String appName;

    @GetMapping("/get")
    //@requestMapping(value = "/get", method = RequestMethod.GET
    public FactResponse getFact () {
        FactResponse factResponse = new FactResponse(1, "History", "Fact1");
        return factResponse;
    }
}
