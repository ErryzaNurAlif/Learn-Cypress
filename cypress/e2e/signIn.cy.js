describe("Sign In", () => {
  it("Visit Form Sign In", () => {
    //Visit Form Sign In
    cy.visit("http://barru.pythonanywhere.com/daftar");
    cy.contains("Sign in/up Form for Testing");
    cy.contains("Hello, Tester!");
    cy.contains("Let's see you try the automation script");
    const button = cy.get("button");
    button.contains("Sign Up");
  });

  it("Contains Form Sign In", () => {
    // Check Title
    cy.contains("Sign in");
    cy.contains("or use your account");
    cy.contains("Forgot your password?");

    // Check Email
    const email = cy.get("input[id='email']");
    email.should("be.visible");
    email.should("have.attr", "type", "email");
    email.should("have.attr", "placeholder", "Email");

    // Check Password
    const password = cy.get("input[id='password']");
    password.should("be.visible");
    password.should("have.attr", "type", "password");
    password.should("have.attr", "placeholder", "Password");
  });

  it("Do Sign In with null values", () => {
    // Click Button
    const button1 = cy.get("input[id='signin_login']");
    button1.click();

    // Click Button
    const button2 = cy.get("button[class='swal2-confirm swal2-styled']");
    button2.click();
  });

  it("Do Sign In with Name null values", () => {
    // Enter Password
    const password = cy.get("input[id='password']").clear();
    password.type("test123456");

    // Click Button
    const button1 = cy.get("input[id='signin_login']");
    button1.click();

    // Click Button
    const button2 = cy.get("button[class='swal2-confirm swal2-styled']");
    button2.click();
  });

  it("Do Sign In with Password null values", () => {
    // Click Email
    const email = cy.get("input[id='email']").clear();
    email.type("tester@gmail.com");

    // Click Button
    const button1 = cy.get("input[id='signin_login']");
    button1.click();

    // Click Button
    const button2 = cy.get("button[class='swal2-confirm swal2-styled']");
    button2.click();
  });

  it("Do Sign In with Format Email Invalid", () => {
    // Enter Email
    const email = cy.get("input[id='email']").clear();
    email.type("tester");

    // Enter Password
    const password = cy.get("input[id='password']").clear();
    password.type("test123456");

    // Click Button
    const button1 = cy.get("input[id='signin_login']");
    button1.click();
  });

  it("Do Sign In with Password Invalid", () => {
    // Enter Email
    const email = cy.get("input[id='email']").clear();
    email.type("tester@gmail.com");

    // Enter Password
    const password = cy.get("input[id='password']").clear();
    password.type("test");

    // Click Button
    const button1 = cy.get("input[id='signin_login']");
    button1.click();

    // Click Button
    const button2 = cy.get("button[class='swal2-confirm swal2-styled']");
    button2.click();
  });

  it("Do Sign In with Email, Password valid", () => {
    // Enter Email
    const email = cy.get("input[id='email']").clear();
    email.type("tester123@gmail.com");

    // Enter Password
    const password = cy.get("input[id='password']").clear();
    password.type("tester123");

    // Click Button
    const button1 = cy.get("input[id='signin_login']");
    button1.click();

    // Click Button
    const button2 = cy.get("button[class='swal2-confirm swal2-styled']");
    button2.click();
  });
});
