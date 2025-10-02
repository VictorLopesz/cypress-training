describe("api - TEST", () => {

  const apiUrl = Cypress.env("API_URL");
  const token = Cypress.env("API_TOKEN");

  it("GET - should get all users", () => {

    cy.request({
      method: "GET",
      url: `${apiUrl}/users`,
      headers: {
        Autorization: `Bearer ${token}`,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      expect(response.body).to.have.length.greaterThan(0);
    });
  });

  it("POST - should create a new users", () => {});
  
  const newUser = {
    name: "Victor",
    email: "victorhlopes94@gmail.com"
  };
  
  cy.request({
    method: 'POST',
    url: `${apiUrl}/users`,
    headers: {
      Autorization: `Bearer ${token}`
    },

    body: newUser

  }).then((response) => {
    expect(response.status).to.eql(201);
    expect(response.body.name).to.eql(newUser.name)
  })

});
