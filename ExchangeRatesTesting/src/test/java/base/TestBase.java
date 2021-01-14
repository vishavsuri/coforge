package base;

import java.util.LinkedHashMap;
import org.apache.log4j.Logger;
import org.junit.Assert;
import io.cucumber.core.api.Scenario;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.response.ResponseBody;
import io.restassured.specification.RequestSpecification;

public class TestBase {
	protected RequestSpecification httpRequest;
	protected String bodyAsString;
	protected ResponseBody<?> body;
	protected Response response;
	protected int actStatusCode;
	protected Scenario scn=null;
	public static Logger logger;

	public Response getResponse() {
		return response;
	}

	public JsonPath getJsonPath() {
		return response.jsonPath();
	}

	public LinkedHashMap<String, String> getResponseMap() {
		return new LinkedHashMap<String, String>(getJsonPath().getMap("rates"));
	}

	public void isAPIAccessible(String baseURI, int expStatusCode) {
		System.out.println("Checking if API '" + baseURI + "' is accessible");
		try {
			RestAssured.baseURI = baseURI;
			httpRequest = RestAssured.given();
			response = httpRequest.get();
			actStatusCode = response.getStatusCode();
			System.out.println("API response received : " + response.asString());
			System.out.println("Response Status code '" + actStatusCode + "'");
			Assert.assertEquals(expStatusCode, actStatusCode);
			System.out.println("API '" + baseURI + "' is accessible");
		} catch (Exception e) {
			e.printStackTrace();		
		}
	}

	public void triggerEndpoint(String endPoint) {		
		try {
			RestAssured.baseURI = endPoint;
			httpRequest = RestAssured.given();
			response = httpRequest.get();
			body = response.getBody();
			actStatusCode = response.getStatusCode();
			bodyAsString = body.asString();
			System.out.println("Response received : " + bodyAsString);
		} catch (Exception e) {
			e.printStackTrace();
	
		}
	}

	public void triggerEndpoint(String endPoint, String queryParamField, String queryParamValue) {
		try {
			RestAssured.baseURI = endPoint;
			httpRequest = RestAssured.given();
			response = httpRequest.queryParam(queryParamField, queryParamValue).get();
			body = response.getBody();
			bodyAsString = body.asString();
			actStatusCode = response.getStatusCode();
			System.out.println("Response received : " + bodyAsString);
			System.out.println("Response status code : '" + actStatusCode + "'");
		} catch (Exception e) {
			e.printStackTrace();	
		}
	}
}
