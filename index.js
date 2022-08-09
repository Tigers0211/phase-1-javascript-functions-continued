// code your solution here
function saturdayFun(plan = "roller-skate"){

return `This Saturday, I want to ${plan}!`
}

function mondayWork(job = "go to the office"){
    return `This Monday, I will ${job}.`
}

function wrapAdjective(char = '*'){
    const emphatic = function (adj = 'special'){
        return `You are ${char}${adj}${char}! `
    }
    return emphatic;

}