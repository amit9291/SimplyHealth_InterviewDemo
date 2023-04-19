package uk.co.simplyhealth.cucumber.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.co.simplyhealth.pages.HomePage;
import uk.co.simplyhealth.pages.MyAccount;
import uk.co.simplyhealth.pages.RegisterPage;

public class Register {

    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @And("^I accept cookie policy$")
    public void iAcceptCookiePolicy() {
        new HomePage().acceptCookiePolicy();

    }

    @When("^I click on My account tab$")
    public void iClickOnMyAccountTab() {
        new HomePage().clickOnMyAccount();
    }

    @Then("^I should navigate to login to your account page successfully and verify text \"([^\"]*)\"$")
    public void iShouldNavigateToLoginToYourAccountPageSuccessfullyAndVerifyText(String expectedText) {
        Assert.assertEquals(expectedText, new MyAccount().getLoginText());
    }

    @And("^I click on Sign up link$")
    public void iClickOnSignUpLink() {
        new MyAccount().clickOnSignup();
    }

    @And("^I enter email \"([^\"]*)\" in email field$")
    public void iEnterEmailInEmailField(String email) {
        new RegisterPage().enterEmail(email);

    }

    @And("^I enter same email \"([^\"]*)\" in confirm email field$")
    public void iEnterSameEmailInConfirmEmailField(String email) {
        new RegisterPage().enterConfirmEmail(email);

    }

    @And("^I enter password \"([^\"]*)\" in create password field$")
    public void iEnterPasswordInCreatePasswordField(String password) {
        new RegisterPage().enterPassword(password);

    }

    @And("^I enter same password \"([^\"]*)\" in confirm your password field$")
    public void iEnterSamePasswordInConfirmYourPasswordField(String password) {
        new RegisterPage().enterConfirmPassword(password);

    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() {

        new RegisterPage().clickOnRegisterButton();
    }

    @Then("^I should see text \"([^\"]*)\"$")
    public void iShouldSeeText(String expectedText) {

        Assert.assertEquals(expectedText, new RegisterPage().verifyTextAfterRegistration());
    }


}
