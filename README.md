# StudySpark AI - Base Mini App

Ignite your learning with AI-powered study tools. An AI study assistant that generates practice questions and concise summaries from course materials for students.

## Features

- **AI Study Question Generator**: Upload or paste course notes/readings, and the AI will generate practice questions with answers to help students test their knowledge.
- **AI Concise Summary Generator**: Input lengthy text, lecture transcripts, or articles, and receive clear, digestible summaries to quickly grasp key information.
- **Credit-Based System**: Pay-per-generation model with micro-transactions for summaries and question sets.
- **Base Network Integration**: Built for the Base ecosystem with MiniKit and OnchainKit.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenAI API key (or OpenRouter API key)
- OnchainKit API key for Base network integration

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd studyspark-ai
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your API keys:
- `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: Your OnchainKit API key
- `OPENAI_API_KEY`: Your OpenAI API key

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Input Study Material**: Paste your course notes, readings, or lecture transcripts into the text area.

2. **Choose Generation Type**:
   - **Generate Questions**: Creates practice questions with answers (~$0.50 per set)
   - **Summarize Text**: Creates concise summaries (~$0.10 per summary)

3. **Review Output**: The AI-generated content appears in a formatted display that you can copy or reset.

4. **Manage Credits**: Monitor your credit balance and purchase more credits as needed.

## Technical Architecture

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **AI Integration**: OpenAI API with Gemini 2.0 Flash model
- **Blockchain**: Base network via MiniKit and OnchainKit
- **TypeScript**: Full type safety throughout

### Key Components
- `StudyDashboard`: Main interface for content generation
- `GenerationOutput`: Displays AI-generated content
- `CreditBalance`: Manages user credits and purchases
- `AppShell`: Layout wrapper with gradient background

### API Routes
- `/api/generate`: Handles AI content generation requests

## Business Model

- **Micro-transactions**: Pay-per-generation pricing
  - Summaries: ~$0.10 each
  - Question sets: ~$0.50 each
- **Credit System**: Users purchase credits for content generation
- **Future Features**: Subscription plans and tokenized access

## Development

### Project Structure
```
app/                 # Next.js App Router pages
├── api/            # API routes
├── globals.css     # Global styles
├── layout.tsx      # Root layout
├── page.tsx        # Home page
└── providers.tsx   # App providers

components/         # React components
├── ui/            # Reusable UI components
├── AppShell.tsx   # Main layout
├── StudyDashboard.tsx
└── ...

lib/               # Utilities and types
├── openai.ts      # AI integration
├── types.ts       # TypeScript types
└── utils.ts       # Helper functions
```

### Key Features Implementation

1. **AI Content Generation**: Uses OpenAI's API with custom prompts for educational content
2. **Credit System**: Estimates costs based on content length and type
3. **Responsive Design**: Mobile-first approach with Tailwind CSS
4. **Error Handling**: Comprehensive error boundaries and loading states
5. **Base Integration**: MiniKit provider for blockchain functionality

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
