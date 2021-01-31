package tn.essat.services;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.essat.DAOs.PFE_dao;
import tn.essat.DAOs.type_pfe_dao;
import tn.essat.models.PFE;
import tn.essat.models.Type_pfe;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest")
public class REST_API {
	
	@Autowired
	type_pfe_dao tpd;
	@Autowired
	PFE_dao pd;
	
	public void set_type_pfe(type_pfe_dao tpd) {this.tpd=tpd;}
	public void set_pfe(PFE_dao pd) {this.pd=pd;}
	
	
	@GetMapping("getAllTypes")
	public List<Type_pfe> getAllTypes ()
	{return (tpd.findAll());}
	
	@GetMapping("getType/{type_id}")
	public Optional <Type_pfe> getTypeById(@PathVariable (value="type_id") int type_id)
	{return tpd.findById(type_id);}
	
	@PostMapping("addType")
	public void addType(@RequestBody Type_pfe tp)
	{tpd.save(tp);}
	
	@DeleteMapping("delType/{type_id}")
	public void delType(@PathVariable (value="type_id") int type_id)
	{tpd.deleteById(type_id);}
	
	@GetMapping("getAllPFEs")
	public List<PFE> getAllPFEs ()
	{return (pd.findAll());}
	
	@GetMapping("getPFEById/{pfe_id}")
	public Optional <PFE> getPFEById(@PathVariable (value="pfe_id") int pfe_id)
	{return pd.findById(pfe_id);}
	
	@GetMapping("getPFEByTypeId/{pfe_type_id}")
	public List<PFE> getPFEByTypeId(@PathVariable (value="pfe_type_id") int pfe_type_id)
	{return pd.getPFEByTypeId(pfe_type_id);}
	
	@GetMapping("search/{text}")
	public List<PFE> searchPFE(@PathVariable (value="text") String text)
	{return (pd.searchPFE(text));}
	
	@PostMapping("addPFE")
	public void addPFE(@RequestBody PFE pfe)
	{pd.save(pfe);}
	
	@DeleteMapping("delPFE/{pfe_id}")
	public void delPFEById(@PathVariable (value="pfe_id") int pfe_id)
	{pd.deleteById(pfe_id);}
	
	@GetMapping("typesCount")
	public int[] typesCount()
	{	
	List<PFE> pfes=pd.findAll();
	int[] countType=new int[tpd.findAll().size()];
	Arrays.fill(countType, 0);
	for (PFE p : pfes)
	{countType[p.getType_pfe().getId()-1]++;}
	return (countType);
	}
	
	@GetMapping("PFEsCount")
	int PFEsCount() {
		return(this.getAllPFEs().size());	
	}
	


}
