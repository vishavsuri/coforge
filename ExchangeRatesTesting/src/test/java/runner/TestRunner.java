package runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features", glue = "stepDefinitions", tags = "@HSBCTest", monochrome = true, 
plugin = {
		"pretty", "html:target/cucumber-html-report", "json:target/cucumber-reports/cucumber.json",
		"junit:target/cucumber-reports/cucumber.xml"
		 })

public class TestRunner {
}
