function apparaitErreur() {

            // La variable "affiche" est donné le nombre d'erreurs faits par l'utilisateur
            var affiche = document.getElementById("divAfficheNombreErreurs");
            
            // La variable "message" est le message construit du nombre d'erreurs
            var message = "Vous avez commis <b>" + erreur + "</b> erreurs.<br><br>";
            
            // On affiche la variable "message"
            affiche.innerHTML = message;
            
            // On déclare la variable "bonneReponse" qui va être rédéfinie selon la question demandée
            var bonneReponse
            
            // Swtich-case selon le nombre d'erreurs faits
            switch (erreur) {
                
                // Si une erreure est fait, on demande la première question
                case 1: 
                    document.getElementById("question").textContent = "Quelle est l'intervalle entre un Do (C) et un Sol (G) ?";
                    
                    // La bonne réponse est "quinte"
                    bonneReponse = "quinte";
                    break;
                    
                // La question et la bonne réponse sont rédéfinies
                case 2: 
                    document.getElementById("question").textContent = "Dans la gamme de Mi majeur, quel chiffre romain correspond à la triade de Fa# mineure ?";
                    bonneReponse = "ii";
                    break;
                    
                // La question et la bonne réponse sont rédéfinies
                case 3: 
                    document.getElementById("question").textContent = "Quel mode contient un accord diminué sur la tonique ?";
                    bonneReponse = "locrien";
                    break;
                
                // La question et la bonne réponse sont rédéfinies    
                case 4: 
                    document.getElementById("question").textContent = "Quelle est la seule note qui peut agir comme" + 
                    " la tonique, la tierce, la quinte et la septième de quatre accords de septième différents SANS altérer son altération ?"; // Fixed typo: textcontent -> textContent
                    bonneReponse = "fa";
                    break;
            }
            
            // Si plus que quatre erreurs sont faits, on affiche le message de faillite
            if (erreur > 4) {
                
                var tropErreurs = document.getElementById("divTropErreurs");
                var messageTrop = "Oups ! vous avez commis trop d'erreurs !<br><br><b>VOUS AVEZ PERDU</b>";
                tropErreurs.innerHTML = messageTrop;
                
            // Si 0 erreurs sont faits, on affiche le message de réussite    
            } else if (erreur === 0) {
                
                tropErreurs = document.getElementById("divTropErreurs");
                messageTrop = "Bravo ! vous n'avez commis aucunes erreurs !<br><br><b>VOUS AVEZ GAGNÉ !!!</b>"; // Added missing semicolon
                tropErreurs.innerHTML = messageTrop;
                
            // Sinon, on révèle le bouton qui était caché
            } else {
                
                // inline-block - sourche : https://www.w3schools.com/css/css_inline-block.asp
                document.getElementById("cacheBouton").style.display = "inline-block";
                
            }
}
            /* On définit la fonction "afficheQuestion()" qui révèle
            1) la question à répondre
            2) la boîte de text pour insérer la réponse
            3) le bouton pour soumettre la réponse
            4) le résultat (si le jeu est gagné ou perdu). */
            function afficheQuestion() {
                // inline-block - source : https://www.w3schools.com/css/css_inline-block.asp
                document.getElementById("cache").style.display = "block";
                
            }
            
            // On définit la fonction "verifieReponse()" qui détermine si la réponse soumise est correcte
            function verifieReponse() {
                
                // On définit la variable "reponse" comme étant la réponse soumise par l'utilisateur
                let reponse = document.getElementById("txtQuestionSecondeVie");
                
                // On ne veut pas que l'utilisateur soit capable de changer sa réponse, donc on désactive la boîte
                // .disble - source : https://www.w3schools.com/jsref/prop_select_disabled.asp
                document.getElementById("txtQuestionSecondeVie").disabled = true;
                
                switch (erreur) {
                
                // Si une erreure est fait, on demande la première question
                case 1: 
                    document.getElementById("question").textContent = "Quelle est l'intervalle entre un Do (C) et un Sol (G) ?";
                    
                    // La bonne réponse est "quinte"
                    bonneReponse = "quinte";
                    break;
                    
                // La question et la bonne réponse sont rédéfinies
                case 2: 
                    document.getElementById("question").textContent = "Dans la gamme de Mi majeur, quel chiffre romain correspond à la triade de Fa# mineure ?";
                    bonneReponse = "ii";
                    break;
                    
                // La question et la bonne réponse sont rédéfinies
                case 3: 
                    document.getElementById("question").textContent = "Quel mode contient un accord diminué sur la tonique ?";
                    bonneReponse = "locrien";
                    break;
                
                // La question et la bonne réponse sont rédéfinies    
                case 4: 
                    document.getElementById("question").textContent = "Quelle est la seule note qui peut agir comme" + 
                    " la tonique, la tierce, la quinte et la septième de quatre accords de septième différents SANS altérer son altération ?"; // Fixed typo: textcontent -> textContent
                    bonneReponse = "fa";
                    break;
            }
            
                // Si la réponse est la bonne réponse, affiche le message de réussite
                if (reponse.value.toLowerCase() == bonneReponse) {
                    console.log("it got here!");
                    var one = document.getElementById("afficheResultat");
                    var resultatAffiche = "<br>Bravo ! vous avez bien répondu à la question !<br><br><b>VOUS AVEZ GAGNÉ !!!</b>";
                    one.innerHTML = resultatAffiche;
                    
                // Sinon, affiche le message de faillite
                } else {
                    console.log("it didn't get here!");
                    one = document.getElementById("afficheResultat");
                    resultatAffiche = "<br>Malhereusement, vous avez mal répondu à a question. La réponse était <b>" + bonneReponse + "</b>.<br><br><b>VOUS AVEZ PERDU</b>";
                    one.innerHTML = resultatAffiche;   
                    
                }
                
}
