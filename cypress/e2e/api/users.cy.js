const apiUrl = "https://jsonplaceholder.typicode.com";

describe("API - Users Tests", () => {
  it("GET - should return status 200 and users list", () => {
    cy.request(`${apiUrl}/users`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
      expect(response.headers["content-type"]).to.include("application/json");
      cy.log(JSON.stringify(response.body));
    });
  });


  it("POST - should create new users", function () {
    cy.fixture("newUsers").as("usersData");

    cy.get("@usersData").then((usersData) => {
      usersData.forEach((newUser) => {
        cy.request({
          method: "POST",
          url: `${apiUrl}/users`,
          body: newUser,
        }).then((response) => {
          expect(response.status).to.eql(201);
          expect(response.body).to.have.property("id");
          expect(response.body.name).to.eq(newUser.name);

        cy.log((JSON.stringify(response.body)))        
        });
      });
    });
  });
});
