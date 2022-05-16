function receivesAFunction(callBack){
    //callBack(); //is there a difference between these two?
    return callBack();
}

function callBack(){
    return "This is a callback function!";
}

function returnsANamedFunction(){
    return function namedFunction(){
        //console.log("this is a named function?");
        return "This is a named function";
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        return "this is an anonymous function";
    }
}