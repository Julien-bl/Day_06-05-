document.addEventListener('DOMContentLoaded', function() {
    const agent = {
           age: 57,
           code: "007",
           prenom: "JAMES",
           nom: "BOND",
    };
   const car = {} //les champs seront à ajouter dans la fonction
   
   function addCarToAgent(agent,brand,model,color,power) {

    const car = {
        brand: brand,
        model: model,
        color: color,
        power: power
    };

    const obj = agent.car  
    return obj

   }

addCarToAgent(agent, "Aston Martin", "DB5", "Silver", "450");
shareThatBeauty(agent)
   })
