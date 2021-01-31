package tn.essat.DAOs;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.essat.models.Type_pfe;

@Repository
public interface type_pfe_dao extends JpaRepository<Type_pfe, Integer> {

}
