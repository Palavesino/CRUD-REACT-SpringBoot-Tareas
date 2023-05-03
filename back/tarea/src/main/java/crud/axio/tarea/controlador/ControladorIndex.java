package crud.axio.tarea.controlador;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RequestMapping("/")
//@CrossOrigin(origins = "*", allowedHeaders = "*")
//@RestController
public class ControladorIndex {

    @GetMapping("/")
    public String index() {
        return "index.html";
    }
}
