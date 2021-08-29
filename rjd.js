const { WSAEINVALIDPROCTABLE } = require("constants");

//класс для экономичной поездки
class TrainEconom{
    constructor(weight, distance, age){
       this.weight = weight;
       this.distance = distance;
       this.age = age;
    }

    full_summ_econom_weight(y){//сумма за багаж
            y = this.weight; 
            let price = 50;//цена при перевесе
            if (y <= 15 ){
                 y * 0;
                 return '';
            } else if (y <= 50 && y > 15){
                return y * price;
            }  else {
                alert("багаж слишком велик");
                return window.reload(); 
            } 
        }
    full_summ_econom_distance(x){//стоимость от длительности пути
        x = this.distance;
        const ONE_KM_TAX = 0.5;
        return ONE_KM_TAX * x;
    } 
    full_summ_econom_age(z){
        z = this.age;
        x = this.distance;
        if (z <= 5){
            return (ONE_KM_TAX * x) * 0.5 
        }

    }
}

//экономичный
let mass_eco= document.getElementById("weight").innerHTML;
let dist_eco = document.getElementById("distance").innerHTML;
let ages = document.getElementById("ago").innerHTML;
let myTrainEco = new AirEconom(mass_eco, dist_eco);
let summ_eco = myTrainEco.full_summ_econom_distance() + 
                            myTrainEco.full_summ_econom_weight()
                            + full_summ_econom_age();
document.getElementById("econom-rjd").innerHTML = "Эконом : " + summ_eco;


//Продвинутый
class TrainPrime{
    constructor(weight, distance, age){
       this.weight = weight;
       this.distance = distance;
       this.age = age;
    }

    full_summ_prime_weight(y){//сумма за багаж
            y = this.weight; 
            let price = 50;//цена при перевесе
            if (y <= 20 ){
                 y * 0;
                 return '';
            } else if (y <= 60 && y > 20){
                return y * price;
            }  else {
                alert("багаж слишком велик");
                return window.reload(); 
            } 
        }
    full_summ_prime_distance(x){//стоимость от длительности пути
        x = this.distance;
        const ONE_KM_TAX = 2;
        return ONE_KM_TAX * x;
    }
    full_summ_prime_age(z){
        z = this.age;
        x = this.distance;
        if (z <= 8){
            return (ONE_KM_TAX * x) * 0.3 
        }
    }
}


//продвинутый
let mass_prime= document.getElementById("weight").innerHTML;
let dist_prime = document.getElementById("distance").innerHTML;
let ages = document.getElementById("ago").innerHTML;
let myTrainPrime = new TrainPrime(mass_prime, dist_prime, ages);
let summ_prime = myTrainPrime.full_summ_prime_distance() + 
                                myTrainPrime.full_summ_prime_weight() +
                                    myTrainPrime.full_summ_prime_age();

document.getElementById("prime-rgd").innerHTML = "Продвинутый : " + summ_prime;


//Супер
class TrainLux{
    constructor(weight, distance, age){
       this.weight = weight;
       this.distance = distance;
       this.age = age;
    }

    full_summ_lux_weight(y){//сумма за багаж
            y = this.weight; 
            if (y >= 60){
                alert("Багаж с таким весом провозить нельзя");
                return window.reload();
            } else{
                return '';
            }
        }
    full_summ_lux_distance(x){//стоимость от длительности пути
        x = this.distance;
        const ONE_KM_TAX = 4;
        return ONE_KM_TAX * x;
    }
    full_summ_lux_age(z){
        z = this.age;
        x = this.distance;
        if (z <= 16){
            return (ONE_KM_TAX * x) * 0.2 
        }

    }
}


//супер
let mass_lux= document.getElementById("weight").innerHTML;
let dist_lux = document.getElementById("distance").innerHTML;
let ages = document.getElementById("ago").innerHTML;
let myTrainLux = new AirPrime(mass_lux, dist_lux, ages);
let summ_lux = myTrainLux.full_summ_lux_distance() + 
                                myTrainLux.full_summ_lux_weight() +
                                    myTrainLux.full_summ_lux_age();

document.getElementById("lux-rjd").innerHTML = "Люкс : " + summ_lux;

