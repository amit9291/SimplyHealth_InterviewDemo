package uk.co.simplyhealth.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.co.simplyhealth.utility.Utility;

public class MyAccount extends Utility {
    public MyAccount() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//h4[contains(text(),'Log in to your account')]")
    WebElement verifyLoginText;
    @FindBy(xpath = "//a[contains(text(),'Sign up')]")
    WebElement signup;

    public String getLoginText() {
        return getTextFromElement(verifyLoginText);
    }

    public void clickOnSignup() {
        clickOnElement(signup);

    }
}
