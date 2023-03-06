// Write your JavaScript code here!



window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let randomPlanet = pickPlanet(listedPlanets)
       addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image)
   })

let form = document.querySelector("form");
console.log("AHHHHHHHHHH")
   // let form = document.getElementById("formSubmit")
   let list= document.getElementById("faultyItems");
   list.style.visibility = "hidden";
   
   
   form.addEventListener("submit", function(event) {
    event.preventDefault();

    let iPilot = document.querySelector("input[name=pilotName]");
    let pilot = iPilot.value;

    let iCopilot = document.querySelector("input[name=copilotName]");
    let copilot = iCopilot.value;

    let iFuelLevel = document.querySelector("input[name=fuelLevel]");
    let fuelLevel = Number(iFuelLevel.value);

    let iCargoLevel = document.querySelector("input[name=cargoMass]");
    let cargoLevel = Number(iCargoLevel.value);

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
   });
   
});