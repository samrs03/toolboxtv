const request = require("supertest")("http://localhost:5500");
const expect = require("chai").expect;

describe("GET /iecho", () => { 
  it("Returns the reversed string for the test string", async () => {
    const response = await request.get("/iecho?text=test");
    expect(response.status).to.eql(200);
  });
  it("Returns the reversed string length correctly", async () => {
    const response = await request.get("/iecho?text=test");
    expect(response.body.text.length).to.eql(4);
  });
  it('Returns the value of false for the palindrome flag',async() => {
    const response = await request.get('/iecho?text=test');
    expect(response.body.palindrome).to.eql(false);
  })
});
