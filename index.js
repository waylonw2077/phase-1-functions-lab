// Code your solution in this file!
function distanceFromHqInBlocks(start) {
     let distance = start - 42
     return Math.abs(distance)
}
function distanceFromHqInFeet(start) {
    let distance = 42-start
    let distanceInFeet = distance*264
    return Math.abs(distanceInFeet)
}
function distanceTravelledInFeet(start,destination) {
    let distanceTrip = (destination - start)*264
    return Math.abs(distanceTrip)
}
function calculatesFarePrice(start, destination) {
    let distanceTrip = (destination - start)*264
    let distanceFare = Math.abs(distanceTrip)
        if (distanceFare<400) {
        return 0
        }
        if (distanceFare>400 && distanceFare<2000) {
            let fare = .02*(distanceFare - 400)
            return fare
        }
        if (distanceFare>2000 && distanceFare<2500) {
            return 25
        } else {
            return 'cannot travel that far'
        }
}