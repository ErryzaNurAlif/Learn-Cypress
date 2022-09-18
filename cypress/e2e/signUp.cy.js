describe("Sign Up", () => {
  it("Visit Form Sign Up", () => {
    // Visit Form Sign Up
    cy.visit("http://barru.pythonanywhere.com/daftar");
    cy.contains("Sign in/up Form for Testing");

    cy.contains("Hello, Tester");
    cy.contains("Let's see you try the automation script");

    cy.contains("Create Account");
    cy.contains("or use your email for registration");

    // Check Button Sign Up
    const button = cy.get("button");
    button.contains("Sign Up");
    button.click();
  });

  it("Contains Create Account Name, Email and Password", () => {
    // Check Name
    const name = cy.get("input[id='name_register']");
    name.should("be.visible");
    name.should("have.attr", "type", "text");
    name.should("have.attr", "placeholder", "Name");

    // Check Email
    const email = cy.get("input[id='email_register']");
    email.should("be.visible");
    email.should("have.attr", "type", "email");
    email.should("have.attr", "placeholder", "Email");

    // Check Password
    const password = cy.get("input[id='password_register']");
    password.should("be.visible");
    password.should("have.attr", "type", "password");
    password.should("have.attr", "placeholder", "Password");
  });

  it("Do Sign Up with null values", () => {
    const button1 = cy.get("input[id='signup_register']");
    button1.click();

    const button2 = cy.get("button[class='swal2-confirm swal2-styled']");
    button2.click();
  });

  it("Do Sign Up with Name null values", () => {
    // Enter Email
    const email = cy.get("input[id='email_register']").clear();
    email.type("tester@gmail.com");

    // Enter Password
    const password = cy.get("input[id='password_register']").clear();
    password.type("test123456");

    const button1 = cy.get("input[id='signup_register']");
    button1.click();

    const button2 = cy.get("button[class='swal2-confirm swal2-styled']");
    button2.click();
  });

  it("Do Sign Up with Email null values", () => {
    // Enter Name
    const name = cy.get("input[id='name_register']").clear();
    name.type("Tester Ya");

    // Enter Password
    const password = cy.get("input[id='password_register']").clear();
    password.type("test123");

    const button1 = cy.get("input[id='signup_register']");
    button1.click();

    const button2 = cy.get("button[class='swal2-confirm swal2-styled']");
    button2.click();
  });

  it("Do Sign Up with Password null values", () => {
    // Enter Name
    const name = cy.get("input[id='name_register']").clear();
    name.type("Tester Ya");

    // Enter Email
    const email = cy.get("input[id='email_register']").clear();
    email.type("tester@gmail.com");

    const button1 = cy.get("input[id='signup_register']");
    button1.click();

    const button2 = cy.get("button[class='swal2-confirm swal2-styled']");
    button2.click();
  });

  it("Do Sign Up with Email invalid", () => {
    // Enter Name
    const name = cy.get("input[id='name_register']").clear();
    name.type("Tester Ya");
    // Enter Email
    const email = cy.get("input[id='email_register']").clear();
    email.type("tester");

    // Enter Password
    const password = cy.get("input[id='password_register']").clear();
    password.type("test123");

    const button1 = cy.get("input[id='signup_register']");
    button1.click();
  });

  it("Do Sign Up with Email, Password valid", () => {
    // Enter Name
    const name = cy.get("input[id='name_register']").clear();
    name.type("Tester Ya");

    // Enter Email
    const email = cy.get("input[id='email_register']").clear();
    email.type("tester@gmail.com");

    // Enter Password
    const password = cy.get("input[id='password_register']").clear();
    password.type("tester123");

    const button1 = cy.get("input[id='signup_register']");
    button1.click();
  });
});
