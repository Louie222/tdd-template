const stringCalculator = require("./stringCalculator.js")

describe(`stringCalculator`, () => {
    it(`returns " when receives ""`, () => {
        const result = stringCalculator.add("")   
        expect(result).toEqual("")
    })
    it ('returns "1" when receives "1"', () => {
        const result = stringCalculator.add("1")   
        expect(result).toEqual("1")  
})

it ('returns "3" when receives "1,2"', () => {
    const result = stringCalculator.add("1,2")   
    expect(result).toEqual("3")  
})

it ('returns 10 when receives "1,2,7"', () => {
        const result = stringCalculator.add("1,2,7")   
        expect(result).toEqual("10") 
})
})
it ('returns 15 when receives "1,2,7,5"', () => {
   const result = stringCalculator.add("1,2,7,5")   
    expect(result).toEqual("15") 
})
