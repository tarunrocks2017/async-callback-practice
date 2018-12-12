function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": null,
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);
	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}
let fileStatus = [0,0,0];
function getFile(file) {
  return new Promise((resolve,reject) => {
		return  fakeAjax(file,function(text){
                    if(text != null)
                        resolve(text) ;
                    else 
                        reject("text is null");    
		});
  })
 }
 let fileOnePromise = getFile("file1");
 let fileTwoPromise = getFile("file2");
 let fileThreePromise = getFile("file3");
 
 fileOnePromise.then((result) => {
	console.log(result);
	return fileTwoPromise ;
}).then(result => {
	console.log(result);
	return fileThreePromise ;
}).then(result => {
	console.log(result);
}).catch(error => console.log(error));
