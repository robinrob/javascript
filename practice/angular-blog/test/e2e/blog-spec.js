var server = 'http://localhost:3000'

describe("Blog Application Test", function(){
    it("should test the main blog page", function(){
        browser.get(server + '/')
        expect(browser.getTitle()).toEqual("Blog App");

        //gets the blog list
        var blogList = element.all(by.repeater('blogPost in blogList'));

        //tests the size of the blogList
        expect(blogList.count()).toEqual(2);

        //checks the title of individual blog page
        browser.get(server + '/#!/blogPost/1')
        expect(browser.getTitle()).toEqual("Blog App");

        //gets the comment list
        var commentList = element.all(by.repeater('comment in comments'))

        //checks the size of the commentList
        expect(commentList.count()).toEqual(2)
    });
});
