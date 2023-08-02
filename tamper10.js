console.log("Starting...")

function arrToStr(byteArr) {
    var tmp = "";
    for (var k = 0; k < byteArr.length; k++) {
    tmp += String.fromCharCode(byteArr[k]);
    }
    return tmp;
}

Java.perform(function(){
    var MainActivity = Java.use('sg.vantagepoint.uncrackable1.MainActivity')
    MainActivity.a.implementation = function(arg1){
        
    }

    console.log("Finding Password....");
    
    var classAA = Java.use("sg.vantagepoint.a.a");
    // Method a() in a.a
    classAA.a.implementation = function(x1, x2) {
    // Call this function and store its return value
    //x1 and x2 are the variables the _app_ is calling with.
    var rawFunctionCall = this.a(x1, x2);
    // Convert Byte[] to String
    var output = arrToStr(rawFunctionCall);
    // Log the password.
    console.log("=====> " + output);
    return rawFunctionCall;
    };
})