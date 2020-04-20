Feature: Automation Practice SignIn
@RegressionTest
Scenario: Automation Create Account on SignIn Page
#without using Example Keyword
Given User already on SignIn Page
When Title of SignIn page is ContactUs
Then user enter "test090909@test.com"
Then User Click on CreateAccount Button
Then CreateAccount Page displayed


@RegressionTest
Scenario Outline: Automation Create Account on SignIn Page with Example Keyword
#without using Example Keyword
Given User already on SignIn Page
When Title of SignIn page is ContactUs
Then user enter "<emailID>"
Then User Click on CreateAccount Button
Then CreateAccount Page displayed


Examples:
  | emailID |
  | test@test1.com |
  | test@test2.com |