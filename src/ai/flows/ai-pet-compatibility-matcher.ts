'use server';
/**
 * @fileOverview An AI agent that recommends suitable pets from "Purrfect Whiskers" based on user preferences.
 *
 * - aiPetCompatibilityMatcher - A function that handles the pet compatibility matching process.
 * - AiPetCompatibilityMatcherInput - The input type for the aiPetCompatibilityMatcher function.
 * - AiPetCompatibilityMatcherOutput - The return type for the aiPetCompatibilityMatcher function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiPetCompatibilityMatcherInputSchema = z.object({
  homeEnvironment: z.string().describe('Description of the potential adopter\'s home environment (e.g., "small apartment", "house with a large garden", "quiet suburban home", "busy city apartment").'),
  activityLevel: z.string().describe('The potential adopter\'s typical activity level (e.g., "sedentary", "moderately active with daily walks", "very active with regular hikes").'),
  hasChildren: z.boolean().describe('Whether the potential adopter has children in the household.'),
  hasOtherPets: z.boolean().describe('Whether the potential adopter has other pets in the household.'),
  petSizePreference: z.string().describe('The preferred size of the pet (e.g., "small", "medium", "large", "no preference").'),
  petTemperamentPreference: z.string().describe('The preferred temperament of the pet (e.g., "calm and cuddly", "playful and energetic", "independent", "affectionate and social").'),
  experienceWithPets: z.string().describe('The potential adopter\'s experience level with pets (e.g., "first-time owner", "experienced dog owner", "grew up with cats").'),
  timeAlone: z.string().describe('How many hours a day the pet would typically be left alone.'),
});
export type AiPetCompatibilityMatcherInput = z.infer<typeof AiPetCompatibilityMatcherInputSchema>;

const AiPetCompatibilityMatcherOutputSchema = z.object({
  recommendations: z.array(z.object({
    petName: z.string().describe('The name of the recommended pet.'),
    species: z.enum(['cat', 'dog']).describe('The species of the recommended pet (cat or dog).'),
    breed: z.string().describe('The breed of the recommended pet.'),
    age: z.string().describe('The age of the recommended pet (e.g., "young", "adult", "senior", "kitten", "puppy").'),
    location: z.string().describe('The fictional UK location where the pet is currently fostered/available (e.g., "London", "Manchester", "Edinburgh").'),
    compatibilityReason: z.string().describe('A detailed explanation of why this pet is a good match for the potential adopter, considering their preferences and home environment.'),
    imageUrl: z.string().url().describe('A placeholder URL for an image of the recommended pet.'),
  })).describe('A list of pet recommendations based on the user\'s input.'),
});
export type AiPetCompatibilityMatcherOutput = z.infer<typeof AiPetCompatibilityMatcherOutputSchema>;

export async function aiPetCompatibilityMatcher(input: AiPetCompatibilityMatcherInput): Promise<AiPetCompatibilityMatcherOutput> {
  return aiPetCompatibilityMatcherFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPetCompatibilityMatcherPrompt',
  input: {schema: AiPetCompatibilityMatcherInputSchema},
  output: {schema: AiPetCompatibilityMatcherOutputSchema},
  prompt: `You are an expert pet matchmaker for "Purrfect Whiskers", a UK-based dog and cat rescue. Your goal is to recommend specific cats or dogs currently awaiting adoption to potential adopters based on their lifestyle and preferences.

The potential adopter has provided the following information about themselves:
- Home Environment: {{{homeEnvironment}}}
- Activity Level: {{{activityLevel}}}
- Has Children: {{{hasChildren}}}
- Has Other Pets: {{{hasOtherPets}}}
- Pet Size Preference: {{{petSizePreference}}}
- Pet Temperament Preference: {{{petTemperamentPreference}}}
- Experience with Pets: {{{experienceWithPets}}}
- Time Pet Would Be Alone Daily: {{{timeAlone}}}

Based on this information, suggest 3-5 specific pets that would be an excellent, lifelong match for this adopter. For each recommendation, provide the pet's name, species (cat or dog), breed, age, a fictional UK location, a detailed reason explaining the compatibility, and a high-quality placeholder image URL that depicts a happy dog or cat. Ensure the image URLs are varied and look realistic.

Here are some example placeholder image URLs you can use, feel free to use others too:
- Dogs:
  - https://images.unsplash.com/photo-1543466835-00a7907e9dde?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  - https://images.unsplash.com/photo-1561037406-61edfb95f1ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  - https://images.unsplash.com/photo-1587300003388-59208cc9ff0a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  - https://images.unsplash.com/photo-1596492784531-ee0385759f20?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
- Cats:
  - https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  - https://images.unsplash.com/photo-1577023300547-4940f90e5094?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  - https://images.unsplash.com/photo-1549547535-3162b77a064c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  - https://images.unsplash.com/photo-1563841930606-abc78ae47bc1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

Generate pets from across the UK like London, Manchester, Glasgow, Cardiff, Belfast, Birmingham, Leeds, Bristol, Edinburgh, Liverpool.
`,
});

const aiPetCompatibilityMatcherFlow = ai.defineFlow(
  {
    name: 'aiPetCompatibilityMatcherFlow',
    inputSchema: AiPetCompatibilityMatcherInputSchema,
    outputSchema: AiPetCompatibilityMatcherOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
