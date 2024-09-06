document.addEventListener('DOMContentLoaded', function() {
 const espion = {
        age: 57,
        code: "007",
        prenom: "JAMES",
        nom: "BOND",
 };
const agentString = JSON.stringify(espion)
const car = "Astone Martin"

function addCar(agentString,car) {
       
    const obj = JSON.parse(agentString)
       obj.car = car;
       return car;

}
console.log(addCar(agentString,car))
})
