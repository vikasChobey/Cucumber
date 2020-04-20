$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ContactUs.feature");
formatter.feature({
  "line": 1,
  "name": "Automation Practice ContactUs",
  "description": "",
  "id": "automation-practice-contactus",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13132674701,
  "status": "passed"
});
formatter.before({
  "duration": 9644982900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 2,
      "value": "# with Datatable"
    }
  ],
  "line": 4,
  "name": "Automation Practice ContactUs Page Scenario",
  "description": "",
  "id": "automation-practice-contactus;automation-practice-contactus-page-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User already on ContactUs Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Title of ContactUS page is ContactUs",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter SubjectHandling emialId Message and OrderReferance",
  "rows": [
    {
      "cells": [
        "Customer service",
        "test@test.com",
        "testOrder Referance",
        "Test Message"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Click on SignIn Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Message should sent  successfully sent to our team",
  "keyword": "And "
});
formatter.match({
  "location": "ContactUsDefination.userAlreadyonContactUsPage()"
});
formatter.result({
  "duration": 12812252299,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsDefination.title_of_ContactUS_page_is_ContactUs()"
});
formatter.result({
  "duration": 62905900,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsDefination.user_enter_SubjectHandling_emialId_Message_and_OrderReferance(DataTable)"
});
formatter.result({
  "duration": 2062949901,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsDefination.user_Click_on_SignIn_Button()"
});
formatter.result({
  "duration": 3336302999,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsDefination.message_should_sent_successfully_sent_to_our_team()"
});
formatter.result({
  "duration": 62205100,
  "status": "passed"
});
formatter.after({
  "duration": 788948000,
  "status": "passed"
});
formatter.after({
  "duration": 71299,
  "status": "passed"
});
formatter.uri("SignIn.feature");
formatter.feature({
  "line": 1,
  "name": "Automation Practice SignIn",
  "description": "",
  "id": "automation-practice-signin",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9708693500,
  "status": "passed"
});
formatter.before({
  "duration": 9659836200,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Automation Create Account on SignIn Page",
  "description": "",
  "id": "automation-practice-signin;automation-create-account-on-signin-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 4,
      "value": "#without using Example Keyword"
    }
  ],
  "line": 5,
  "name": "User already on SignIn Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of SignIn page is ContactUs",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter \"test090909@test.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User Click on CreateAccount Button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "CreateAccount Page displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInDefination.user_already_on_SignIn_Page()"
});
formatter.result({
  "duration": 12225324000,
  "status": "passed"
});
formatter.match({
  "location": "SignInDefination.title_of_SignIn_page_is_ContactUs()"
});
formatter.result({
  "duration": 78072400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test090909@test.com",
      "offset": 12
    }
  ],
  "location": "SignInDefination.user_enter_emailId(String)"
});
formatter.result({
  "duration": 1256364900,
  "status": "passed"
});
formatter.match({
  "location": "SignInDefination.user_Click_on_CreateAccount_Button()"
});
formatter.result({
  "duration": 261280800,
  "status": "passed"
});
formatter.match({
  "location": "SignInDefination.createaccount_Page_displayed()"
});
formatter.result({
  "duration": 9359000,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Create an account]\u003e but was:\u003c[Login - My Store]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefination.SignInDefination.createaccount_Page_displayed(SignInDefination.java:65)\r\n\tat ✽.Then CreateAccount Page displayed(SignIn.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 750637599,
  "status": "passed"
});
formatter.after({
  "duration": 32700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Automation Create Account on SignIn Page with Example Keyword",
  "description": "",
  "id": "automation-practice-signin;automation-create-account-on-signin-page-with-example-keyword",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#without using Example Keyword"
    }
  ],
  "line": 15,
  "name": "User already on SignIn Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Title of SignIn page is ContactUs",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enter \"\u003cemailID\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User Click on CreateAccount Button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "CreateAccount Page displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "automation-practice-signin;automation-create-account-on-signin-page-with-example-keyword;",
  "rows": [
    {
      "cells": [
        "emailID"
      ],
      "line": 23,
      "id": "automation-practice-signin;automation-create-account-on-signin-page-with-example-keyword;;1"
    },
    {
      "cells": [
        "test@test1.com"
      ],
      "line": 24,
      "id": "automation-practice-signin;automation-create-account-on-signin-page-with-example-keyword;;2"
    },
    {
      "cells": [
        "test@test2.com"
      ],
      "line": 25,
      "id": "automation-practice-signin;automation-create-account-on-signin-page-with-example-keyword;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9707210200,
  "status": "passed"
});
formatter.before({
  "duration": 9679455100,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Automation Create Account on SignIn Page with Example Keyword",
  "description": "",
  "id": "automation-practice-signin;automation-create-account-on-signin-page-with-example-keyword;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#without using Example Keyword"
    }
  ],
  "line": 15,
  "name": "User already on SignIn Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Title of SignIn page is ContactUs",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enter \"test@test1.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User Click on CreateAccount Button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "CreateAccount Page displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInDefination.user_already_on_SignIn_Page()"
});
formatter.result({
  "duration": 16278289799,
  "status": "passed"
});
formatter.match({
  "location": "SignInDefination.title_of_SignIn_page_is_ContactUs()"
});
formatter.result({
  "duration": 62162700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@test1.com",
      "offset": 12
    }
  ],
  "location": "SignInDefination.user_enter_emailId(String)"
});
formatter.result({
  "duration": 1277329200,
  "status": "passed"
});
formatter.match({
  "location": "SignInDefination.user_Click_on_CreateAccount_Button()"
});
formatter.result({
  "duration": 140600000,
  "status": "passed"
});
formatter.match({
  "location": "SignInDefination.createaccount_Page_displayed()"
});
formatter.result({
  "duration": 6787401,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Create an account]\u003e but was:\u003c[Login - My Store]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefination.SignInDefination.createaccount_Page_displayed(SignInDefination.java:65)\r\n\tat ✽.Then CreateAccount Page displayed(SignIn.feature:19)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 739061500,
  "status": "passed"
});
formatter.after({
  "duration": 26499,
  "status": "passed"
});
formatter.before({
  "duration": 9673493699,
  "status": "passed"
});
formatter.before({
  "duration": 9683405900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Automation Create Account on SignIn Page with Example Keyword",
  "description": "",
  "id": "automation-practice-signin;automation-create-account-on-signin-page-with-example-keyword;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#without using Example Keyword"
    }
  ],
  "line": 15,
  "name": "User already on SignIn Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Title of SignIn page is ContactUs",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enter \"test@test2.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User Click on CreateAccount Button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "CreateAccount Page displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInDefination.user_already_on_SignIn_Page()"
});
formatter.result({
  "duration": 21592503200,
  "status": "passed"
});
formatter.match({
  "location": "SignInDefination.title_of_SignIn_page_is_ContactUs()"
});
formatter.result({
  "duration": 22116400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@test2.com",
      "offset": 12
    }
  ],
  "location": "SignInDefination.user_enter_emailId(String)"
});
formatter.result({
  "duration": 1210733000,
  "status": "passed"
});
formatter.match({
  "location": "SignInDefination.user_Click_on_CreateAccount_Button()"
});
formatter.result({
  "duration": 193287400,
  "status": "passed"
});
formatter.match({
  "location": "SignInDefination.createaccount_Page_displayed()"
});
formatter.result({
  "duration": 9094601,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Create an account]\u003e but was:\u003c[Login - My Store]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefination.SignInDefination.createaccount_Page_displayed(SignInDefination.java:65)\r\n\tat ✽.Then CreateAccount Page displayed(SignIn.feature:19)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 760652601,
  "status": "passed"
});
formatter.after({
  "duration": 22100,
  "status": "passed"
});
});