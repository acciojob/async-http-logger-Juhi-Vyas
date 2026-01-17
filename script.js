cy.visit("http://localhost:3000", {
  onBeforeLoad(win) {
    cy.stub(win.console, "log").as("consoleLog");
  }
});

cy.get("@consoleLog").should("be.calledWith", {
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false
});
