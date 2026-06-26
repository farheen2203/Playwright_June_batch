function launchBrowser(browserName) 
{
if(browserName=="Chrome"){
    console.log("Launching " + browserName + " browser");
}
else{
    console.log("Browser not supported");
}
}
launchBrowser("Chrome");
function runTests(testType) 
{
    switch(testType) {
        case "smoke":
            console.log("Running smoke tests");
            break;
        case "sanity":
            console.log("Running sanity tests");
            break;
        case "regression":
            console.log("Running regression tests");
            break;
        default:
            console.log("Invalid test type");
    }
}
runTests("smoke");

