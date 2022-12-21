const Intern = require("../assets/lib/intern")

describe("Intern", () => {

    //test for email next
    it("should accept an school argument", () => {
        let exampleSchool = "WCU";
        const result = new Intern("Brandon", "123", "foster.brandon96@gmail.com", exampleSchool)
        expect(result.school).toEqual(exampleSchool);
    });

    it("getSchool should return school", () => {

        exampleSchool = "WCU"

        const result = new Intern("Brandon", "123", "foster.brandon96@gmail.com", exampleSchool)
        //insert method
        expect(result.getSchool()).toEqual(exampleSchool);
    });
});