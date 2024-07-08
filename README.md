# WPFORM sdet Demo testing
This Project is used for demo test automation purposes of sdet.wpforms app.
Project was created to show basic structure, not for being used as a framework for production system.

### Testing
Project for tests using Playwright as a framework for Web Testing Automation.
Configuration is located in file playwright.config.ts. 
To be able to login to a wp dashboard, please update .env file with a credentials


### Local running
You could run test either by using playwright preinstalled : 
`npm run test`

Or use Docker container for it. 
`docker build -t demo_tests .` - to build docker container 

`docker run -it --rm  -v $PWD:/app demo_tests` - to run tests in the docker 

#### For generating actionable report after local: 

`npx playwright show-report` - will open the last test run report in the browser
