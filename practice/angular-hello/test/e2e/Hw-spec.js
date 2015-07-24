var server = "http://localhost:3000"

describe("Hello World Test", function(){
    it("should test the main page", function(){
        browser.get(server + "/");
        expect(browser.getTitle()).toEqual("AngularJS Hello World");

        var msg = element(by.binding("message")).getText();
        expect(msg).toEqual("Hello World");


        browser.get(server + '/#!/show');
        expect(browser.getTitle()).toEqual("AngularJS Hello World");

        var msg = element(by.binding("message")).getText();
        expect(msg).toEqual("Show The World");


        browser.get(server + "/#!/newCustomer");


        element(by.model("name")).sendKeys("tester");
        element(by.model("city")).sendKeys("Atlanta");
        element(by.id("f1")).click();


        browser.get(server + "/#!/addedCustomer/tester/Atlanta");

        var msg = element(by.binding("customerName")).getText();
        expect(msg).toEqual("Customer Name: tester");

        var msg = element(by.binding("customerCity")).getText();
        expect(msg).toEqual("Customer City: Atlanta");
    });
});