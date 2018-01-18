#Requirements

First you will need to have preinstalled NodeJS and npm on your machine. You can download the nodeJS from here https://nodejs.org/en/  
Install npm packages "npm install" 
Install Mocha by running the command “npm install wdio-mocha-framework - - save-dev” 
Install selenium standalone globally by running the following commands in sequence 
    "npm install selenium-standalone@latest -g" 
    "selenium-standalone install" 
Start the selenium server by running the below command 
    "selenium-standalone start" 

##Setup your Browser 
    For running Chrome browser tests on your local machine you need to download ChromeDriver from https://sites.google.com/a/chromium.org/chromedriver/home  and make it available on your machine by setting the PATH to the ChromeDriver executable. 

    Same applies from Firefox as well. You can download the latest gecko driver from https://github.com/mozilla/geckodriver/releases and make it available in the PATH of your machine.  

##Run the specs using command "npm run test" 

##Reports 
The Allure Reporter creates Allure test reports which is an HTML generated website with all necessary information to debug your test results and take a look on error screenshots. 
To use it install it from NPM: “npm install wdio-allure-reporter –save –dev”
Run the following command to generate the HTML report 
  "npm run report"