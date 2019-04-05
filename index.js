// Code your solution in this file
function findMatching(drivers, matcher){
  drivers.filter(function(driver){ return driver.toUpperCase() == matcher.toUpperCase()})
}
