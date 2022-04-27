function receivesAFunction(func){
    func();
}

function returnsANamedFunction(){
    function namedFunction(){}
    return namedFunction
}

function returnsAnAnonymousFunction(){
    return (function(){})
}