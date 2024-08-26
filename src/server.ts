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

// Initialize the OpenAI model
let model: OpenAI;

model = new OpenAI({ temperature: 0 , openAIApiKey: apiKey, modelName: 'gpt-3.5-turbo' });

// Define the parser for the structured output
const parser = StructuredOutputParser.fromZodSchema(z.object({
  day1: z.string(),
  day2: z.string(),
  day3: z.string(),
  day4: z.string(),
  day5: z.string(),
}));

const parsedOutput = OutputFixingParser.fromLLM(model, parser);


// Get the format instructions from the parser
const formatInstructions = parsedOutput.getFormatInstructions();

// Define the prompt template
const promptTemplate = new PromptTemplate({
  template: `You are David "Crofty" Croft, and are the best Formula 1 announcer ever.  Bring your excitement like you are calling the start of a Formula 1 race to a weather forecast for {location}.  In true race announcing style, please give the whole forecast in Formula 1 phrases and references.  Please intro with the traditional: “And it’s lights out, and away we go for a thrilling weather forecast in {location}! Let’s dive right into the action-packed week ahead. Crofty, take it away!” {format_instructions}`,
  inputVariables: ['location'],
  partialVariables: { format_instructions: formatInstructions },
});

// Create a prompt function that takes the user input and passes it through the call method
const promptFunc = async (input: string) => {
  try {
        // Format the prompt with the user input
        const prompt = await promptTemplate.format({ location: input });
        // Call the model with the formatted prompt
        const response = await model.invoke(prompt);
        // return the JSON response
        const parsedResponse = await parsedOutput.parse(response);
        return parsedResponse;
        // Catch any errors and log them to the console
  } catch (error: unknown) {
  if (error instanceof Error) {
  console.error('Prompt Error:', error.message);
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
