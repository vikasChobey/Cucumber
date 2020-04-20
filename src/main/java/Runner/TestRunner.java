package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="E:\\Study\\TestAutomationCucumber\\src\\main\\java\\Feature" // Path of feature file
		,glue= {"StepDefination"} // Path of Step Defination file
		,format = {"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"}
		,dryRun = false// to check the mapping is proper between feature file and step defination file.
		,monochrome = true // Display the console output in readable format
		, strict=true // If any undefine steps are missing in step defination file then it won't execute the scripts
		//,tags= {"@SmokeTest","@RegressionTest"}
		//,tags= {"@SmokeTest"}
		)

public class TestRunner {

}
