///let statuscode = "success"
// enum Direction{
//     up="East",
//     down="West",
//     left="North",
//     right="south"
// }
var statuscode;
(function (statuscode) {
    statuscode[statuscode["Success"] = 200] = "Success";
    statuscode[statuscode["NotFound"] = 404] = "NotFound";
    statuscode[statuscode["ServerError"] = 501] = "ServerError";
})(statuscode || (statuscode = {}));
// console.log(Direction.up);
// console.log(statuscode.ServerError);
// using function
function Apirequest(status) {
    console.log(status);
}
Apirequest(statuscode.ServerError);
