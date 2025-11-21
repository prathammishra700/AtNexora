import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  // Always retrieve the latest key from process.env when creating the client
  // to support the API Key Selection flow for Veo.
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export interface ContentGenerationParams {
  type: 'caption' | 'script' | 'idea';
  topic: string;
  tone: string;
}

export const generateCreativeContent = async (params: ContentGenerationParams): Promise<string> => {
  const ai = getAiClient();
  let prompt = "";

  switch (params.type) {
    case 'caption':
      prompt = `Write a catchy, engaging social media caption for Instagram/TikTok about "${params.topic}". Tone: ${params.tone}. Include hashtags.`;
      break;
    case 'script':
      prompt = `Write a 30-second short video script (TikTok/Reels style) about "${params.topic}". Tone: ${params.tone}. Format it with Scene and Audio columns.`;
      break;
    case 'idea':
      prompt = `Generate 5 unique and viral content ideas for a brand focusing on "${params.topic}". Tone: ${params.tone}. Provide a brief description for each.`;
      break;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "No content generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error generating your content. Please try again.";
  }
};

export const generateVideoContent = async (prompt: string): Promise<string | null> => {
  const ai = getAiClient();
  
  try {
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt,
      config: {
        numberOfVideos: 1,
        resolution: '720p', 
        aspectRatio: '16:9'
      }
    });

    // Poll for completion
    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 5000)); // Check every 5s
      operation = await ai.operations.getVideosOperation({operation: operation});
    }

    const videoUri = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (!videoUri) return null;

    // The uri needs the API key appended to be accessible
    return `${videoUri}&key=${process.env.API_KEY}`;

  } catch (error) {
    console.error("Video Generation Error:", error);
    throw error;
  }
};
