// code your solution here
function saturdayFun (activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!` 
}

function  mondayWork (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(b1 = '*') {
    return function (a1="special") {
        return `You are ${b1}${a1}${b1}!`
    }
}