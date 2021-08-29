

//класс для экономичного полета
class AirEconom{
    constructor(weight, distance){
       this.weight = weight;
       this.distance = distance;
    }

    full_summ_econom_weight(y){//сумма за багаж
            y = this.weight; 
            let price = 4000;//цена при перевесе
            if (y <= 5 ){
                 y * 0;
                 return '';
            } else if (y <= 20 && y > 5){
                return y * price;
            }  else {
                alert("багаж слишком велик");
                return window.reload(); 
            } 
        }
    full_summ_econom_distance(x){//стоимость от длительности пути
        x = this.distance;
        const ONE_KM_TAX = 4;
        return ONE_KM_TAX * x;
    } 
}

//экономичный
let mass_eco= document.getElementById("weight").innerHTML;
let dist_eco = document.getElementById("distance").innerHTML;
//let ages = document.getElementById("ago").innerHTML;
let myAirEc = new AirEconom(mass_eco, dist_eco);
let summ_eco = myAirEc.full_summ_econom_distance() + myAirEc.full_summ_econom_weight()
document.getElementById("econom").innerHTML = "Эконом : " + summ_eco;


//Продвинутый
class AirPrime{
    constructor(weight, distance, age){
       this.weight = weight;
       this.distance = distance;
       this.age = age;
    }

    full_summ_prime_weight(y){//сумма за багаж
            y = this.weight; 
            let price = 5000;//цена при перевесе
            if (y <= 20 ){
                 y * 0;
                 return '';
            } else if (y <= 50 && y > 20){
                return y * price;
            }  else {
                alert("багаж слишком велик");
                return window.reload(); 
            } 
        }
    full_summ_prime_distance(x){//стоимость от длительности пути
        x = this.distance;
        const ONE_KM_TAX = 8;
        return ONE_KM_TAX * x;
    }
    full_summ_prime_age(z){
        z = this.age;
        x = this.distance;
        if (z <= 7){
            return (ONE_KM_TAX * x) * 0.3 
        }

    }
}


//продвинутый
let mass_prime= document.getElementById("weight").innerHTML;
let dist_prime = document.getElementById("distance").innerHTML;
let ages = document.getElementById("ago").innerHTML;
let myAirPrime = new AirPrime(mass_prime, dist_prime, ages);
let summ_prime = myAirPrime.full_summ_econom_distance() + 
                                myAirPrime.full_summ_econom_weight() +
                                    myAirPrime.full_summ_prime_age();

document.getElementById("prime").innerHTML = "Продвинутый : " + summ_prime;


//Супер
class AirLux{
    constructor(weight, distance, age){
       this.weight = weight;
       this.distance = distance;
       this.age = age;
    }

    full_summ_lux_weight(y){//сумма за багаж
            y = this.weight; 
            let price = 0;//цена при перевес
            let max_weight = 50;
            if (y >= max_weight){
                alert("Багаж с таким весом провозить нельзя");
                return window.reload();
            } else{
                return price;
            }
        }
    full_summ_lux_distance(x){//стоимость от длительности пути
        x = this.distance;
        const ONE_KM_TAX = 15;
        return ONE_KM_TAX * x;
    }
    full_summ_lux_age(z){
        z = this.age;
        x = this.distance;
        if (z <= 16){
            return (ONE_KM_TAX * x) * 0.3 
        }

    }
}


//супер
let mass_lux= document.getElementById("weight").innerHTML;
let dist_lux = document.getElementById("distance").innerHTML;
let ages = document.getElementById("ago").innerHTML;
let myAirLux = new AirLux(mass_lux, dist_lux, ages);
let summ_prime = myAirLux.full_summ_econom_distance() + 
                                myAirLux.full_summ_econom_weight() +
                                    myAirLux.full_summ_prime_age();

document.getElementById("lux").innerHTML = "Люкс : " + summ_prime;

