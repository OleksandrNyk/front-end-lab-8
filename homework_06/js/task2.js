var EUR = parseFloat(prompt("Please enter the amount in EUR", "0"));
var USD = parseFloat(prompt("Please enter the amount in USD", "0"));

var currencyRate = [33.2324, 27.1240]; //array with currency rate EUR/UAH and USD/UAH
var crossRate = currencyRate[0]/currencyRate[1]; //cross rate EUR/USD



if (USD <= 0 || EUR <= 0 || isNaN(parseFloat(USD)) || isNaN(parseFloat(EUR))) {
  console.log("Please enter correct amount");
}
  else {
    console.log(EUR + " euros are equal " + (EUR*currencyRate[0]).toFixed() + " UAH, " + USD + " dollars are equal " + (USD*currencyRate[1]).toFixed() + " UAH, one euro is equal " + crossRate.toFixed(3) + " dollars.");
}




