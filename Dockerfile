# use official container with playwright
FROM mcr.microsoft.com/playwright:v1.45.1-jammy

WORKDIR /app

# copy project
COPY . .

# Install dependencies
RUN npm ci

# Run playwright test
CMD [ "npm", "run", "test" ] 