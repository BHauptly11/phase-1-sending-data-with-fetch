//const configurationObject = {
  //  method: "POST",
    //headers: {
      //  "Content-Type": "application/json",
        //"Accept": "application/json",
    //},
    //body: JSON.stringify({
      //  dogName: "Byron",
       // dogBreed: "Poodle",
  //  }),
//};

//fetch("http://localhost:3000/dogs", configurationObject);

//learn test
//submitData = (name, email) => {
 

    //return fetch("http://localhost:3000/users", configurationObject)
    //.then(function(response) {
    //    return response.json(body);  
   // })
   // .then(function (object){
    //    return (object);
        
  //  })
   // .catch(function (error) {
    //    console.log(error.message);
  //  });
//}

//const configurationObject = {
  //  method: "POST",
    //headers: {
      //  "Content-Type": "application/json",
      //  "Accept": "application/json",
   // },
    //body: JSON.stringify({
      //  name: name,
       // email: email,
    //})
//}   



function submitData(name,email){
    fetch("http://localhost:3000/users", {
        method: "POST",

        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,

        })
    
    .then(function(response){
    return response.json();
    })
})
}