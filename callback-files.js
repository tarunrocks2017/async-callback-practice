function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function getFile(...file) {
	fakeAjax(...file,function(text){
        let fileNames = {};
        if(!fileNames.hasOwnProperty(text)){
            fileNames[text] = 
        }
		// what do we do here?
	});
}

// request all files at once in "parallel"
getFile("file1","file2","file3");

// getFile("file2");
// getFile("file3");
