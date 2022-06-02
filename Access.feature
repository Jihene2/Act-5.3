
@tag1
Feature: Acces to the website


 Background: Verify the accessibility to the website todos
    Given browser is open
    When user put the link of the website
    Then show homepage

   
  @tag2
  Scenario: verify that the user can create a checklist
    Given write to do 
    When user click enter
    Then the writen ToDo will be added to the list 
    

      
      