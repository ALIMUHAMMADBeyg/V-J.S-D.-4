document.getElementById("button").addEventListener("click",
 loadData);

 function loadData(){
    // CREATE AN XHR OBJECT
    console.log(1);
    //create an xhr Object 
    const xhr = new XMLHttpRequest();

    //OPEN
    xhr.open("GET", "data.txt", true);

    console.log('READYSTATE' , xhr.readyState)

  //  xhr.onload = function () {
 //operators
        //== equal to
        //==== equal value and equal type
        //!= not equal
        //!== not equal value or not equal type
        //> greater than
        //< less than
        //>= greater than or equal to
        //<= less than or equal to
       //? ternary operator

// if(this.status === 200){
//console.log(this.responseText);
 //}
   // }
xhr.onreadystatechange = function () {
if(this.status === 200 && this.readyState === 4){
console.log(this.responseText )
}
}
// working with
    xhr.send();
    
    //readyState Values
    //0: request not initialized
    //1: server connection established
    //2: request recieved 
    //3: processing request
    //4:request finished and the response is ready

    //HTTP statuses  
    //200:"ok"
    //403:"forbidden"
    //404:"not found"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
 }

 