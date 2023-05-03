package crud.axio.tarea.controlador;

import crud.axio.tarea.entidades.Tarea;
import crud.axio.tarea.repositorios.TareaRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/tarea")
public class TareaController {

    @Autowired
    TareaRepositorio tareaRepo;

    // http://localhost:8080/tarea/lista
    @GetMapping("/lista")
    public List<Tarea> listar() {
        return tareaRepo.findAll();
    }
// http://localhost:8080/tarea/xid/

    @GetMapping("/xid/{id}")
    public Tarea getTareaXIdJSON(@PathVariable int id) {
        return tareaRepo.buscarPorId(id);
    }

    // http://localhost:8080/tarea/create
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/create")
    public Tarea create(@RequestBody Tarea tarea) {
        System.out.println(tarea.getNombre());
        System.out.println(tarea.isCompletado());
        return tareaRepo.save(tarea);
    }

    // http://localhost:8080/tarea/update/
    @ResponseStatus(HttpStatus.CREATED)
    @PutMapping("/update/{id}")
    public Tarea update(@PathVariable int id, @RequestBody Tarea tarea) {
        Tarea t = tareaRepo.buscarPorId(id);
        t.setNombre(tarea.getNombre());
        t.setCompletado(tarea.isCompletado());
        return tareaRepo.save(t);
    }

    // http://localhost:8080/tarea/delete/
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable int id) {
        Tarea t = tareaRepo.buscarPorId(id);
        tareaRepo.delete(t);
    }
}
