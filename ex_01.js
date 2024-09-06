document.addEventListener('DOMContentLoaded', function() {
 const espion = {
        age: 57,
        code: "007",
        prenom: "JAMES",
        nom: "BOND"
 };
function displayAgentInfo() {
   
   document.getElementById("container").textContent = "MY NAME IS " + espion.nom +", "+ espion.prenom +" "+ espion.nom +" ! "+"I'M THE AGENT "+espion.code+" AND I'M "+espion.age+" YEARS OLD."
}
displayAgentInfo(espion)
});
