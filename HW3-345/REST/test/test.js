var chai   = require('chai');
var assert = chai.assert,
    expect = chai.expect;

process.env.NODE_ENV = 'test'
const github = require('../index');

// Turn off logging
console.log = function(){};

describe("GitHub EndPoint Tests", function() {

    this.timeout(5000);
    it("listAuthenicatedUserRepos returns repo objects", async function() {
        
        let repos = await github.listAuthenicatedUserRepos();
        expect(repos).to.be.an('array').that.have.nested.property('[1].owner.login');
    });

    it("listBranches returns list branches", async function() {
        
      let user  = await github.getUser();
      let repos = await github.listBranches(user,"SSW-345");
      expect(repos).to.be.an('array').that.have.nested.property("[0].name").equals("HW1");
      expect(repos).to.be.an('array').that.have.nested.property("[1].name").equals("HW2");
      expect(repos).to.be.an('array').that.have.nested.property("[2].name").equals("HW3");

    });

    it("createRepo successfully creates repo", async function() {
        
      let user  = await github.getUser();
      let status = await github.createRepo(user, "Created-From-REST");
      expect(status).to.be.oneOf([201, 422]);

    });


    it("createIssue successfully creates issue", async function() {
      
      let user  = await github.getUser();
      let status = await github.createIssue(user, "Created-From-REST", "issue name", "issue body");
      expect(status).to.equal(201) ;

    });

    it("enableWikiSupport successfully enables wiki support", async function() {
      
      let user  = await github.getUser();
      let response = await github.enableWikiSupport(user, "Created-From-REST");

      expect(response).to.have.property("has_wiki");
      expect(response.has_wiki).to.equal(true);
    });
});


