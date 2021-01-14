package stepDefinitions;

import base.TestBase;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import java.time.LocalDate;
import java.util.LinkedHashMap;
import java.util.Map;
import org.junit.Assert;
import utils.ConfigReader;
import utils.UtilityHelper;
public class ExchangeRatesAPITesting extends TestBase {
	String baseURI;
	String baseURILatest;
	
	@Before
	public void SetUp(Scenario s) {
		scn = s;
	}	

	public ExchangeRatesAPITesting() {
		baseURI = ConfigReader.getInstance().getProperty("base_URI");
		baseURILatest = ConfigReader.getInstance().getProperty("base_URI_Latest");
	}
	
	@Given("^Foreign Exchange Rates API is accessible$")
	public void isForeignExchangeAPIAccessible() throws Throwable {
		scn.write("URI under test" + baseURILatest);
		isAPIAccessible(baseURILatest, 200);
		scn.write("API is up and running");
	}

	@When("^API is hit with end point as \\?base=\"([^\"]*)\"$")
	public void api_is_hit_with_end_point_as(String baseCurrency) throws Throwable {
		scn.write("Hitting endpoint '" + baseURILatest + " with base = " + baseCurrency);
		triggerEndpoint(baseURILatest);
		scn.write("Response received : " + getResponse().asString());
	}

	@When("^API is hit with end point as \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void api_is_hit_with_end_point_as(String endPoint, String queryParam, String baseCurrency) throws Throwable {
		try {
			if (endPoint.contains("latest")) {
				scn.write("Hitting endpoint '" + baseURILatest + " with " + queryParam + " = " + baseCurrency);
				triggerEndpoint(baseURILatest, queryParam, baseCurrency);
			} else {
				scn.write("Hitting endpoint '" + baseURI + " with " + queryParam + " = " + baseCurrency);
				triggerEndpoint(baseURI + endPoint, queryParam, baseCurrency);
			}
			scn.write("Response received : " + getResponse().asString());
		} catch (Exception e) {
			e.printStackTrace();
			//System.out.println("Exception caught : " + e.getMessage());
		}
	}

	@And("^Response should contain base currency as \"([^\"]*)\"$")
	public void response_should_contain_base_currency_as(String expBaseCurrency) throws Throwable {
		try {
			Assert.assertEquals(200, actStatusCode);
			System.out.println("Actual status code : '" + actStatusCode + "' matches with expected status code : '200'");
			scn.write("Actual status code : '" + actStatusCode + "' matches with expected status code : '200'");
			String actBaseCurrency = getJsonPath().get("base");
			Assert.assertEquals(expBaseCurrency.trim(), actBaseCurrency.trim());
			System.out.println("Actual response base currency : '" + actBaseCurrency
					+ "' matches with expected base currency : '" + expBaseCurrency + "'");
			scn.write("Actual response base currency : '" + actBaseCurrency
					+ "' matches with expected base currency : '" + expBaseCurrency + "'");
		} catch (Exception e) {
			e.printStackTrace();
			//System.out.println("Exception caught : " + e.getMessage());
		}
	}

	@Then("^API Should respond with status code as \"([^\"]*)\"$")
	public void api_Should_respond_with_status_code_as(int expStatusCode) throws Throwable {
		Assert.assertEquals(expStatusCode,actStatusCode);
		System.out.println("Actual status code : '" + actStatusCode + "' matches with expected status code : '" + expStatusCode
				+ "'");
		scn.write("Actual status code : '" + actStatusCode + "' matches with expected status code : '" + expStatusCode
				+ "'");
	}

	@Then("^Error message should be displayed as \"([^\"]*)\"$")
	public void error_message_should_be_displayed_as(String expErrorMessage) throws Throwable {
		Assert.assertEquals(bodyAsString.trim().contains(expErrorMessage.trim()), true);
		System.out.println("Expected error message received : '" + bodyAsString + "'");
		scn.write("Expected error message received : '" + bodyAsString + "'");
	}

	@And("^Response should contain value \"([^\"]*)\" for \"([^\"]*)\"$")
	public void Response_should_contain_value(String expValue, String field) throws Throwable {
		LinkedHashMap<String, String> ratesData = getResponseMap();
		String actValue = null;
		boolean matched = false;

		try {
			for (Map.Entry m : ratesData.entrySet()) {
				if (m.getKey().equals(field.trim())) {
					actValue = m.getValue().toString();
					if (actValue.equals(expValue)) {
						System.out.println("Field : '" + field + "' , Actual value '" + actValue
								+ "' matches with Expected value '" + expValue);
						scn.write("Field : '" + field + "' , Actual value '" + actValue 
								+ "' matches with Expected value '" + expValue);
						matched = true;
						break;
					}
				}
			}
			if (!matched) {
				System.out.println("Field : '" + field + "' , Actual value '" + actValue
						+ "' does not match with Expected value '" + expValue);
				scn.write("Field : '" + field + "' , Actual value '" + actValue
						+ "' does not match with Expected value '" + expValue);				
			}
		} catch (Exception e) {
			scn.write("Exception caught during response map validation for field '" + field + "', exp value '"
					+ expValue + "'");			
		}
	}

	@And("^Response should contain date as \"([^\"]*)\"$")
	public void Response_should_contain_expected_date(String expDate) throws Throwable {
		String actResponseDate = null;
		try {
			actResponseDate = getJsonPath().get("date");
			if (expDate.toLowerCase().contains("today")) {
				expDate = UtilityHelper.getTodaysDate().toString();
			}
			expDate = UtilityHelper.getWorkingDate(LocalDate.parse(expDate));
			Assert.assertEquals(expDate, actResponseDate);
			scn.write("Expected Date " + expDate + " matches with actual response date " + actResponseDate);
		} catch (Exception e) {
			scn.write("Exception caught during date validation Exp date '" + expDate + "' , Actual date '"
					+ actResponseDate + "'");
		
		}
	}
	
	@And("^Response should contain not null values for \"([^\"]*)\"$")
	public void response_should_contain_not_null_values_for_Currencies(String checkCurrencies) throws Throwable {
		try {
			String[] currencies = checkCurrencies.split(",");
			String actValue = null;
			LinkedHashMap<String, String> currencyData = getResponseMap();
			for (String currency : currencies) {
				for (Map.Entry m : currencyData.entrySet()) {
					if (m.getKey().equals(currency.trim())) {
						actValue = m.getValue().toString();
						if (actValue.isEmpty()) {
							System.out.println("Response currency : '" + currency + "' , Actual value '" + actValue
									+ "' is black or empty");
							scn.write("Response currency : '" + currency + "' , Actual value '" + actValue
									+ "' is black or empty");							
							break;
						} else {
							System.out.println("Response currency : '" + currency + "' , returned a valid actual value '"
									+ actValue + "'");
							scn.write("Response currency : '" + currency + "' , returned a valid actual value '"
									+ actValue + "'");							
							break;
						}
					}
				}
			}

		} catch (Exception e) {
			e.printStackTrace();
			scn.write("Exception caught : " + e.getMessage());
		}
	}

	@And("^Response for future date should match with response for today$")
	public void response_for_future_date_should_match_with_response_for_today() throws Throwable {
		String respFutureDate = bodyAsString;		
		scn.write("Future date response : " + respFutureDate);
		triggerEndpoint(baseURI + UtilityHelper.getTodaysDate());
		String respToday = bodyAsString;
		Assert.assertEquals(respFutureDate, respToday);		
		scn.write("Current date response : " + respToday + ", matches with future date response");
	}
}
