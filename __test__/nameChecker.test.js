
// https://knowledge.udacity.com/questions/174638
import "babel-polyfill";
// Import the js file to test
import { checkForName } from "../src/client/js/nameChecker"


describe("Testing the submit functionality", () => {
    test("Testing the checkForName() function", () => {
          
          expect(checkForName).toBeDefined();
    })});