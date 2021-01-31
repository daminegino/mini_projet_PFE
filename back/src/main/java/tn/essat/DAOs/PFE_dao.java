package tn.essat.DAOs;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import tn.essat.models.PFE;

@Repository
public interface PFE_dao extends JpaRepository<PFE, Integer> {
	
	@Query("select pfe from PFE pfe where pfe.type_pfe.id=?1")
	public List<PFE> getPFEByTypeId(int pfe_type_id);
	
	@Query("select pfe from PFE pfe where pfe.titre like %:text% ")
	public List<PFE> searchPFE(@Param ("text") String text);

}
