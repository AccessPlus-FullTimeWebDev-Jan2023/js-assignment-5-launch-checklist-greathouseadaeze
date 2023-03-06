// Write your helper functions here!

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let planetStuff = document.getElementById("missionTarget")
    planetStuff.innerHTML =
   
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
/* Here is the HTML formatting for our mission target div. */

}

function validateInput(testInput) {
    if(testInput === ""){
        return "Empty"
    } else if (!isNaN(testInput)){
        return "Is a Number"
    } else {
        return "Not a Number"
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let rPilot= document.getElementById("pilotStatus")
   let rCopilot= document.getElementById("copilotStatus")
   let rFuelLevel = document.getElementById("fuelStatus")
   let rCargoFuel = document.getElementById("cargoStatus")
   let rLaunchStatus = document.getElementById("launchStatus")
   if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    alert("All fields are required!");
    }else if(validateInput(pilot) !== "Not a Number" || validateInput(copilot) !== "Not a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Make sure to enter valid information for each field!")
    } else {
            list.style.visibility = "visible"
            rPilot.innerHTML = `Pilot ${pilot} is ready for launch`
            rCopilot.innerHTML = `Co-pilot ${copilot} is ready for launch`
            if(fuelLevel < 10000 && cargoLevel <= 10000){
                rFuelLevel.innerHTML = "Fuel level too low for launch"
                rCargoFuel.innerHTML = "Cargo mass low enough for launch"
                rLaunchStatus.innerHTML = "Shuttle Not Ready for Launch"
                rLaunchStatus.style.color = "#C7254E"    
            } else if (fuelLevel >= 10000 && cargoLevel > 10000){
                rFuelLevel.innerHTML = "Fuel level high enough for launch"
                rCargoFuel.innerHTML = "Cargo mass too heavy for launch"
                rLaunchStatus.innerHTML = "Shuttle Not Ready for Launch"
                rLaunchStatus.style.color = "#C7254E"
            } else if(fuelLevel < 10000 && cargoLevel > 10000) {
                    rFuelLevel.innerHTML= "Fuel level too low for launch"
                    rCargoFuel.innerHTML= "Cargo mass too heavy for launch"
                    rLaunchStatus.innerHTML = "Shuttle Not Ready for Launch"
                    rLaunchStatus.style.color = "#C7254E"
            } else {
                rFuelLevel.innerHTML = "Fuel level high enough for launch"
                rCargoFuel.innerHTML = "Cargo mass low enough for launch"
                rLaunchStatus.innerHTML = "Shuttle is Ready for Launch"
                rLaunchStatus.style.color = "#419F6A"
            }
        }  
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) { 
        return response.json()
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
