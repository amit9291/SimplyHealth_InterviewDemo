Feature: Registration Test

  Background:
    Given I am on homepage
    And I accept cookie policy
    When  I click on My account tab

  Scenario: As a User I should navigate to My account page successfully

    Then I should navigate to login to your account page successfully and verify text "Log in to your account"


  Scenario: As a User I should register successfully with valid credentials

    And I click on Sign up link
    And I enter email "create@gmail.com" in email field
    And I enter same email "create@gmail.com" in confirm email field
    And I enter password "Asdfgh@12345" in create password field
    And I enter same password "Asdfgh@12345" in confirm your password field
    And I click on register button
    Then I should see text "You've got mail."

    Scenario: As a User I should not be able to log in with invalid credentials
      Given I am on homepage


