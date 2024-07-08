# WPFORM sdet Demo testing
This Project is used for demo test automation purposes of sdet.wpforms app.
The project was created to show basic structure, not for being used as a framework for production system.

### Testing
Project for testing using Playwright as a framework for Web Testing Automation.
Configuration is located in file playwright.config.ts. 
To be able to login to wp dashboard, please update .env file with credentials


### Local running
You could run test either by using playwright preinstalled : 
`npm run test`

Or use a Docker container for it. 
`docker build -t demo_tests .` - to build docker container 

`docker run -it --rm  -v $PWD:/app demo_tests` - to run tests in the docker 

#### For generating actionable report after local run: 

`npx playwright show-report` - will open the last test run report in the browser
