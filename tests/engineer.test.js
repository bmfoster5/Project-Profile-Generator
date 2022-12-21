const Engineer = require("../assets/lib/engineer")

describe("Engineer", () => {

    it("should accept an github argument", () => {
        let exampleGithub = "bmfoster5"
        //stuff
        const result = new Engineer("Brandon", "123", "foster.brandon96@gmail.com", exampleGithub)
        expect(result.github).toEqual(exampleGithub);
    });

    it("getGithub should return Github", () => {

        exampleGithub = "bmfoster5"

        const result = new Engineer("Brandon", "123", "foster.brandon96@gmail.com", exampleGithub)
        //insert method
        expect(result.getGithub()).toEqual(exampleGithub);
    });
});