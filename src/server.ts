import dotenv from 'dotenv';
import express from 'express';
import type { Request, Response } from 'express';
import { OpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { z } from "zod";
import { StructuredOutputParser, OutputFixingParser } from 'langchain/output_parsers';

dotenv.config();

const port = process.env.PORT || 3001;
const apiKey = process.env.OPENAI_API_KEY;

// Check if the API key is defined
if (!apiKey) {
  console.error('OPENAI_API_KEY is not defined. Exiting...');
  process.exit(1);
}

const app = express();
app.use(express.json());

// TODO: Initialize the OpenAI model
let model: OpenAI;

if (apiKey) {
  model = new OpenAI({ temperature: 0 , openAIApiKey: apiKey, modelName: 'gpt-3.5-turbo' });
} else {
  console.error('OPENAI_API_KEY is not configured.');
}

// TODO: Define the parser for the structured output
const parser = StructuredOutputParser.fromZodSchema(z.object({
  day1: z.string(),
  day2: z.string(),
  day3: z.string(),
  day4: z.string(),
  day5: z.string(),
}));


// TODO: Get the format instructions from the parser
const formatInstructions = parser.getFormatInstructions();

// TODO: Define the prompt template
const promptTemplate = new PromptTemplate({
  template: `You are an excited sports announcer giving the weather report.  Give me a five-day weather forecast for {location} like you are calling a game. {format_instructions}`,
  inputVariables: ['location'],
  partialVariables: { format_instructions: formatInstructions },
});

// Create a prompt function that takes the user input and passes it through the call method
const promptFunc = async (input: string) => {
  try {
        // TODO: Format the prompt with the user input
        const prompt = await promptTemplate.format({ location: input });
        // TODO: Call the model with the formatted prompt
        const response = await model.invoke(prompt);
        // TODO: return the JSON response
        const parsedResponse = await parser.parse(response);
        return parsedResponse;
        // TODO: Catch any errors and log them to the console
} catch (error: unknown) {
  if (error instanceof Error) {
  console.error('Error:', error.message);
  }
  return { error: 'Internal Server Error' };
}
};

// Endpoint to handle request
app.post('/forecast', async (req: Request, res: Response): Promise<void> => {
  try {
    const location: string = req.body.location;
    if (!location) {
      res.status(400).json({
        error: 'Please provide a location in the request body.',
      });
    }
    const result: any = await promptFunc(location);
    res.json({ result });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
