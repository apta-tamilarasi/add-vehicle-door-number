class Vehicle{
   
   constructor(vehmake,vehmodel,vehyear){
   this.make=vehmake;
   this.model=vehmodel;
   this.year=vehyear

   }


}

class Vehicle1 extends Vehicle{
    constructor(vehmake,vehmodel,vehyear,vehdoor){
        super(vehmake,vehmodel,vehyear)
        this.door=vehdoor
    }

    vehicledetails(){
        document.write(`my favorite vehicle is  ${this.make} <br> <br> model is ${this.model} .<br> <br>Since ${this.year}
        <br> <br>Number of door is ${this.door}`)
       }
}

let veh1=new Vehicle1(prompt("Enter the vehicle name"),prompt("Enter the model"),prompt("enter the year"),prompt("enter the number of door"))
veh1.vehicledetails()



