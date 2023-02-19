$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Registration Test",
  "description": "",
  "id": "registration-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5661045300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I accept cookie policy",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on My account tab",
  "keyword": "When "
});
formatter.match({
  "location": "Register.iAmOnHomepage()"
});
formatter.result({
  "duration": 124950600,
  "status": "passed"
});
formatter.match({
  "location": "Register.iAcceptCookiePolicy()"
});
formatter.result({
  "duration": 120057101,
  "status": "passed"
});
formatter.match({
  "location": "Register.iClickOnMyAccountTab()"
});
formatter.result({
  "duration": 525779300,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "As a User I should navigate to My account page successfully",
  "description": "",
  "id": "registration-test;as-a-user-i-should-navigate-to-my-account-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#    Given I am on homepage"
    },
    {
      "line": 10,
      "value": "#    And I accept cookie policy"
    },
    {
      "line": 11,
      "value": "#    When I click on My account tab"
    }
  ],
  "line": 12,
  "name": "I should navigate to login to your account page successfully and verify text \"Log in to your account\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Log in to your account",
      "offset": 78
    }
  ],
  "location": "Register.iShouldNavigateToLoginToYourAccountPageSuccessfullyAndVerifyText(String)"
});
formatter.result({
  "duration": 1227260800,
  "status": "passed"
});
formatter.after({
  "duration": 675365399,
  "status": "passed"
});
formatter.before({
  "duration": 2853206100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I accept cookie policy",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on My account tab",
  "keyword": "When "
});
formatter.match({
  "location": "Register.iAmOnHomepage()"
});
formatter.result({
  "duration": 29200,
  "status": "passed"
});
formatter.match({
  "location": "Register.iAcceptCookiePolicy()"
});
formatter.result({
  "duration": 396592000,
  "status": "passed"
});
formatter.match({
  "location": "Register.iClickOnMyAccountTab()"
});
formatter.result({
  "duration": 665535699,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should register successfully with valid credentials",
  "description": "",
  "id": "registration-test;user-should-register-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "#    Given I am on homepage"
    },
    {
      "line": 17,
      "value": "#    And I accept cookie policy"
    },
    {
      "line": 18,
      "value": "#    When  I click on My account tab"
    }
  ],
  "line": 19,
  "name": "I click on Sign up link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter email \"create@gmail.com\" in email field",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter same email \"create@gmail.com\" in confirm email field",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"Asdfgh@12345\" in create password field",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter same password \"Asdfgh@12345\" in confirm your password field",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see text \"You\u0027ve got mail.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.iClickOnSignUpLink()"
});
formatter.result({
  "duration": 1726258601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create@gmail.com",
      "offset": 15
    }
  ],
  "location": "Register.iEnterEmailInEmailField(String)"
});
formatter.result({
  "duration": 1479114399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create@gmail.com",
      "offset": 20
    }
  ],
  "location": "Register.iEnterSameEmailInConfirmEmailField(String)"
});
formatter.result({
  "duration": 214059000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asdfgh@12345",
      "offset": 18
    }
  ],
  "location": "Register.iEnterPasswordInCreatePasswordField(String)"
});
formatter.result({
  "duration": 158925999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asdfgh@12345",
      "offset": 23
    }
  ],
  "location": "Register.iEnterSamePasswordInConfirmYourPasswordField(String)"
});
formatter.result({
  "duration": 123699200,
  "status": "passed"
});
formatter.match({
  "location": "Register.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 165730900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You\u0027ve got mail.",
      "offset": 19
    }
  ],
  "location": "Register.iShouldSeeText(String)"
});
formatter.result({
  "duration": 307115299,
  "status": "passed"
});
formatter.after({
  "duration": 754567200,
  "status": "passed"
});
});