class sallemanager {
    sallelist=[]
    compter=0
}

addsalle(salle){
    this.compter = this.compteur+1
    Salle.id = this.compteur
    this.sallelist.push(Salle)
}

modify(salle){
    for (let i = 0; i < this.sallelist.length; i++) {
        if (this.id = this.sallelist[i].id) {
           this.sallelist[i] = salle 

           return salle
        }
        
    }
}

deletesalle(id){
    this.sallelist = this.sallelist.filter(function(salle){
        return salle.id != id
    })
}