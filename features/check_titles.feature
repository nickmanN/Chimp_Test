Feature: Check title

 As a visitor to the site,
 I make sure that page title is "Product reviews, how-tos, deals and the latest tech news - CNET"
 Then I select "News" category
 And make sure that title should be "Technology News - CNET News - CNET".

 Background:
    Given I am on the site

 @watch
 Scenario: Visitor go to "News" section and check title
   	When I see title "Product reviews, how-tos, deals and the latest tech news - CNET"
    Then I click on "News" button 
    And see title "Technology News - CNET News - CNET"
    


# /features/check_titles.feature
