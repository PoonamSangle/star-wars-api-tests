# Star Wars API Tests

This repository contains automated tests for the Star Wars API (SWAPI) using Mocha and Axios.

## Getting Started

### Prerequisites

- Node.js installed
- npm (Node Package Manager) installed

### Installation

1. Clone the repository:
```
git clone https://github.com/PoonamSangle/star-wars-api-tests.git
```

2. Navigate to the project directory:
```
cd star-wars-api-tests
```

3. Install dependencies:
```
npm install
npm install mochawesome
mocha --reporter mochawesome
```

4. Update your package.json file to include npm scripts for running tests and generating reports:
```
"scripts": {
"test": "mocha --reporter mochawesome",
"report": "npx mochawesome-merge mochawesome-report/*.json > merged-report-$(date +'%Y%m%d%H%M%S').json && npx marge merged-report-*.json -o mochawesome-report"
}
```

5. Running Tests
```
npm test
```

6. Generating Reports
```
npm run report
```


This will generate HTML reports in the mochawesome-report directory.