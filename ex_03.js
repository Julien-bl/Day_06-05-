document.addEventListener('DOMContentLoaded', function() {
    const agent = {
           age: 57,
           code: "007",
           lastname: "JAMES",
          firstname: "BOND",
    };
   
   function addCarToAgent(agent,brand,model,color,power) {

    const car = {
        brand: brand,
        model: model,
        color: color,
        power: power
    };
 agent.car= {
    brand: brand,
    model: model,
    color: color,
    power: power
};
    const obj = agent.car  
    return obj

   }

addCarToAgent(agent, "Aston Martin", "DB5", "Silver", "450");

console.log(agent.car)
shareThatBeauty(agent)
   })
