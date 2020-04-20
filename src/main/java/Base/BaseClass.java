package Base;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BaseClass {
	public  static WebDriver driver;
	public static   Properties prop;
	public  BaseClass() {
		//Properties prop;
		prop=new Properties();
		FileInputStream fis = null;
		try {
			fis = new FileInputStream("E:\\Study\\TestAutomationCucumber\\src\\main\\java\\config\\config.properties");
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		try {
			prop.load(fis);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		//System.out.println(prop.getProperty("URL"));
	}
	public void Intialization() {
		//System.out.println(prop.getProperty("URL"));
		System.setProperty("webdriver.chrome.driver", "/Study/TestAutomation/drivers/chromedriver.exe");
		driver= new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(50, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
		//driver.get(prop.getProperty("URL"));
		//System.out.println(prop.getProperty("URL"));
	}



}
