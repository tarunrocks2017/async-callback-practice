const events = require('events');
let eventEmit = new events.EventEmitter();

function fakeAjax(file) {
    var fake_responses = {
        "file1": "The first text",
        "file2": "The middle text",
        "file3": "The last text"
    };
    var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

    console.log("Requesting: " + file);
    setTimeout(function(){
    eventEmit.emit(file,fake_responses[file]);
    },randomDelay);
}

eventEmit.on("file1",function(){
        console.log(result);
});

eventEmit.on("file2",function(result){
        console.log(result);
    
});

eventEmit.on("file3",function(result){
        console.log(result);
});


fakeAjax("file1");
fakeAjax("file2");
fakeAjax("file3");

