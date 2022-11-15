Feature: Google Main Page

  I want to open a search engine
  Scenario Outline: Scenario Outline name: Opening a search engine page
    Given I open Google page
    Then I see '<title>' in the title
    # Then I see "shiva" in the title
    Then click gmail button
    And i click on get gmail btn
    Examples:
        | title | 
        | Google  |
        | shiva  |