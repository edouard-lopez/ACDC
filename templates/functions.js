    // Ol' reliable
    var i = 0;

    // Activation des Tooltips
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();   
    });

    // Permet de toujours choisir 1 seule Force
    function uncheckForce(elm) {
        var ord = document.getElementById('ordre');
        var ins = document.getElementById('instruction');
        var pro = document.getElementById('proposition');
        var non = document.getElementById('nonverbal');
        var sol = document.getElementById('soliloque');
        var com = document.getElementById('commentaire');
        if(ord.checked == true && elm != ord){
        ord.click();
        }
        if(ins.checked == true && elm != ins){
        ins.click();
        }
        if(pro.checked == true && elm != pro){
        pro.click();
        }
        if(non.checked == true && elm != non){
        non.click();
        }
        if(sol.checked == true && elm != sol){
        sol.click();
        }
        if(com.checked == true && elm != com){
        com.click();
        }
    }

    // Permet de toujours choisir 1 seule Décision
    function uncheckDecision(elm) {
        var act = document.getElementById('acceptation');
        var aco = document.getElementById('accord');
        var aut = document.getElementById('autorisation');
        var ref = document.getElementById('refus');
        var con = document.getElementById('concession');
        var ind = document.getElementById('indetermine');
        if(act.checked == true && elm != act){
        act.click();
        }
        if(aco.checked == true && elm != aco){
        aco.click();
        }
        if(aut.checked == true && elm != aut){
        aut.click();
        }
        if(ref.checked == true && elm != ref){
        ref.click();
        }
        if(con.checked == true && elm != con){
        con.click();
        }
        if(ind.checked == true && elm != ind){
        ind.click();
        }
    }

    // Permet de réinitialiser les intéractions (avec le dblclick)
    function uncheckInteraction(elm) {
        var que = document.getElementById('questionne');
        var inf = document.getElementById('informe');
        var con = document.getElementById('controle');
        var pos = document.getElementById('positif');
        var neg = document.getElementById('negatif');
        var po2 = document.getElementById('positif2');
        var ne2 = document.getElementById('negatif2');
        if(que.checked == true && elm != que){
        que.click();
        }
        if(inf.checked == true && elm != inf){
        inf.click();
        }
        if(con.checked == true && elm != con){
        con.click();
        }
        if(pos.checked == true && elm != pos){
        pos.click();
        }
        if(neg.checked == true && elm != neg){
        neg.click();
        }
        if(po2.checked == true && elm != po2){
        po2.click();
        }
        if(ne2.checked == true && elm != ne2){
        ne2.click();
        }
    }

    // Permet de ramener le timestamp à sa valeur initiale
    function resetTimestamp() {
        var elm = document.getElementById('timestamp');
        elm.value = "";
    }

    // Permet de ramener P1 et P2 sur leur valeur initiale
    function resetParticipants(elm) {
        var p1 = document.getElementById('participant1');
        var p2 = document.getElementById('participant2');
        if(p1.checked == true && elm != p1) {
            p1.click();
        }
        if(p2.checked == true && elm != p2) {
            p2.click();
        }
    }

    // Permet de ramener la longueur à sa valeur initiale
    function resetLongueur() {
        var elm = document.getElementById('Longueur');
        elm.value = "";
    }

    // Permet de remettre le Form entier à sa valeur initiale
    function resetForm(elm) {
        resetTimestamp();
        resetParticipants(elm);
        resetLongueur();
        uncheckForce(elm);
        uncheckDecision(elm);
        uncheckInteraction(elm);
        refresh();
    }

    // Autorise le drag&drop
    function allowDrop(ev) {
        ev.preventDefault();
    }

    // Récupération des données de l'objet "drag"
    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    // Ecriture des données de l'objet "drag" dans l'objet "drop"
    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data).cloneNode(true));
    }

    // Permet de supprimer un enfant d'un parent choisi :^)
    function supprChild(parent) {
        a = null;
        while (parent.firstChild) {
            if(parent.firstChild.innerHTML == undefined){
                a = parent.firstChild;
            }
            parent.removeChild(parent.firstChild);
        }
        if(a != null){
            parent.appendChild(a);
        }
    }

    // Permet de revenir à la prévis initiale
    function refresh(){
        var l = document.getElementById("Longueur");
        var s = document.getElementById("ScrollPrevis");
        var n = parseInt(l.value);
        if(n > i){
            while(n > i){
                s.innerHTML += '<div id="Zone' + (i+1) + '" class="zone" ondrop="drop(event)" ondragover="allowDrop(event)" ondblclick="supprChild(this)">' + (i+1) + '</div>';
                i+=1;
            }
        }
        else{
            while(i > n){
                s.removeChild(s.lastChild);
                i-=1;
            }
        }
        
        l.value = i
    }

    //Permet d'avoir toujours la longueur à la même taille que la prévis
    function addtolength(val){
        document.getElementById("Longueur").value = parseInt(document.getElementById("Longueur").value) + val;
    }

    // Permet de ne lancer le Form que lorsqu'on a au moins rentré les paramètres minimaux (Force, Timestamp, P1/P2, Longueur)
    function validateMyForm(){ //J'arrive pas à le faire marcher...
        alert($('div.string :checkbox:checked').length > 0);
    }

    // Test de la prévis...
    function testPrevis(){
        var previs = document.getElementById("ScrollPrevis");
        var child = null;
        n = previs.childElementCount;
        i = 0;
        m = null;
        // alert("n = " + n)
        while(n > i){
            child = document.getElementById("Zone" + i);
            j = 1;
            m = child.childElementCount;
            // alert("m = " + m);
            while(m >= j){
                elem = child.childNodes[j];
                alert(i + " : " +elem.id);
                j += 1;
            }
            i += 1;
        }
    }

    // Ajoute/retire des cases à la prévis (lorsqu'on appuie sur les boutons "+" ou "-", ou que l'on change la valeur de longueur)
    function insertPrevis(){
        var origin = document.getElementById("PrevisDiv");
        var previs = document.getElementById("ScrollPrevis");
        var child = null;
        n = previs.childElementCount;
        i = 0;
        m = null;
        // alert("n = " + n)
        while(n > i){
            child = document.getElementById("Zone" + i);
            j = 1;
            entree = "";
            m = child.childElementCount;
            // alert("m = " + m);
            while(m >= j){
                elem = child.childNodes[j];
                entree += elem.id + ";";
                j += 1;
            }
            origin.innerHTML += '<input type="hidden" id="previs' + i + '" name="previs' + i + '" value="' + entree + '">';
            i += 1;
        }
        return true;
    }

    // Importe les données insérées dans les cases (depuis la BDD) et ajoute ces données dans le Form
    function importDataEch(div){

        var i = 1;
        var j = 0;

        document.getElementById("timestamp").value = div.getAttribute("tem");
        /*
        // the hard way
        if(div.getAttribute("agini") == 1){
            if(document.getElementById("participant1").checked == false){
                document.getElementById("participant1").click();
            }
        }
        if(div.getAttribute("agini") == 2){
            if(document.getElementById("participant2").checked == false){
                document.getElementById("participant2").click();
            }
        }
        */

        // the soft way
        if(document.getElementById("participant" + div.getAttribute("agini")).checked == false){
            document.getElementById("participant" + div.getAttribute("agini")).click();
        }

        if(div.getAttribute("dini") == 1){
            document.getElementById("diffini").checked = true;
        }
        else{
            document.getElementById("diffini").checked = false;
        }

        document.getElementById("Longueur").value = div.getAttribute("long");
        refresh();
        if(document.getElementById(div.getAttribute("forc")).checked == false){
            document.getElementById(div.getAttribute("forc")).click();
        }

        if(div.getAttribute("deci") == ""){
            document.getElementById("accord").click();
            document.getElementById("accord").click();
        }
        else if(document.getElementById(div.getAttribute("deci")).checked == false){
            document.getElementById(div.getAttribute("deci")).click();
        }

        var longueur = div.getAttribute("long");
        while(longueur >= j){
            supprChild(document.getElementById("Zone" + j))
            j += 1;
        }

        while(div.childElementCount >= i){
            document.getElementById("Zone" + div.childNodes[i].getAttribute("tem")).appendChild(document.getElementById(div.childNodes[i].getAttribute("typ")).cloneNode(true));
            i += 1;
        }
    }
    
    // Met à jour la Datavis avec le code Python (! lancer Flask avant)
    function datavisRefresh(){
        // Send form data to the server with an aynchronous POST request

        //DB to JSON
        var finalData = {};
        var echData = {};
        var interData = {};
        const dataset = document.getElementById("LeftDiv");
        const numEch = dataset.childElementCount - 2;
        var echange = null;
        var numInter = null;
        var interaction = null;

        var i = 0;
        var j = 0;
        var stringI = "0";
        var stringJ = "0";

        while(i < numEch){
            echange = dataset.children[i+2];
            numInter = echange.childElementCount - 1;
            j = 0;
            echData = {};
            echData["temp"] = echange.getAttribute("tem");
            echData["agini"] = echange.getAttribute("agini");
            echData["long"] = echange.getAttribute("long");
            echData["force"] = echange.getAttribute("forc");
            echData["deci"] = echange.getAttribute("deci");
            echData["dini"] = echange.getAttribute("dini");

            while(j < numInter){
                interaction = echange.children[j + 1];
                interData = {}
                interData["temp"] = interaction.getAttribute("tem");
                interData["type"] = interaction.getAttribute("typ");
                stringJ = String(j);
                echData[stringJ] = interData;
                j++;
            }
            stringI = String(i);
            finalData[stringI] = echData;
            i++;
        }

        finalDataJSON = JSON.stringify(finalData);

        sentData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: finalDataJSON
        };

        fetch("http://127.0.0.1:5000/postmethod", sentData)
            .then(() => location.reload());
        
    }


    /*
    function dump(obj) {
        var out = '';
        for (var i in obj) {
            out += i + ": " + obj[i] + "\n";
        }
        alert(out);
    }
    */
