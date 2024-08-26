## <a name="top"></a>

# Formula 1 Weather Forecast API

---

![GitHub License](https://img.shields.io/github/license/TEMPTAG/Sports-WeatherReport?label=License)

## Description

Welcome to the Formula 1 Weather Forecast API! This project allows you to retrieve a five-day weather forecast for any city in the thrilling style of David “Crofty” Croft, the famous Formula 1 announcer. Whether you’re a fan of F1 or just want to hear your weather forecast with some extra excitement, this API has got you covered.

![Screenshot of Application Sample]()
[You can see the application in action HERE]()

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

---

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express**: Web framework for Node.js
- **OpenAI API**: Provides the GPT-3.5 model for generating text
- **TypeScript**: Type safety and modern JavaScript features
- **dotenv**: Loads environment variables from a .env file
- **Zod**: Type validation with TypeScript

---

## Installation

**To install this project locally, jump into your terminal application and please follow these steps**:

1. Clone the `Sports-WeatherReport` Repository to your local machine - first navigate to the directory you would like to clone it into, then:

```bash
Using HTTPS:
git clone https://github.com/TEMPTAG/Sports-WeatherReport.git

Using SSH:
git clone git@github.com:TEMPTAG/Sports-WeatherReport.git

Using GitHub CLI:
gh repo clone TEMPTAG/Sports-WeatherReport
```

2. Navigate into the `Sports-WeatherReport` directory you just cloned down:

```bash
cd Sports-WeatherReport
```

3. Install the npm dependencies:

```bash
npm install
```

4. Create an .env file in the root directory and add your OpenWeatherMap API key:

```bash
OPENAI_API_KEY=your-openai-api-key
```

5. Start the development server:

```bash
npm start
```

---

## Usage

**After the server is running, on `http://localhost:3001` by default**

You can use a program like Insomnia to run the API Endpoints for `POST/forecast` to retrieve a five-day forecast in the style of Formula 1 race commentary.

Example Request:
```json
{
    "location": "City, State"
}
```

Example Response for Phoenix, AZ:
```json
{
	"result": {
		"day1": "And it's lights out, and away we go for a thrilling weather forecast in Phoenix, AZ! Let's dive right into the action-packed week ahead. Crofty, take it away! On Day 1, we have clear skies and scorching temperatures, just like the heat of a fierce battle on the track.",
		"day2": "Moving on to Day 2, we see some high winds sweeping through the area, creating challenging conditions for the drivers, much like a sudden change in weather during a race.",
		"day3": "As we reach Day 3, there's a chance of thunderstorms in the forecast, adding an element of unpredictability to the weather, similar to the unexpected twists and turns of a Grand Prix.",
		"day4": "On Day 4, the sun is back out in full force, shining brightly over the desert landscape, mirroring the intensity of a race under the blazing sun.",
		"day5": "And finally, on Day 5, we wrap up the week with clear skies once again, providing perfect conditions for some fast and furious racing action, just like the thrilling conclusion of a Grand Prix weekend."
	}
}
```

---

## Contributing

![GitHub contributors](https://img.shields.io/github/contributors/TEMPTAG/Sports-WeatherReport?color=green) ![GitHub commit activity](https://img.shields.io/github/commit-activity/t/TEMPTAG/Sports-WeatherReport)

OH. MY. GOODNESS. Collaborations are amazing. Share ideas, code, etc. with others is the best way to share knowledge, mutual enthusiasms, and a lot of times we make cool friends along the way. I welcome contributions in many ways, shapes, and forms:

- [Email Me](mailto:iansterlingferguson@gmail.com) and just plain tell me what you like, do not like, would like to see changed... just give me a compliment before laying it on me
- FORK IT ALL - create a fork, clone it down, mess it up, do the neato commits and comments, push it back, test it at least a million times, then submit a pull request for me to review and merge into the project if I think you are cool (and the code is cool too) - but again, the nice thing to do would be emailing me first and telling me your intentions... and don't forget the compliment part

Something, something... Have your people call my people. And by call, I mean email - who answers the phone these days?

---

## Tests

As the above states, please test your changes thoroughly before submitting a pull request or sending it straight to me. As far as tests I have done? None. Zero. Ziltch. I have not learned how to do that yet, so I am relying on you to do your part until I learn how to do mine.

---

## Questions

Have questions about this project? Want to collaborate? Eager to discuss conspiracy theories or debate why your favorite car is not as cool as you think? [Email Me](mailto:iansterlingferguson@gmail.com) — just do not call, because I probably will not answer.

Did this project make your life better in any way, shape, or form? Check out my other exceptionally rare moments of lucidity on my [GitHub Profile](https://github.com/TEMPTAG)

---

## License

This project is covered under the MIT License. The details of the MIT License can be found on their site [HERE](https://opensource.org/licenses/MIT). You can also see the full details of the [LICENSE](./LICENSE) for this specific project in the linked file.

---

<div align="center">
<em>Copyright © 2024 Ian Ferguson - powered by caffine, love, and a little bit of fun</em>

[Back to top](#top)

</div>
