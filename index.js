function convertToRoman(num) {
    let thous = Math.floor(num/1000);
    let hunds = Math.floor(num % 1000/100);
    let tens = Math.floor(num % 100/10);
    let ones = Math.floor(num % 10);
    let rom = "";
    for (let i = 0; i < thous; i++){
        rom  += "M";
    }
    if (hunds === 9) {
        rom += "CM";
    }else if (hunds === 4) {
        rom += "CD"
    }else{       
        for (let i = 0; i < Math.floor(num % 1000 / 500); i++){
            rom += "D"
        }
        for (let i = 0; i < Math.floor(num % 500/ 100); i++){
            rom += "C";
        }
    }
    if (tens === 9) {
        rom += "XC";
    }else if (tens === 4) {
        rom += "XL"
    }else{
        for (let i = 0; i < Math.floor(num % 100 / 50); i++){
            rom += "L";
        }
        for (let i = 0; i < Math.floor(num % 50/ 10); i++){
            rom += "X";
        }
    }
    if (ones === 9) {
        rom += "IX";
    }else if (ones === 4) {
        rom += "IV"
    }else{
        for (let i = 0; i < Math.floor(num % 10 / 5); i++){
            rom += "V";
        }
        for (let i = 0; i < Math.floor(num % 5); i++){
            rom += "I";
        }
    }
    return rom;
}

convertToRoman(36);