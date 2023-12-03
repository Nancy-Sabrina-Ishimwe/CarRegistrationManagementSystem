const { add,displayAll,update,remove} = require('./controller/registrationManage.js');

 const newCar = {

 plateNumber: "RVK100",
 model: "Lamborgini",
 color:"pink",
 manufacturingYear: 2023,
 carOwner: "Marie Aimee",
 cost:9000
 }

 add(newCar);
 displayAll();

 update("RRB202", "carOwner","Umulisa");

 remove("RRB202");


