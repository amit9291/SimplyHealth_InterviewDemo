package uk.co.simplyhealth.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import uk.co.simplyhealth.utility.Utility;

import javax.swing.*;
import java.time.Duration;
import java.util.Random;

public class RegisterPage extends Utility {
    public RegisterPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//input[@id='email']")
    WebElement emailField;
    @FindBy(xpath = "//input[@id='confirmEmail']")
    WebElement confirmEmailField;
    @FindBy(xpath = "//input[@id='password']")
    WebElement passwordField;
    @FindBy(xpath = "//input[@id='confirmPassword']")
    WebElement confirmPasswordField;
    // @FindBy(xpath = "//button[contains(text(),'Register')]")
    @FindBy(xpath = "//button[@type='submit']")
    WebElement registerButton;
    By regButton = By.xpath("//button[@type='submit']");
    @FindBy(xpath = "//h4[contains(text(),\"You've got mail.\")]")
    WebElement verifyTextAfterReg;


    static Random randomGenerator = new Random();
    static final int randomInt = randomGenerator.nextInt(1000);

    public void enterEmail(String email) {

        sendTextToElement(emailField, randomInt + email);

    }

    public void enterConfirmEmail(String email) {
        sendTextToElement(confirmEmailField, randomInt + email);
    }

    public void enterPassword(String password) {
        sendTextToElement(passwordField, password);
    }

    public void enterConfirmPassword(String password) {
        sendTextToElement(confirmPasswordField, password);

    }

    public void clickOnRegisterButton() {


        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].scrollIntoView()", registerButton);

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(20));
        wait.until(ExpectedConditions.visibilityOfElementLocated(regButton));
        clickOnElement(regButton);

    }

    public String verifyTextAfterRegistration() {
        return getTextFromElement(verifyTextAfterReg);
    }


}
