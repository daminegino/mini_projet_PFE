package tn.essat.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class PFE {
	
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String titre ;
	
	@ManyToOne 
	@JoinColumn(name="type_pfe_id")
	private Type_pfe type_pfe;

	public PFE() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PFE(int id, String titre, Type_pfe type_pfe) {
		super();
		this.id = id;
		this.titre = titre;
		this.type_pfe = type_pfe;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public Type_pfe getType_pfe() {
		return type_pfe;
	}

	public void setType_pfe(Type_pfe type_pfe) {
		this.type_pfe = type_pfe;
	}
	
	
	

}
