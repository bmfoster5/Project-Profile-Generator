const Employee = require("../assets/lib/employee")

describe("Employee", () => {
    // test description saying this should test if constructor creates and object
    it("should create an empty object using constructor", () => {

        // new Employee instance creates a "{ }"
        const result = new Employee()
        // We expect 'result' type to be an empty object
        expect(typeof (result)).toBe("object");
    });
    //test for name
    it("should accept a name argument", () => {

        let exampleName = "Brandon"

        // new Employee instance with name argument
        const result = new Employee(exampleName)
        // We expect 'result' type to be and empty object
        expect(result.name).toEqual(exampleName);
    });

    it("should accept an id argument", () => {

        let exampleId = "123"

        // new Employee instance with placeholder for name parameter for name then example id for id parameter
        //each successive test will require that place holders be present for other existing parameters in
        //you classes - so when you test for email the instance should be new Employee("Coulson", "123", exampleEmail)
        const result = new Employee("Brandon", exampleId)
        // We expect 'result' type to be and empty object
        expect(result.ID).toEqual(exampleId);
    });

    //test for email next
    it("should accept an email argument", () => {
        let exampleEmail = "foster.brandon96@gmail.com"
        //stuff
        const result = new Employee("Brandon", "123", exampleEmail)
        expect(result.email).toEqual(exampleEmail);
    });

    //test for getName() method (then getId(), then getEmail())
    it("getName() should return name", () => {

        exampleName = "Brandon"

        const result = new Employee(exampleName)
        //insert method
        expect(result.getName()).toEqual(exampleName);
    });

    it("getID() should return ID", () => {

        exampleId = "123"

        const result = new Employee("Brandon", exampleId)
        //insert method
        expect(result.getID()).toEqual(exampleId);
    });

    it("getEmail() should return email", () => {

        exampleEmail = "foster.brandon96@gmail.com"

        const result = new Employee("Brandon", "123", exampleEmail)
        //insert method
        expect(result.getEmail()).toEqual(exampleEmail);
    });
});