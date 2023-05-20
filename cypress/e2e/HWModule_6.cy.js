const url = "https://jsonplaceholder.typicode.com/posts";

describe("rest api tests", () => {
  it("should test jsonplaceholder API", function () {
    cy.request(url).then((response) => {
      const body = JSON.stringify(response.body);
      expect(response.status).to.eq(200);
      cy.log(body);
    });

    cy.request({
      method: "POST",
      url: url,
      body: JSON.stringify({
        title: "ironmaiden",
        body: "eddie",
        userId: 1,
      }),
      headers: { "Content-typeof": "application/json" },
    }).then((response) => {
      const body = JSON.stringify(response.body);
      expect(response.status).to.eq(201);
      cy.log(body);
    });

    it("should change body with PUT method", function () {
      cy.request({
        method: "PUT",
        url: `${url}/1`,
        body: {
          body: "METAL",
        },
        headers: { "Content-typeof": "application/json" },
      }).then((response) => {
        expect(response.status).to.eq(200);
        const body = JSON.stringify(response.body.body);
        expect(body).to.include("METAL");
      });

      it("should delete resource", function () {
        cy.request({
          method: "DELETE",
          url: `${url}/1`,
          headers: { "Content-typeof": "application/json" },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.be.empty;
        });
      });
    });
  });
});
