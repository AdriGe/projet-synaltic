import React, { Component } from "react";
import Bouton from './Bouton';
import Score from "./Score";
import Graph from "./Graph";


class Jeu extends Component {     //on crée une classe Jeu qui hérite de la classe Component

    constructor(props) {        //On crée le constructeur de notre classe Jeu ayant pour argument props
        super(props);           // On appelle le contructeur de la classe parente (Component)
        this.myValue = 0;       // On attribue la valeur 0. En faisant this.X je crée une variable pour la classe " Jeu", je peux donc réutiliser cette variable à n'importe quel moment.
        
        
        this.state = {                  // state est un dictiionnaire contenant toutes les variables d'état, ici on crée une variable d'étéat score utilisateur que l'on initialise à 0
            scoreCodeOk: 0,
            scoreCodeBug: 0,
            scoreIa: 0,
            etatPartie: "En cours...",
            listeCoups: []
        }
        this.minCoderBien=5;
        this.maxCoderBien=10;
        this.minCoderViteOk=3;
        this.maxCoderViteOk=13;
        this.minCoderViteBug=4;
        this.maxCoderViteBug=12;
        this.minTester=3;
        this.maxTester=13;
        this.minIa=3;
        this.maxIa=13;

        this.coderBien = this.coderBien.bind(this);
        this.coderVite = this.coderVite.bind(this);
        this.tester = this.tester.bind(this);
        this.recommencer = this.recommencer.bind(this);
        this.tourIa = this.tourIa.bind(this);

    }

    ajoutCoup(codeOk, codeBug, codeIa) {
        let listeCoupsTpm = [...this.state.listeCoups];

        listeCoupsTpm.push({codeOk: codeOk, codeBug: codeBug, codeIa: codeIa});

        this.setState({
            listeCoups: listeCoupsTpm
        })

        console.log(this.state.listeCoups);

    }

    genererNombreAleatoire(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    coderBien() {                //générer nombre aléatoire entre un min et un max
        console.log("_____________ BIEN _____________");

        if(this.state.etatPartie==="En cours...") {

            let nombreAleatoireOk=this.genererNombreAleatoire(this.minCoderBien, this.maxCoderBien);
            let scoreCodeOkTmp = this.state.scoreCodeOk+nombreAleatoireOk

            console.log("[Before] scoreCodeOk = "+this.state.scoreCodeOk+" / scoreCodeBug = "+this.state.scoreCodeBug+" /   nombreAleatoireOk = "+nombreAleatoireOk);
            console.log("[After1] scoreCodeOk = "+scoreCodeOkTmp+" / scoreCodeBug = "+this.state.scoreCodeBug+" /   nombreAleatoireOk = "+nombreAleatoireOk);

            if (this.state.scoreCodeOk + this.state.scoreCodeBug + nombreAleatoireOk > 100) {
                scoreCodeOkTmp = 100 - this.state.scoreCodeOk - this.state.scoreCodeBug + this.state.scoreCodeOk;
                console.log("[After2] scoreCodeOk = "+scoreCodeOkTmp+" / scoreCodeBug = "+this.state.scoreCodeBug+" /   nombreAleatoireOk = "+nombreAleatoireOk);
            }

            this.setState({
                scoreCodeOk: scoreCodeOkTmp
            }, () => {
                this.tourIa();
            });
        }
    }
    
    coderVite() {
        console.log("_____________ VITE _____________");
        if(this.state.etatPartie==="En cours...") {

            let nombreAleatoireOk=this.genererNombreAleatoire(this.minCoderViteOk, this.maxCoderViteOk);
            let nombreAleatoireBug=this.genererNombreAleatoire(this.minCoderViteBug, this.maxCoderViteBug);

            console.log("[Before] scoreCodeOk = "+this.state.scoreCodeOk+" / scoreCodeBug = "+this.state.scoreCodeBug+" / nombreAleatoireOk = "+nombreAleatoireOk+" / nombreAleatoireBug = "+nombreAleatoireBug);        



            let scoreCodeOkTmp = this.state.scoreCodeOk+nombreAleatoireOk
            
            console.log("[After1.1] scoreCodeOk = "+scoreCodeOkTmp+" / scoreCodeBug = "+this.state.scoreCodeBug+" / nombreAleatoireOk = "+nombreAleatoireOk+" / nombreAleatoireBug = "+nombreAleatoireBug);

            if (this.state.scoreCodeOk + this.state.scoreCodeBug + nombreAleatoireOk > 100) {
                scoreCodeOkTmp = 100 - this.state.scoreCodeOk - this.state.scoreCodeBug + this.state.scoreCodeOk;
                console.log("[After1.2] scoreCodeOk = "+scoreCodeOkTmp+" / scoreCodeBug = "+this.state.scoreCodeBug+" / nombreAleatoireOk = "+nombreAleatoireOk+" / nombreAleatoireBug = "+nombreAleatoireBug);
            }

            this.setState({
                scoreCodeOk: scoreCodeOkTmp
            });



            let scoreCodeBugTmp = this.state.scoreCodeBug+nombreAleatoireBug

            console.log("[After2.1] scoreCodeOk = "+scoreCodeOkTmp+" / scoreCodeBug = "+scoreCodeBugTmp+" / nombreAleatoireOk = "+nombreAleatoireOk+" / nombreAleatoireBug = "+nombreAleatoireBug);

            if (scoreCodeOkTmp + this.state.scoreCodeBug + nombreAleatoireBug > 100) {
                scoreCodeBugTmp = 100 - scoreCodeOkTmp - this.state.scoreCodeBug + this.state.scoreCodeBug;
                console.log("[After2.2] scoreCodeOk = "+scoreCodeOkTmp+" / scoreCodeBug = "+scoreCodeBugTmp+" / nombreAleatoireOk = "+nombreAleatoireOk+" / nombreAleatoireBug = "+nombreAleatoireBug);
            }

            this.setState({
                scoreCodeBug: scoreCodeBugTmp
            }, () => {
                this.tourIa();
            });
        }
    }
    
    tester() {
        console.log("_____________ TESTER _____________");

        if(this.state.etatPartie==="En cours...") {
            let nombreAleatoireTest = this.genererNombreAleatoire(this.minTester, this.maxTester);
            let scoreCodeOkTmp = this.state.scoreCodeOk + nombreAleatoireTest;

            console.log("[Before] scoreCodeOk = "+this.state.scoreCodeOk+" / scoreCodeBug = "+this.state.scoreCodeBug+" / nombreAleatoireTest = "+nombreAleatoireTest);


            let scoreCodeBugTmp = this.state.scoreCodeBug - nombreAleatoireTest;
            console.log("[After1] scoreCodeOk = "+scoreCodeOkTmp+" / scoreCodeBug = "+scoreCodeBugTmp+" / nombreAleatoireTest = "+nombreAleatoireTest);

            if(nombreAleatoireTest>this.state.scoreCodeBug) {
                scoreCodeBugTmp=0;
                scoreCodeOkTmp=this.state.scoreCodeOk + this.state.scoreCodeBug;
                console.log("[After2] scoreCodeOk = "+scoreCodeOkTmp+" / scoreCodeBug = "+scoreCodeBugTmp+" / nombreAleatoireTest = "+nombreAleatoireTest);
            }


            this.setState({
                scoreCodeOk: scoreCodeOkTmp,
                scoreCodeBug: scoreCodeBugTmp
            }, () => {
                this.tourIa();
            });
        }
    }

    tourIa() {
        console.log("_____________ IA _____________");

        let nombreAleatoireIa=this.genererNombreAleatoire(this.minIa, this.maxIa);
        let scoreCodeIaTmp = this.state.scoreIa+nombreAleatoireIa

        console.log("[Before] scoreIa = "+this.state.scoreCodeOk+" / nombreAleatoireIa = "+nombreAleatoireIa);
        console.log("[After1] scoreIa = "+scoreCodeIaTmp+" / nombreAleatoireIa = "+nombreAleatoireIa);

        if (this.state.scoreIa + nombreAleatoireIa > 100) {
            scoreCodeIaTmp = 100
            console.log("[After2] scoreIa = "+scoreCodeIaTmp+" / nombreAleatoireIa = "+nombreAleatoireIa);
        }

        this.setState({
            scoreIa: scoreCodeIaTmp
        }, () => {
            this.ajoutCoup(this.state.scoreCodeOk, this.state.scoreCodeBug, this.state.scoreIa);     
            this.verifFinDePartie();
        });
    }

    ajoutHistorique(resultat) {
        console.log("!!!!!!!!!!!!!!!!!!!!! HISTORIQUE !!!!!!!!!!!!!!!!!!!!!")
        let historique = JSON.parse(localStorage.getItem("historique"));
        console.log(historique);
        if(historique == null){
            historique = [];
        }

        let dateActuelle=new Date()
        let dateStr=dateActuelle.getFullYear()+"/"+dateActuelle.getMonth()+"/"+dateActuelle.getDay()+" "+dateActuelle.getHours()+":"+dateActuelle.getMinutes()+":"+dateActuelle.getSeconds();
                
        historique.push({
            date: dateStr,
            codeOk: this.state.scoreCodeOk, 
            codeBug: this.state.scoreCodeBug, 
            codeIa: this.state.scoreIa,
            resultat: resultat
        })
        localStorage.setItem("historique", JSON.stringify(historique))
        
        console.log(historique);
    }

    verifFinDePartie() {
        console.log("_____________ VERIF _____________");
        if(this.state.scoreCodeOk===100){
            this.setState({
                etatPartie: "Vous avez gagné ! :D"
            });
            console.log("Le joueur a gagné.");
            this.ajoutHistorique("Gagné");
        } else if (this.state.scoreIa===100) {
            this.setState({
                etatPartie: "Vous avez perdu ! :'("
            });
            console.log("Le joueur a perdu.")
            this.ajoutHistorique("Perdu");
        }
    }

    recommencer() {
        console.log("_____________ RECOMMENCER _____________");
        console.log("[Before] scoreCodeOk = "+this.state.scoreCodeOk+" / scoreCodeBug = "+this.state.scoreCodeBug);
        
        this.setState({
            scoreCodeOk: 0,
            scoreCodeBug: 0,
            scoreIa: 0,
            etatPartie: "En cours...",
            listeCoups: []
        });

        console.log("[After] scoreCodeOk = "+0+" / scoreCodeBug = "+0);
    }
    

    render() {
        return (
            <div>
                <div className="actions">
                    <Bouton texteBouton="Coder bien" fonction={this.coderBien} className="coderBien" />
                    <Bouton texteBouton="Coder vite" fonction={this.coderVite} className="coderVite" />
                    <Bouton texteBouton="Tester" fonction={this.tester} className="tester" />
                    <Bouton texteBouton="Recommencer" fonction={this.recommencer} className="recommencer" />
                </div>
                <div>
                    {this.state.etatPartie}
                    <Score texte="Code OK" nombre={this.state.scoreCodeOk} />
                    <Score texte="Code Bug" nombre={this.state.scoreCodeBug} />
                    <Score texte="Code IA" nombre={this.state.scoreIa} />
                    <Graph listeCoups={this.state.listeCoups} />
                </div>
                <div>
                    
                </div>
            </div>
    
        );
    }
}

  export default Jeu;
