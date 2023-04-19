$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Registration Test",
  "description": "",
  "id": "registration-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7090108600,
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
  "duration": 168731800,
  "status": "passed"
});
formatter.match({
  "location": "Register.iAcceptCookiePolicy()"
});
formatter.result({
  "duration": 348954900,
  "status": "passed"
});
formatter.match({
  "location": "Register.iClickOnMyAccountTab()"
});
formatter.result({
  "duration": 472674800,
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
  "line": 10,
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
  "duration": 21668331300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h4[contains(text(),\u0027Log in to your account\u0027)]\"}\n  (Session info: chrome\u003d112.0.5615.122)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8ffdaf7a5d77a328c8eb4eeb2d409b05, findElement {using\u003dxpath, value\u003d//h4[contains(text(),\u0027Log in to your account\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 112.0.5615.122, chrome: {chromedriverVersion: 112.0.5615.49 (bd2a7bcb881c..., userDataDir: C:\\Users\\44754\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58150}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:58150/devtoo..., se:cdpVersion: 112.0.5615.122, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 8ffdaf7a5d77a328c8eb4eeb2d409b05\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat uk.co.simplyhealth.utility.Utility.getTextFromElement(Utility.java:63)\r\n\tat uk.co.simplyhealth.pages.MyAccount.getLoginText(MyAccount.java:19)\r\n\tat uk.co.simplyhealth.cucumber.steps.Register.iShouldNavigateToLoginToYourAccountPageSuccessfullyAndVerifyText(Register.java:32)\r\n\tat ✽.Then I should navigate to login to your account page successfully and verify text \"Log in to your account\"(register.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1077132200,
  "status": "passed"
});
formatter.before({
  "duration": 3265518800,
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
  "duration": 41900,
  "status": "passed"
});
formatter.match({
  "location": "Register.iAcceptCookiePolicy()"
});
formatter.result({
  "duration": 205678100,
  "status": "passed"
});
formatter.match({
  "location": "Register.iClickOnMyAccountTab()"
});
formatter.result({
  "duration": 721277800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "As a User I should register successfully with valid credentials",
  "description": "",
  "id": "registration-test;as-a-user-i-should-register-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I click on Sign up link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter email \"create@gmail.com\" in email field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter same email \"create@gmail.com\" in confirm email field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter password \"Asdfgh@12345\" in create password field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter same password \"Asdfgh@12345\" in confirm your password field",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see text \"You\u0027ve got mail.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.iClickOnSignUpLink()"
});
formatter.result({
  "duration": 20763446400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Sign up\u0027)]\"}\n  (Session info: chrome\u003d112.0.5615.122)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [20a5f3a85ab8c4d6c82270299a730126, findElement {using\u003dxpath, value\u003d//a[contains(text(),\u0027Sign up\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 112.0.5615.122, chrome: {chromedriverVersion: 112.0.5615.49 (bd2a7bcb881c..., userDataDir: C:\\Users\\44754\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58378}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:58378/devtoo..., se:cdpVersion: 112.0.5615.122, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 20a5f3a85ab8c4d6c82270299a730126\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat uk.co.simplyhealth.utility.Utility.clickOnElement(Utility.java:52)\r\n\tat uk.co.simplyhealth.pages.MyAccount.clickOnSignup(MyAccount.java:23)\r\n\tat uk.co.simplyhealth.cucumber.steps.Register.iClickOnSignUpLink(Register.java:37)\r\n\tat ✽.And I click on Sign up link(register.feature:15)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Register.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "duration": 1061162300,
  "status": "passed"
});
});