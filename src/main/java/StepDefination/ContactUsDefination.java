package StepDefination;

import java.io.IOException;
import Utility.ExcelUtil;
import java.util.List;
import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import Base.BaseClass;
import Utility.ExcelUtil;
import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;




public class ContactUsDefination extends BaseClass {
	
	
	public ContactUsDefination() throws IOException {
		super();
		
	}

	@Before
	public void Intiate() throws Exception {
		ExcelUtil.setExcelFileSheet("ContactUs");
		Intialization();
	}
	
	@After
	public void tearDown() {
		driver.quit();
	}
	
	
	@Given("^User already on ContactUs Page$")
	public void userAlreadyonContactUsPage() throws Exception {
		System.out.println(ExcelUtil.getCellData(2, 2));
		driver.get(prop.getProperty("URL"));
		driver.findElement(By.xpath("//div[@id='contact-link']//a[contains(text(),'Contact us')]")).click();		
		
	}
	
	@When("^Title of ContactUS page is ContactUs$")
	public void title_of_ContactUS_page_is_ContactUs() throws Throwable {
		System.out.println(driver.getTitle());
		Assert.assertEquals(driver.getTitle(), "Contact us - My Store");  
	}
	
	@Then("^user enter SubjectHandling emialId Message and OrderReferance$")
	public void user_enter_SubjectHandling_emialId_Message_and_OrderReferance(DataTable contactDetails) throws Throwable {
	    List<List<String>> contactData = contactDetails.raw();
		Select select = new Select(driver.findElement(By.xpath("//select[@id='id_contact']")));
	    select.selectByVisibleText(contactData.get(0).get(0));
	    driver.findElement(By.xpath("//input[@id='email']")).sendKeys(contactData.get(0).get(1));
	    driver.findElement(By.xpath("//input[@id='id_order']")).sendKeys(contactData.get(0).get(2));
	    driver.findElement(By.xpath("//textarea[@id='message']")).sendKeys(contactData.get(0).get(3));
	    
	}

	@Then("^User Click on SignIn Button$")
	public void user_Click_on_SignIn_Button() throws Throwable {
	   driver.findElement(By.xpath("//span[contains(text(),'Send')]")).click();
	}

	@Then("^Message should sent  successfully sent to our team$")
	public void message_should_sent_successfully_sent_to_our_team() throws Throwable {
		String messageText=driver.findElement(By.xpath("//p[@class='alert alert-success']")).getText();
		Assert.assertEquals(messageText, "Your message has been successfully sent to our team.");
	  
	}

}
