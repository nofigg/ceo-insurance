# CEO Insurance

A modern web application showcasing El Paso's top insurance benefit providers, helping users discover and compare the best insurance and benefit coverage options in the area.

## 🚀 Live Demo
Visit the live application at: [https://v0-ceo-insurance-jm044mfqohd-cr7n3knxc-nofigg.vercel.app](https://v0-ceo-insurance-jm044mfqohd-cr7n3knxc-nofigg.vercel.app)

## ✨ Features

- Modern, responsive UI built with Tailwind CSS
- Server-side rendered pages with Next.js
- Accessible components using shadcn/ui and Radix UI primitives
- Insurance provider comparison tools
- Agent connection system
- Dark mode support

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Deployment:** Vercel
- **Form Handling:** React Hook Form
- **Validation:** Zod

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/nofigg/ceo-insurance.git
cd ceo-insurance
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔧 Configuration

The project uses several configuration files:

- `tailwind.config.js` - Tailwind CSS configuration
- `components.json` - shadcn/ui components configuration
- `tsconfig.json` - TypeScript configuration

## 📁 Project Structure

```
ceo-insurance/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       └── ...
├── lib/
│   └── utils.ts
└── public/
```

## 🔄 Deployment

The application is automatically deployed to Vercel when changes are pushed to the main branch. The deployment process includes:

1. Automatic build optimization
2. Edge network distribution
3. Serverless functions
4. Environment variable management

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

MIT License