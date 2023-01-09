const Manager = require("../assets/lib/manager")

describe("Manager", () => {

    //test for email next
    it("should accept an office number argument", () => {
        let exampleOfficeNumber = "4";
        const result = new Manager("Brandon", "123", "foster.brandon96@gmail.com", exampleOfficeNumber)
        expect(result.officeNumber).toEqual(exampleOfficeNumber);
    });

    it("getOfficeNumber should return office number", () => {

        exampleOfficeNumber = "4"

        const result = new Manager("Brandon", "123", "foster.brandon96@gmail.com", exampleOfficeNumber)
        //insert method
        expect(result.getOfficeNumber()).toEqual(exampleOfficeNumber);
    });
});