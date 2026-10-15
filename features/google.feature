Feature: Google search test
@Google
  Scenario: Search Ritesh on Google Search Page
    Given I am on Google Search Page
    When I search "Ritesh"
    Then I see in title contains "Ritesh"
