const{registrationStore} = require('../db/registrationDb');

const add = (newCar) => {
    newCar.plateNumber = registrationStore.length + 1;
    registrationStore.push(newCar);

    console.log("\n Added to the registration");
    console.log(newCar);

};

const displayAll = ( ) => {
  console.log("\n All the car in store\n");
    console.log(registrationStore);
};


const update = (plateNumber,key,value) => {

    var exists = registrationStore.find(ele=>ele.plateNumber==plateNumber);
    if(!exists){
        console.log("\n Car not found");
        return;
    }else{
        exists[key] = value;
        console.log("\n Car updated");
        console.log(exists);
    }
};

const remove = (plateNumber,key) => {
    var exists = registrationStore.find(ele=>ele.plateNumber==plateNumber);
    if(!exists){
        console.log("\n Car not found");
        return;
    }else{
        var remaining = [plateNumber,key];
        remaining = registrationStore.filter(ele=>ele.plateNumber!==plateNumber)
        console.log("\n Car removed");
        console.log(remaining);


    //   var exists = registrationStore.find(ele=>ele.plateNumber==plateNumber);
    //   if(!exists){
    //     console.log("\n Car not found");
    //     return;
    //   }else{
    //     var plateNumber = registrationStore.plateNumber(exists);
    //     registrationStore.splice(plateNumber,"RRB202");
    //     console.log("\n Car removed");
    //     console.log(registrationStore);
    //   }

    }
}


















module.exports ={
add,
displayAll,
update,
remove,
}