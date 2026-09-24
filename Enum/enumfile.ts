///let statuscode = "success"

// enum Direction{
//     up="East",
//     down="West",
//     left="North",
//     right="south"
// }

enum statuscode{
    Success = 200,
    NotFound = 404,
    ServerError = 501
}


// console.log(Direction.up);
// console.log(statuscode.ServerError);


// using function

function Apirequest(status: statuscode){
    console.log(status);
    
}

Apirequest(statuscode.ServerError)

