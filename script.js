// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })

   let rLaunchForm = document.querySelector("form")
   let list= document.querySelector("faultyItems")
   list.style.visibility = "hidden"
   form.addEventListener("submit", function() {
let iPilot = document.querySelector("input[name = pilotName]")
let pilot = iPilot.value;
let iCopilot = document.querySelector("input[name = copilotName]")
let copilot = iCopilot.value;
let iFuelLevel = document.querySelector("input[name = fuelLevel]")
let fuelLevel = Number(iFuelLevel.value);
let iCargoLevel = document.querySelector("input[name = cargoMass]")
let cargoLevel = Number(iCargoLevel.value);
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)   
   });
   
});