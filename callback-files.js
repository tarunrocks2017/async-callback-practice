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
let fileObject = {} ;
let func_count = 0 ;
function getFile(file) {

	  fakeAjax(file,function(text){
		let temp = {};
		temp["filetext"] = text ;
		temp["count"] = 0 ;
		fileObject[file] = temp ;
		func_count++ ;

		if(func_count == 1){

			if(file == "file1"){
				console.log(text);
				fileObject["file1"].count = 1 ;
			}
		}else if(func_count == 2){

			if(file == "file1"){
				console.log(text);
				fileObject["file1"].count = 1;

				if(fileObject.hasOwnProperty("file2")){
					console.log(fileObject["file2"].filetext);
					fileObject["file2"].count = 1 ;
				}
			}else if(file == "file2"){

				if(fileObject.hasOwnProperty("file1")){
					if(fileObject["file1"].count == 1){
						console.log(text);
						fileObject["file2"].count = 1 ;
					}
				}
			}
		}else if(func_count == 3){

			if(file == "file1"){

				console.log(text);
				fileObject["file1"].count = 1 ;
				console.log(fileObject["file2"].filetext);
				fileObject["file2"].count =1 ;
				console.log(fileObject["file3"].filetext);
				fileObject["file3"].count = 1;

			}else if(file == "file2"){

				if(fileObject["file1"].count == 1){
					console.log(text);
					fileObject["file2"].count = 1;
					console.log(fileObject["file3"].filetext);
					fileObject["file3"].count = 1;
				}
			}else if(file == "file3"){

				if(fileObject["file1"].count == 1 && fileObject["file2"].count == 1){
					console.log(text);
					fileObject["file3"].count = 1 ;
				}
			}
		}
		 
	});

}

// request all files at once in "parallel"
// getFile("file3","file2","file1");
getFile("file1");
getFile("file2");
getFile("file3");
;