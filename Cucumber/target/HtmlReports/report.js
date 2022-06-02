$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Access.feature");
formatter.feature({
  "name": "Acces to the website",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.background({
  "name": "Verify the accessibility to the website todos",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.accesSteps.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user put the link of the website",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.accesSteps.user_put_the_link_of_the_website()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d102.0.5005.63)\n  (Driver info: chromedriver\u003d102.0.5005.61 (0e59bcc00cc4985ce39ad31c150065f159d95ad3-refs/branch-heads/5005@{#819}),platform\u003dWindows NT 10.0.19042 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 1.43 seconds\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027TALAN-3VPPDDJ\u0027, ip: \u002710.1.1.141\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:55205}, webauthn:extension:credBlob\u003dtrue, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, unexpectedAlertBehaviour\u003dignore, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d102.0.5005.61 (0e59bcc00cc4985ce39ad31c150065f159d95ad3-refs/branch-heads/5005@{#819}), userDataDir\u003dC:\\Users\\jsaidane\\AppData\\Local\\Temp\\scoped_dir23028_1456954498}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d102.0.5005.63, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 3496c7d733dd09cc4da1042fb08ef26a\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:306)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:850)\r\n\tat stepdefs.accesSteps.user_put_the_link_of_the_website(accesSteps.java:32)\r\n\tat ✽.user put the link of the website(file:///C:/Users/jsaidane/eclipse-workspace/Cucumber/src/test/resources/Features/Access.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "show homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.accesSteps.show_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "verify that the user can create a checklist",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "write to do",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.accesSteps.write_to_do()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click enter",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.accesSteps.i_click_enter()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the writen ToDo will be added to the list",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.accesSteps.the_writen_ToDo_will_be_added_to_the_list()"
});
formatter.result({
  "status": "skipped"
});
});