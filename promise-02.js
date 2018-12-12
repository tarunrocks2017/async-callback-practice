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

function getFile(file) {
  return new Promise((resolve,reject) => {
          fakeAjax(file,function(text){
                if(file != null)
                    resolve(text) ;
                else 
                    reject("file value is null ");
        });
  })
 }
 let fileOnePromise = getFile("file1");
 let fileTwoPromise = getFile(null);
 let fileThreePromise = getFile("file3");
                                                        // async deals with promises only 
 async function show(){
     try{
        let file1 = await fileOnePromise ;
        console.log(file1);  
        let file2 = await fileTwoPromise;
        console.log(file2);
        let file3 = await fileThreePromise ;
        console.log(file3);
     }catch(err){
         console.log(err);
     }
 }
 show();
