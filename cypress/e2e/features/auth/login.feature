Feature: Sauce Demo Login

  @login
  Scenario Outline: User logs in with various credentials
    Given I open the Sauce Demo login page
    When I login with username "<username>" and password "<password>"
    Then I should see the "<expectedResult>"

    Examples:
      | username        | password     | expectedResult                      |
      | standard_user   | secret_sauce | Products                            |
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out. |
