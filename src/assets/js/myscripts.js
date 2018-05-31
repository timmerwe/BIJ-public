function changeInfo() {document.getElementById("main-info").innerHTML = "          <p>Uitleg over hoe leerkrachten en ouders/verzorgers de APP kunnen downloaden en gebruiken. Dit willen we doen d.m.v. 2 codes. 1 t.b.v. leerkrachten (interne gebruikers) en 1 t.b.v. ouders/verzorgers (externe gebruikers)<br/>            <br/>CODE t.b.v. Leerkrachten : 			<b>LK12345</b><br/><br/>CODE t.b.v. Ouders/Verzorgers :		<b>OU12345</b><br/><br/>Iedereen kan de BIJ! App downloaden en gebruiker op zijn/haar smartphone, echter met de bovenstaande CODE's krijgen gebruikers toegang tot uw school. Wees zorgvuldig bij het verstrekken van deze codes! <br/><br/><br/>Onder 'Overzicht' vindt u alle gebruikers die op dit moment toegang hebben tot 1 of meerdere onderdelen binnen uw school.</p>";
    document.getElementById("algemeen").className = "border-bottom";
    document.getElementById("overzicht").className = "noBorder-bottom";
  }

  function changeInfo2() {
    document.getElementById("main-info").innerHTML = "<table><tr><th>Company</th><th>Contact</th><th>Country</th></tr><tr><td>Alfreds Futterkiste</td><td>Maria Anders</td><td>Germany</td></tr><tr><td>Centro comercial Moctezuma</td><td>Francisco Chang</td><td>Mexico</td></tr<tr<td>Ernst Handel</td><td>Roland Mendel</td<td>Austria</td></tr><tr<td>Island Trading</td><td>Helen Bennett</td<td>UK</td></tr><tr><td>Laughing Bacchus Winecellars</td><td>Yoshi Tannamuri</td><td>Canada</td></tr><tr<td>Magazzini Alimentari Riuniti</td><td>Giovanni Rovelli</td><td>Italy</td></tr></table>";
    document.getElementById("overzicht").className = "border-bottom";
    document.getElementById("algemeen").className = "noBorder-bottom";
  }
  
  function getUserlevel(){
    var userId = firebase.auth().currentUser.uid;
    return firebase.database().ref('/userProfile/' + userId).once('value').then(function(snapshot) {
      var username = (snapshot.val() && snapshot.val().userlevel) || 'Anonymous';
      console.log(username);
      console.log("hoi");
    });
  };