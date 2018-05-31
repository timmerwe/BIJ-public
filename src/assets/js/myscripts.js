function changeInfo() {
    document.getElementById("main-info").innerHTML = "<p>Uitleg over hoe leerkrachten en ouders/verzorgers de APP kunnen downloaden en gebruiken. Dit willen we doen d.m.v. 2 codes. 1 t.b.v. leerkrachten (interne gebruikers) en 1 t.b.v. ouders/verzorgers (externe gebruikers)</p>";
    document.getElementById("algemeen").className = "border-bottom";
    document.getElementById("overzicht").className = "noBorder-bottom";
  }

  function changeInfo2() {
    document.getElementById("main-info").innerHTML = "Overzicht";
    document.getElementById("overzicht").className = "border-bottom";
    document.getElementById("algemeen").className = "noBorder-bottom";
  }