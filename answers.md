In Jest, what are the differences between describe() and it() globals, and what are good uses for them?
- Describe() is used as a holder for a group of tests, or example, anything relating to a specific component can be held in a describe. When the test runs the tests run within the describe will be indented and easily associated with the describe. An it is() used to run individual tests, such as testing a single button rendering to the screen. Or a more functional test, where you check if the button renders to the screen and on a click event, it fires a function. 

What is the point of Test Driven Development? What do you think about this approach?
- Test driven development ensures the code you are writing functions as intended. Once tests are written they inform you of the integrity of your code until you need that functionality to change. This makes refactoring code much safer, because the test will ensure the components / functions are still behaving as intended. 

Mention three types of automated tests.
- unit testing, integration testing, end to end testing