$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/ExchangeRates.feature");
formatter.feature({
  "name": "Get and validate conversion rates for past and future dates using Foreign Exchange Rates API",
  "description": "  Description: Validating that Foreign Exchange Rates API",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Confirm that API responds with correct base value for currency based on input",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HSBCTest"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as \"\u003cEndPoint\u003e\" \"\u003cQueryParamaters\u003e\" \"\u003cCurrencyCode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "API Should respond with status code as \"200\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Response should contain base currency as \"\u003cCurrencyCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Response should contain value \"1.0\" for \"\u003cCurrencyCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Response should contain not null values for \"\u003cCheckCurrencies\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "QueryParamaters",
        "CurrencyCode",
        "CheckCurrencies"
      ]
    },
    {
      "cells": [
        "latest",
        "base",
        "GBP",
        "INR,AUD"
      ]
    },
    {
      "cells": [
        "latest",
        "base",
        "HKD",
        "INR,AUD"
      ]
    },
    {
      "cells": [
        "latest",
        "base",
        "NZD",
        "INR,AUD"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.isForeignExchangeAPIAccessible()"
});
formatter.write("URI under testhttps://api.ratesapi.io/api/latest");
formatter.write("API is up and running");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Confirm that API responds with correct base value for currency based on input",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HSBCTest"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as \"latest\" \"base\" \"GBP\"",
  "keyword": "When "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.api_is_hit_with_end_point_as(String,String,String)"
});
formatter.write("Hitting endpoint \u0027https://api.ratesapi.io/api/latest with base \u003d GBP");
formatter.write("Response received : {\"base\":\"GBP\",\"rates\":{\"GBP\":1.0,\"HKD\":10.5449463327,\"IDR\":19232.7034883721,\"ILS\":4.2979651163,\"DKK\":8.3167486583,\"INR\":99.6103533095,\"CHF\":1.2088550984,\"MXN\":27.1701699463,\"CZK\":29.2822003578,\"SGD\":1.8052325581,\"THB\":40.9671288014,\"HRK\":8.4755143113,\"EUR\":1.1180679785,\"MYR\":5.5168828265,\"NOK\":11.6016323792,\"CNY\":8.7853309481,\"BGN\":2.1867173524,\"PHP\":65.3331842576,\"PLN\":5.0590339893,\"ZAR\":20.9379472272,\"CAD\":1.7341234347,\"ISK\":174.6422182469,\"BRL\":7.4454382826,\"RON\":5.4464445438,\"NZD\":1.8940071556,\"TRY\":10.1800089445,\"JPY\":141.7039355993,\"RUB\":100.6861583184,\"KRW\":1494.1636851521,\"USD\":1.3596824687,\"AUD\":1.7600626118,\"HUF\":402.1243291592,\"SEK\":11.2788461538},\"date\":\"2021-01-12\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Should respond with status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.api_Should_respond_with_status_code_as(int)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain base currency as \"GBP\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.response_should_contain_base_currency_as(String)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.write("Actual response base currency : \u0027GBP\u0027 matches with expected base currency : \u0027GBP\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain value \"1.0\" for \"GBP\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.Response_should_contain_value(String,String)"
});
formatter.write("Field : \u0027GBP\u0027 , Actual value \u00271.0\u0027 matches with Expected value \u00271.0");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain not null values for \"INR,AUD\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.response_should_contain_not_null_values_for_Currencies(String)"
});
formatter.write("Response currency : \u0027INR\u0027 , returned a valid actual value \u002799.61035\u0027");
formatter.write("Response currency : \u0027AUD\u0027 , returned a valid actual value \u00271.7600626\u0027");
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.isForeignExchangeAPIAccessible()"
});
formatter.write("URI under testhttps://api.ratesapi.io/api/latest");
formatter.write("API is up and running");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Confirm that API responds with correct base value for currency based on input",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HSBCTest"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as \"latest\" \"base\" \"HKD\"",
  "keyword": "When "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.api_is_hit_with_end_point_as(String,String,String)"
});
formatter.write("Hitting endpoint \u0027https://api.ratesapi.io/api/latest with base \u003d HKD");
formatter.write("Response received : {\"base\":\"HKD\",\"rates\":{\"GBP\":0.0948321564,\"HKD\":1.0,\"IDR\":1823.8787454673,\"ILS\":0.4075853002,\"DKK\":0.7886952096,\"INR\":9.4462646055,\"CHF\":0.1146383358,\"MXN\":2.5766058061,\"CZK\":2.7768942045,\"SGD\":0.1711940963,\"THB\":3.8850011663,\"HRK\":0.8037512989,\"EUR\":0.1060287974,\"MYR\":0.5231778951,\"NOK\":1.1002078164,\"CNY\":0.8331318786,\"BGN\":0.207371122,\"PHP\":6.1956867485,\"PLN\":0.4797591026,\"ZAR\":1.9855906864,\"CAD\":0.1644506648,\"ISK\":16.5616981572,\"BRL\":0.7060669678,\"RON\":0.5164980809,\"NZD\":0.1796127828,\"TRY\":0.9653922005,\"JPY\":13.4380897852,\"RUB\":9.5482855143,\"KRW\":141.694764298,\"USD\":0.1289416205,\"AUD\":0.1669105329,\"HUF\":38.1343172806,\"SEK\":1.0695973026},\"date\":\"2021-01-12\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Should respond with status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.api_Should_respond_with_status_code_as(int)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain base currency as \"HKD\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.response_should_contain_base_currency_as(String)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.write("Actual response base currency : \u0027HKD\u0027 matches with expected base currency : \u0027HKD\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain value \"1.0\" for \"HKD\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.Response_should_contain_value(String,String)"
});
formatter.write("Field : \u0027HKD\u0027 , Actual value \u00271.0\u0027 matches with Expected value \u00271.0");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain not null values for \"INR,AUD\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.response_should_contain_not_null_values_for_Currencies(String)"
});
formatter.write("Response currency : \u0027INR\u0027 , returned a valid actual value \u00279.446264\u0027");
formatter.write("Response currency : \u0027AUD\u0027 , returned a valid actual value \u00270.16691053\u0027");
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.isForeignExchangeAPIAccessible()"
});
formatter.write("URI under testhttps://api.ratesapi.io/api/latest");
formatter.write("API is up and running");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Confirm that API responds with correct base value for currency based on input",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HSBCTest"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as \"latest\" \"base\" \"NZD\"",
  "keyword": "When "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.api_is_hit_with_end_point_as(String,String,String)"
});
formatter.write("Hitting endpoint \u0027https://api.ratesapi.io/api/latest with base \u003d NZD");
formatter.write("Response received : {\"base\":\"NZD\",\"rates\":{\"GBP\":0.5279811098,\"HKD\":5.5675324675,\"IDR\":10154.5041322314,\"ILS\":2.269244392,\"DKK\":4.3910861865,\"INR\":52.5923848878,\"CHF\":0.6382526564,\"MXN\":14.3453364817,\"CZK\":15.4604486423,\"SGD\":0.9531286895,\"THB\":21.6298701299,\"HRK\":4.4749114522,\"EUR\":0.5903187721,\"MYR\":2.9128099174,\"NOK\":6.1254427391,\"CNY\":4.6384887839,\"BGN\":1.1545454545,\"PHP\":34.4946871311,\"PLN\":2.6710743802,\"ZAR\":11.0548406139,\"CAD\":0.9155844156,\"ISK\":92.2077922078,\"BRL\":3.9310507674,\"RON\":2.8756198347,\"NZD\":1.0,\"TRY\":5.3748524203,\"JPY\":74.8170011806,\"RUB\":53.1603896104,\"KRW\":788.8902007084,\"USD\":0.7178866588,\"AUD\":0.9292798111,\"HUF\":212.3140495868,\"SEK\":5.9550177096},\"date\":\"2021-01-12\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Should respond with status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.api_Should_respond_with_status_code_as(int)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain base currency as \"NZD\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.response_should_contain_base_currency_as(String)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.write("Actual response base currency : \u0027NZD\u0027 matches with expected base currency : \u0027NZD\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain value \"1.0\" for \"NZD\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.Response_should_contain_value(String,String)"
});
formatter.write("Field : \u0027NZD\u0027 , Actual value \u00271.0\u0027 matches with Expected value \u00271.0");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain not null values for \"INR,AUD\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.response_should_contain_not_null_values_for_Currencies(String)"
});
formatter.write("Response currency : \u0027INR\u0027 , returned a valid actual value \u002752.592384\u0027");
formatter.write("Response currency : \u0027AUD\u0027 , returned a valid actual value \u00270.9292798\u0027");
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate results when incorrect/invalid endpoint is invoked",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HSBCTest"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as ?base\u003d\"\u003cEndPoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "API Should respond with status code as \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Error message should be displayed as \"\u003cErrorMessage\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "StatusCode",
        "ErrorMessage"
      ]
    },
    {
      "cells": [
        "BKG",
        "400",
        "Base \u0027BKG\u0027 is not supported."
      ]
    },
    {
      "cells": [
        "123",
        "400",
        "Base \u0027123\u0027 is not supported."
      ]
    },
    {
      "cells": [
        "@#$",
        "400",
        "Base \u0027@#$\u0027 is not supported."
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.isForeignExchangeAPIAccessible()"
});
formatter.write("URI under testhttps://api.ratesapi.io/api/latest");
formatter.write("API is up and running");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate results when incorrect/invalid endpoint is invoked",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HSBCTest"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as ?base\u003d\"BKG\"",
  "keyword": "When "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.api_is_hit_with_end_point_as(String)"
});
formatter.write("Hitting endpoint \u0027https://api.ratesapi.io/api/latest with base \u003d BKG");
formatter.write("Response received : {\"base\":\"EUR\",\"rates\":{\"GBP\":0.8944,\"HKD\":9.4314,\"IDR\":17201.73,\"ILS\":3.8441,\"DKK\":7.4385,\"INR\":89.0915,\"CHF\":1.0812,\"MXN\":24.301,\"CZK\":26.19,\"SGD\":1.6146,\"THB\":36.641,\"HRK\":7.5805,\"MYR\":4.9343,\"NOK\":10.3765,\"CNY\":7.8576,\"BGN\":1.9558,\"PHP\":58.434,\"SEK\":10.0878,\"PLN\":4.5248,\"ZAR\":18.7269,\"CAD\":1.551,\"ISK\":156.2,\"BRL\":6.6592,\"RON\":4.8713,\"NZD\":1.694,\"TRY\":9.105,\"JPY\":126.74,\"RUB\":90.0537,\"KRW\":1336.38,\"USD\":1.2161,\"HUF\":359.66,\"AUD\":1.5742},\"date\":\"2021-01-12\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Should respond with status code as \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.api_Should_respond_with_status_code_as(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat stepDefinitions.ExchangeRatesAPITesting.api_Should_respond_with_status_code_as(ExchangeRatesAPITesting.java:81)\r\n\tat ✽.API Should respond with status code as \"400\"(file:src/test/resources/features/ExchangeRates.feature:33)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Error message should be displayed as \"Base \u0027BKG\u0027 is not supported.\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.error_message_should_be_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.isForeignExchangeAPIAccessible()"
});
formatter.write("URI under testhttps://api.ratesapi.io/api/latest");
formatter.write("API is up and running");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate results when incorrect/invalid endpoint is invoked",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HSBCTest"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as ?base\u003d\"123\"",
  "keyword": "When "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.api_is_hit_with_end_point_as(String)"
});
formatter.write("Hitting endpoint \u0027https://api.ratesapi.io/api/latest with base \u003d 123");
formatter.write("Response received : {\"base\":\"EUR\",\"rates\":{\"GBP\":0.8944,\"HKD\":9.4314,\"IDR\":17201.73,\"ILS\":3.8441,\"DKK\":7.4385,\"INR\":89.0915,\"CHF\":1.0812,\"MXN\":24.301,\"CZK\":26.19,\"SGD\":1.6146,\"THB\":36.641,\"HRK\":7.5805,\"MYR\":4.9343,\"NOK\":10.3765,\"CNY\":7.8576,\"BGN\":1.9558,\"PHP\":58.434,\"SEK\":10.0878,\"PLN\":4.5248,\"ZAR\":18.7269,\"CAD\":1.551,\"ISK\":156.2,\"BRL\":6.6592,\"RON\":4.8713,\"NZD\":1.694,\"TRY\":9.105,\"JPY\":126.74,\"RUB\":90.0537,\"KRW\":1336.38,\"USD\":1.2161,\"HUF\":359.66,\"AUD\":1.5742},\"date\":\"2021-01-12\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Should respond with status code as \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.api_Should_respond_with_status_code_as(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat stepDefinitions.ExchangeRatesAPITesting.api_Should_respond_with_status_code_as(ExchangeRatesAPITesting.java:81)\r\n\tat ✽.API Should respond with status code as \"400\"(file:src/test/resources/features/ExchangeRates.feature:33)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Error message should be displayed as \"Base \u0027123\u0027 is not supported.\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.error_message_should_be_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.isForeignExchangeAPIAccessible()"
});
formatter.write("URI under testhttps://api.ratesapi.io/api/latest");
formatter.write("API is up and running");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate results when incorrect/invalid endpoint is invoked",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HSBCTest"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as ?base\u003d\"@#$\"",
  "keyword": "When "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.api_is_hit_with_end_point_as(String)"
});
formatter.write("Hitting endpoint \u0027https://api.ratesapi.io/api/latest with base \u003d @#$");
formatter.write("Response received : {\"base\":\"EUR\",\"rates\":{\"GBP\":0.8944,\"HKD\":9.4314,\"IDR\":17201.73,\"ILS\":3.8441,\"DKK\":7.4385,\"INR\":89.0915,\"CHF\":1.0812,\"MXN\":24.301,\"CZK\":26.19,\"SGD\":1.6146,\"THB\":36.641,\"HRK\":7.5805,\"MYR\":4.9343,\"NOK\":10.3765,\"CNY\":7.8576,\"BGN\":1.9558,\"PHP\":58.434,\"SEK\":10.0878,\"PLN\":4.5248,\"ZAR\":18.7269,\"CAD\":1.551,\"ISK\":156.2,\"BRL\":6.6592,\"RON\":4.8713,\"NZD\":1.694,\"TRY\":9.105,\"JPY\":126.74,\"RUB\":90.0537,\"KRW\":1336.38,\"USD\":1.2161,\"HUF\":359.66,\"AUD\":1.5742},\"date\":\"2021-01-12\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Should respond with status code as \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.api_Should_respond_with_status_code_as(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat stepDefinitions.ExchangeRatesAPITesting.api_Should_respond_with_status_code_as(ExchangeRatesAPITesting.java:81)\r\n\tat ✽.API Should respond with status code as \"400\"(file:src/test/resources/features/ExchangeRates.feature:33)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Error message should be displayed as \"Base \u0027@#$\u0027 is not supported.\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.error_message_should_be_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Validate that API returns data for specific past date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HSBCTest"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as \"\u003cEndPoint\u003e\" \"\u003cQueryParamaters\u003e\" \"\u003cCurrencyCode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "API Should respond with status code as \"200\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Response should contain date as \"\u003cResponseDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Response should contain not null values for \"\u003cCheckCurrencies\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Response should contain base currency as \"\u003cCurrencyCode\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "QueryParamaters",
        "CurrencyCode",
        "ResponseDate",
        "CheckCurrencies"
      ]
    },
    {
      "cells": [
        "2020-05-31",
        "base",
        "USD",
        "2020-05-31",
        "NZD,INR"
      ]
    },
    {
      "cells": [
        "2019-12-31",
        "base",
        "EUR",
        "2019-12-31",
        "EUR,JPY"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.isForeignExchangeAPIAccessible()"
});
formatter.write("URI under testhttps://api.ratesapi.io/api/latest");
formatter.write("API is up and running");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate that API returns data for specific past date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HSBCTest"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as \"2020-05-31\" \"base\" \"USD\"",
  "keyword": "When "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.api_is_hit_with_end_point_as(String,String,String)"
});
formatter.write("Hitting endpoint \u0027https://api.ratesapi.io/api/ with base \u003d USD");
formatter.write("Response received : {\"base\":\"USD\",\"rates\":{\"GBP\":0.8089798851,\"HKD\":7.7538613506,\"IDR\":14610.003591954,\"ILS\":3.5079920977,\"DKK\":6.6937859195,\"INR\":75.5230783046,\"CHF\":0.9626436782,\"MXN\":22.0635775862,\"CZK\":24.1747485632,\"SGD\":1.4109195402,\"THB\":31.8103448276,\"HRK\":6.8130387931,\"EUR\":0.8979885057,\"MYR\":4.3475215517,\"NOK\":9.6875,\"CNY\":7.1350574713,\"BGN\":1.7562859195,\"PHP\":50.4947916667,\"PLN\":3.9955998563,\"ZAR\":17.4424389368,\"CAD\":1.3721264368,\"ISK\":135.4166666667,\"BRL\":5.3568606322,\"RON\":4.3546156609,\"NZD\":1.6040768678,\"TRY\":6.8337823276,\"JPY\":107.1210488506,\"RUB\":70.4396551724,\"KRW\":1235.8207614943,\"USD\":1.0,\"AUD\":1.4979346264,\"HUF\":313.1555316092,\"SEK\":9.4172054598},\"date\":\"2020-05-29\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Should respond with status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.api_Should_respond_with_status_code_as(int)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain date as \"2020-05-31\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.Response_should_contain_expected_date(String)"
});
formatter.write("Expected Date 2020-05-29 matches with actual response date 2020-05-29");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain not null values for \"NZD,INR\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.response_should_contain_not_null_values_for_Currencies(String)"
});
formatter.write("Response currency : \u0027NZD\u0027 , returned a valid actual value \u00271.6040769\u0027");
formatter.write("Response currency : \u0027INR\u0027 , returned a valid actual value \u002775.52308\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain base currency as \"USD\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.response_should_contain_base_currency_as(String)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.write("Actual response base currency : \u0027USD\u0027 matches with expected base currency : \u0027USD\u0027");
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.isForeignExchangeAPIAccessible()"
});
formatter.write("URI under testhttps://api.ratesapi.io/api/latest");
formatter.write("API is up and running");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate that API returns data for specific past date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HSBCTest"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as \"2019-12-31\" \"base\" \"EUR\"",
  "keyword": "When "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.api_is_hit_with_end_point_as(String,String,String)"
});
formatter.write("Hitting endpoint \u0027https://api.ratesapi.io/api/ with base \u003d EUR");
formatter.write("Response received : {\"base\":\"EUR\",\"rates\":{\"GBP\":0.8508,\"HKD\":8.7473,\"IDR\":15595.6,\"ILS\":3.8845,\"DKK\":7.4715,\"INR\":80.187,\"CHF\":1.0854,\"MXN\":21.2202,\"CZK\":25.408,\"SGD\":1.5111,\"THB\":33.415,\"HRK\":7.4395,\"MYR\":4.5953,\"NOK\":9.8638,\"CNY\":7.8205,\"BGN\":1.9558,\"PHP\":56.9,\"SEK\":10.4468,\"PLN\":4.2568,\"ZAR\":15.7773,\"CAD\":1.4598,\"ISK\":135.8,\"BRL\":4.5157,\"RON\":4.783,\"NZD\":1.6653,\"TRY\":6.6843,\"JPY\":121.94,\"RUB\":69.9563,\"KRW\":1296.28,\"USD\":1.1234,\"HUF\":330.53,\"AUD\":1.5995},\"date\":\"2019-12-31\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Should respond with status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.api_Should_respond_with_status_code_as(int)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain date as \"2019-12-31\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.Response_should_contain_expected_date(String)"
});
formatter.write("Expected Date 2019-12-31 matches with actual response date 2019-12-31");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain not null values for \"EUR,JPY\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.response_should_contain_not_null_values_for_Currencies(String)"
});
formatter.write("Response currency : \u0027JPY\u0027 , returned a valid actual value \u0027121.94\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain base currency as \"EUR\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.response_should_contain_base_currency_as(String)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.write("Actual response base currency : \u0027EUR\u0027 matches with expected base currency : \u0027EUR\u0027");
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate that API returns data for today when queried for a future date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HSBCTest"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as \"\u003cEndPoint\u003e\" \"\u003cQueryParamaters\u003e\" \"\u003cCurrencyCode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "API Should respond with status code as \"200\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Response should contain date as \"\u003cResponseDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Response for future date should match with response for today",
  "keyword": "And "
});
formatter.step({
  "name": "Response should contain not null values for \"\u003cCheckCurrencies\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "EndPoint",
        "QueryParamaters",
        "CurrencyCode",
        "ResponseDate",
        "CheckCurrencies"
      ]
    },
    {
      "cells": [
        "2020-06-03",
        "base",
        "EUR",
        "Today",
        "NZD,INR"
      ]
    },
    {
      "cells": [
        "2020-12-31",
        "base",
        "JPY",
        "Today",
        "USD,CHF"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.isForeignExchangeAPIAccessible()"
});
formatter.write("URI under testhttps://api.ratesapi.io/api/latest");
formatter.write("API is up and running");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate that API returns data for today when queried for a future date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HSBCTest"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as \"2020-06-03\" \"base\" \"EUR\"",
  "keyword": "When "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.api_is_hit_with_end_point_as(String,String,String)"
});
formatter.write("Hitting endpoint \u0027https://api.ratesapi.io/api/ with base \u003d EUR");
formatter.write("Response received : {\"base\":\"EUR\",\"rates\":{\"GBP\":0.89065,\"HKD\":8.6757,\"IDR\":15885.35,\"ILS\":3.8769,\"DKK\":7.4547,\"INR\":84.5055,\"CHF\":1.0793,\"MXN\":24.2772,\"CZK\":26.66,\"SGD\":1.5656,\"THB\":35.339,\"HRK\":7.572,\"MYR\":4.7703,\"NOK\":10.6777,\"CNY\":7.9599,\"BGN\":1.9558,\"PHP\":55.923,\"SEK\":10.4588,\"PLN\":4.4135,\"ZAR\":19.0844,\"CAD\":1.5173,\"ISK\":151.0,\"BRL\":5.7993,\"RON\":4.8393,\"NZD\":1.7532,\"TRY\":7.5703,\"JPY\":121.54,\"RUB\":77.0055,\"KRW\":1364.09,\"USD\":1.1194,\"HUF\":345.89,\"AUD\":1.628},\"date\":\"2020-06-03\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Should respond with status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.api_Should_respond_with_status_code_as(int)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain date as \"Today\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.Response_should_contain_expected_date(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c202[1-01-1]3\u003e but was:\u003c202[0-06-0]3\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepDefinitions.ExchangeRatesAPITesting.Response_should_contain_expected_date(ExchangeRatesAPITesting.java:136)\r\n\tat ✽.Response should contain date as \"Today\"(file:src/test/resources/features/ExchangeRates.feature:63)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Response for future date should match with response for today",
  "keyword": "And "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.response_for_future_date_should_match_with_response_for_today()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Response should contain not null values for \"NZD,INR\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.response_should_contain_not_null_values_for_Currencies(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Foreign Exchange Rates API is accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.isForeignExchangeAPIAccessible()"
});
formatter.write("URI under testhttps://api.ratesapi.io/api/latest");
formatter.write("API is up and running");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate that API returns data for today when queried for a future date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HSBCTest"
    }
  ]
});
formatter.step({
  "name": "API is hit with end point as \"2020-12-31\" \"base\" \"JPY\"",
  "keyword": "When "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.api_is_hit_with_end_point_as(String,String,String)"
});
formatter.write("Hitting endpoint \u0027https://api.ratesapi.io/api/ with base \u003d JPY");
formatter.write("Response received : {\"base\":\"JPY\",\"rates\":{\"GBP\":0.0071075184,\"HKD\":0.0752170132,\"IDR\":136.3013676971,\"ILS\":0.0311858645,\"DKK\":0.0588259941,\"INR\":0.7088346905,\"CHF\":0.0085398055,\"MXN\":0.1930271168,\"CZK\":0.2074630406,\"SGD\":0.0128215669,\"THB\":0.2903549688,\"HRK\":0.0597035339,\"EUR\":0.0079057633,\"MYR\":0.0390070361,\"NOK\":0.0827757135,\"CNY\":0.0634239861,\"BGN\":0.0154620919,\"PHP\":0.4674282552,\"PLN\":0.0360479089,\"ZAR\":0.1424768756,\"CAD\":0.0123590798,\"ISK\":1.2340896514,\"BRL\":0.0503873824,\"RON\":0.0384876275,\"NZD\":0.0134271484,\"TRY\":0.0720460115,\"JPY\":1.0,\"RUB\":0.7231172425,\"KRW\":10.5620997707,\"USD\":0.0097011621,\"AUD\":0.0125670013,\"HUF\":2.8768282078,\"SEK\":0.0793288007},\"date\":\"2020-12-31\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Should respond with status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.api_Should_respond_with_status_code_as(int)"
});
formatter.write("Actual status code : \u0027200\u0027 matches with expected status code : \u0027200\u0027");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response should contain date as \"Today\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.Response_should_contain_expected_date(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c202[1-01-13]\u003e but was:\u003c202[0-12-31]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepDefinitions.ExchangeRatesAPITesting.Response_should_contain_expected_date(ExchangeRatesAPITesting.java:136)\r\n\tat ✽.Response should contain date as \"Today\"(file:src/test/resources/features/ExchangeRates.feature:63)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Response for future date should match with response for today",
  "keyword": "And "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.response_for_future_date_should_match_with_response_for_today()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Response should contain not null values for \"USD,CHF\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExchangeRatesAPITesting.response_should_contain_not_null_values_for_Currencies(String)"
});
formatter.result({
  "status": "skipped"
});
});