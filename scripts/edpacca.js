console.log("EDPACCA Loaded edpacca");

Hooks.on("init", function() {
    console.log(" EDPACCA This code runs once the Foundry VTT software begins its initialization workflow.");
});
  
Hooks.on("ready", function() {
    console.log("EDPACCA This code runs once core initialization is ready and game data is available.");
});