package StepDefination;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import Utility.ExcelUtil;
import Base.BaseClass;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SignInDefination extends BaseClass {

	
	
	public SignInDefination() throws IOException {
		super();
		// TODO Auto-generated constructor stub
	}

	@Before//Global Hooks
	public void Intiate() throws Exception {
		ExcelUtil.setExcelFileSheet("SignIn");
		Intialization();
		
	}
	
	@After//Global Hooks
	public void tearDown() {
		driver.quit();
	}
	
	@Given("^User already on SignIn Page$")
	public void user_already_on_SignIn_Page() throws Throwable {
		System.out.println(ExcelUtil.getCellData(2, 2));
		driver.get(prop.getProperty("URL"));
		driver.findElement(By.xpath("//a[@class='login']")).click();		
		
	}

	@When("^Title of SignIn page is ContactUs$")
	public void title_of_SignIn_page_is_ContactUs() throws Throwable {
		Assert.assertEquals(driver.getTitle(), "Login - My Store"); 
	}

	@Then("^user enter \"(.*)\"$")
	public void user_enter_emailId(String emailID) throws Throwable {
		driver.findElement(By.xpath("//input[@id='email_create']")).sendKeys(emailID);
	    
	}

	@Then("^User Click on CreateAccount Button$")
	public void user_Click_on_CreateAccount_Button() throws Throwable {
	 driver.findElement(By.xpath("//form[@id='create-account_form']//span[1]")).click();
	}

	@Then("^CreateAccount Page displayed$")
	public void createaccount_Page_displayed() throws Throwable {
		Assert.assertEquals("Create an account", driver.getTitle());
		
	   
	}
	

}
