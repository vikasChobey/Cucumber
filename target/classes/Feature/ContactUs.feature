Feature: Automation Practice ContactUs
# with Datatable
@SmokeTest
Scenario: Automation Practice ContactUs Page Scenario

Given User already on ContactUs Page
When Title of ContactUS page is ContactUs
Then user enter SubjectHandling emialId Message and OrderReferance
| Customer service | test@test.com | testOrder Referance| Test Message |
Then User Click on SignIn Button
And Message should sent  successfully sent to our team


