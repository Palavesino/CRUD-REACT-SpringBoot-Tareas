package crud.axio.tarea.repositorios;

import crud.axio.tarea.entidades.Tarea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TareaRepositorio extends JpaRepository<Tarea, String> {

    @Query("SELECT i FROM Tarea i WHERE i.id = :id")
    public Tarea buscarPorId(@Param("id") int id);
}
