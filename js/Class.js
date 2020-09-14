class Pet{
    constructor(name,age,type,breed,gender,services,owner,contactPhone){
        this.name=name;
        this.age=age;
        this.type=type;
        this.breed=breed;
        this.gender=gender;
        this.services=services;
        this.owner=owner;
        this.contactPhone=contactPhone;

    }
}


var ObjSalon = {
    nameSalon:"Pets",
    address: {
        street: "Km2 Carretera Tijuana Colonia Zaragoza, Mexicali BC",
        number: "49"
    },
    hours:{
        open: "8 am",
        close: "4 pm"
    },
    pets:[

    ]
}

var Porfirio = new Pet("Porfirio",7,"Dog","Cruza Husky", "Male", "Full services", "Jesus", "6862540081");

//console.log(Porfirio);

var Mistica = new Pet("Mistica",7,"Dog","Cruza Husky", "Female", "Full services", "Jesus", "6862540081");

//console.log(Mistica);

var Rafael = new Pet("Rafael",2,"Turtle","Turtle ninja", "Male", "Full services", "Jesus", "6862540081");

//console.log(Rafael);

var LaPocha = new Pet("LaPocha",4,"Dog","Pitbull", "Female", "Full services", "Jesus", "6862540081");

//console.log(LaPocha);

var Godzilla = new Pet("Godzilla",4,"Desert lizard","Lizard", "Male", "Full services", "Jesus", "6862540081");

//console.log(Godzilla);

ObjSalon.pets.push(Porfirio);
ObjSalon.pets.push(Mistica);
ObjSalon.pets.push(Rafael);
ObjSalon.pets.push(LaPocha);
ObjSalon.pets.push(Godzilla);

console.log(ObjSalon.pets);


