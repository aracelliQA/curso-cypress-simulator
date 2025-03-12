describe("Cypress Simulator", () => {

  beforeEach(()=> {
    cy.visit("./src/index.html?skipCaptcha=true", {
      onBeforeLoad(win) {
        win.localStorage.setItem("cookieConsent", "accepted")
      }
    })
    cy.contains("button", "Login").click();
  })
  it("Success", () => {
 
  });

  it("Error: invalid cypress command", () => {
 
  });

  it("Warning", () => {
 
  });

  it("Error: valid command without parentheses", () => {
 
  });

  it("Maximize/minimize", () => {
 
  });

  it("Running... state", () => {
 
  });

  it("Accept cookies", () => {
 
  });

  it("Decline cookies", () => {
 
  });

  it("Captcha button states", () => {
 
  });

  it("Captcha error", () => {
 
  });

  it("Run button - enable/disable states", () => {
 
  });

  it("Reset text area on logout and login", () => {
 
  });

  it("Disable Run button on logout and login", () => {
 
  });

  it("No cookies banner on login page", () => {
 
  });
})