Feature: Get and validate conversion rates for past and future dates using Foreign Exchange Rates API
  Description: Validating that Foreign Exchange Rates API

  Background: 
    Given Foreign Exchange Rates API is accessible
#Start of First Scenario
  @HSBCTest
  Scenario Outline: Validate that API responds with correct status code
    When API is hit with end point as "<EndPoint>"
    Then API Should respond with status code as "200"
#End of first scenario

#Start of 2nd Scenario    
  @HSBCTest
  Scenario Outline: Confirm that API responds with correct base value for currency based on input
    When API is hit with end point as "<EndPoint>" "<QueryParamaters>" "<CurrencyCode>"
    Then API Should respond with status code as "200"
    And Response should contain base currency as "<CurrencyCode>"
    And Response should contain value "1.0" for "<CurrencyCode>"
    And Response should contain not null values for "<CheckCurrencies>"

    Examples: 
      | EndPoint | QueryParamaters | CurrencyCode | CheckCurrencies |
      | latest   | base       | GBP          | INR,AUD         |
      | latest   | base       | HKD          | INR,AUD         |
      | latest   | base       | NZD          | INR,AUD         |
#End of scenario

#Start of 3rd Scenario
  @HSBCTest
  Scenario Outline: Validate results when incorrect/invalid endpoint is invoked
    When API is hit with end point as ?base="<EndPoint>"
    Then API Should respond with status code as "<StatusCode>"
    And Error message should be displayed as "<ErrorMessage>"

    Examples: 
      | EndPoint | StatusCode | ErrorMessage                 |
      | BKG      |        400 | Base 'BKG' is not supported. |
      | 123      |        400 | Base '123' is not supported. |
      | @#$      |        400 | Base '@#$' is not supported. |
#End of scenario

#Start of 4th Scenario 
 @HSBCTest
  Scenario Outline: Validate that API returns data for specific past date
    When API is hit with end point as "<EndPoint>" "<QueryParamaters>" "<CurrencyCode>"
    Then API Should respond with status code as "200"
    And Response should contain date as "<ResponseDate>"
    And Response should contain not null values for "<CheckCurrencies>"
    And Response should contain base currency as "<CurrencyCode>"

    Examples: 
      | EndPoint   | QueryParamaters | CurrencyCode | ResponseDate | CheckCurrencies |
      | 2020-05-31 | base       | USD          | 2020-05-31   | NZD,INR         |
      | 2019-12-31 | base       | EUR          | 2019-12-31   | EUR,JPY         |
#End of scenario

#Start of fifth Scenario
  @HSBCTest
  Scenario Outline: Validate that API returns data for today when queried for a future date
    When API is hit with end point as "<EndPoint>" "<QueryParamaters>" "<CurrencyCode>"
    Then API Should respond with status code as "200"
    And Response should contain date as "<ResponseDate>"
    And Response for future date should match with response for today
    And Response should contain not null values for "<CheckCurrencies>"

    Examples: 
      | EndPoint   | QueryParamaters | CurrencyCode | ResponseDate | CheckCurrencies |
      | 2020-06-03 | base       | EUR          | Today        | NZD,INR         |
      | 2020-12-31 | base       | JPY          | Today        | USD,CHF         |
#End of scenario