// code your solution here
function saturdayFun(activity='roller-skate'){
    return'This Saturday, I want to ' +activity+'!';
}
saturdayFun('bathe my dog');
 const mondayWork= function(activity='go to the office'){
    return "This Monday, I will " +activity+".";
}

function wrapAdjective(result='*'){
        return function(inner="handsome"){
            return `You are ${result}${inner}${result}!`
        }
}
