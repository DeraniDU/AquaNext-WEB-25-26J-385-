export type ResearchArticle = {
  id: string;
  title: string;
  author: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string;
};

export const researchArticles: ResearchArticle[] = [
  {
    id: "ai-in-aquaculture",
    title: "The Role of Artificial Intelligence in Sustainable Aquaculture",
    author: "Dr. Elena Rostova",
    date: "2026-04-12",
    tags: ["AI", "Sustainability", "Aquaculture"],
    excerpt: "Exploring how machine learning models can predict water quality trends and optimize feed distribution to reduce environmental impact.",
    content: "Artificial Intelligence is rapidly transforming the aquaculture industry. By integrating IoT sensors with predictive machine learning models, modern farms can maintain optimal biosystems and reduce feed waste by up to 30%. This paper delves into the algorithms defining the next generation of smart farming...",
  },
  {
    id: "water-quality-prediction",
    title: "Deep Learning for Real-time Water Quality Prediction",
    author: "James Chen",
    date: "2026-03-28",
    tags: ["Deep Learning", "IoT", "Data Science"],
    excerpt: "A comprehensive study on utilizing LSTM networks for forecasting pH and dissolved oxygen levels in prawn farming.",
    content: "Maintaining proper pH and dissolved oxygen levels is critical. Our research presents a novel Recurrent Neural Network (RNN) architecture with Long Short-Term Memory (LSTM) cells that accurately forecast these metrics up to 48 hours in advance based on historical API data...",
  },
  {
    id: "automated-disease-detection",
    title: "Automated Disease Detection in Shrimp via Computer Vision",
    author: "Sarah Jenkins",
    date: "2026-02-15",
    tags: ["Computer Vision", "Health", "Shrimp Farming"],
    excerpt: "Implementing advanced CNNs to detect early signs of White Spot Syndrome Virus through visual monitoring systems.",
    content: "Early detection of diseases such as WSSV is vital to preventing entire farm losses. By training Convolutional Neural Networks (CNNs) on a proprietary dataset of over 50,000 underwater images, our system achieves a 94% accuracy rate in early diagnosis...",
  }
];

export function getArticleById(id: string): ResearchArticle | undefined {
  return researchArticles.find((article) => article.id === id);
}
