const stringCalculator = {

    add: function(stringNumber) {
        let result = 0;
        const arrayOfNumbers = stringNumber.split(",");

        if (arrayOfNumbers.length === 1){
            return stringNumber;
        }
        else {
            arrayOfNumbers.forEach(element => {
                result = result + Number(element);
            })
            return (result.toString());
        }
     
    }

}

module.exports = stringCalculator;



