// Code your solution in this file!
const distanceFromHqInBlocks = function(blocks){
    return Math.abs(blocks - 42);
}

const distanceFromHqInFeet = function(blocks){
    return Math.abs(blocks-42)*264;
}
const distanceTravelledInFeet = function(start, destination){
    return Math.abs(destination-start)*264;
}
const calculatesFarePrice = function(start, destination){
    let distance = Math.abs(destination-start)*264;
    if (distance <=400){
        return 0;
    }else if (distance<2000){
        return (distance-400)*0.02;
    }else if (distance<2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }
}