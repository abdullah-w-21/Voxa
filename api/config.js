export default function handler(request, response) {
  response.status(200).json({
    geminiApiKey: process.env.GEMINI_API_KEY
  });
}
