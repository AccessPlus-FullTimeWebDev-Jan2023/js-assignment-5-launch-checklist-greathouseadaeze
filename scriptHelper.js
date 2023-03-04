// Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if(testInput === ""){
        return "Empty"
    } else if (!isNaN(testInput)){
        return "Is a Number"
    } return "Not a number"
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let rPilot= document.getElementById("pilotStatus")
   let rCopilot= document.getElementById("copilotStatus")
   let rFuelLevel = document.getElementById("fuelStatus")
   let rCargoFuel = document.getElementById("cargoStatus")
//    let rLaunchStatus = document.getElementById("launchStatus")
   if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    alert("All fields are required!");
    }else if(validateInput(pilot) !== "Not a number" || validateInput(copilot) !== "Not a number" || validateInput(fuelLevel) === "Not a number" || validateInput(cargoLevel) === "Not a number") {
        alert("Make sure to enter valid information for each field!")
    } else {
            list.style.visibility = "visible"
            rPilot.innerHTML = `Pilot ${pilot} is ready for launch`
            rCopilot.innerHTML = `Co-pilot ${copilot} is ready for launch`
            let rLaunchStatus = document.getElementById("launchStatus")
            if(fuelLevel < 10000 && cargoLevel > 10000) {
                rFuelLevel.innerHTML= "Fuel level too low for launch"
                rCargoFuel.innerHTML= "Cargo mass too heavy for launch"
                rLaunchStatus.innerHTML = "Shuttle Not Ready for Launch"
                rLaunchStatus.style.color = "#C7254E"    
            } else {
                rFuelLevel.innerHTML = "Fuel level high enough for launch"
                rCargoFuel.innerHTML = "Cargo mass low enough for launch"
                rLaunchStatus.innerHTML = "Shuttle Ready for Launch"
                rLaunchStatus.style.color = "#419F6A"
            }
        }  
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
