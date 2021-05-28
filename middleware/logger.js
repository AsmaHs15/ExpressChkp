

const path = require("path");

function logger(req,res,next)
{

let today = new Date();
let hours = today.getHours();
let day = today.getDay();


if  ( day>= 0 &&  day <= 5  &&  hours >= 9 && hours <= 17 )

            { 
                next();
            }
else
       {
                 //res.send("oooppppppppppppps!!!")
           res.sendFile(path.join(__dirname, "..", "Public", "oops.html"));

        }

 
//console.table({methode : req.method ,  path : req.path});
}


module.exports = logger