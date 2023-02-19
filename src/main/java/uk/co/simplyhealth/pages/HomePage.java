package uk.co.simplyhealth.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.co.simplyhealth.utility.Utility;

public class HomePage extends Utility {
    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(id = "onetrust-accept-btn-handler")
    WebElement cookiePolicy;
    @FindBy(linkText = "My account")
    WebElement myAccountTab;

    public void acceptCookiePolicy(){
        clickOnElement(cookiePolicy);
    }

    public void clickOnMyAccount(){
        clickOnElement(myAccountTab);
    }
}
