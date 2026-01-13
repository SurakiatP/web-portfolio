# Adding Custom Icons and Text Fallbacks

## Overview
You can easily add your own custom icons or use text as fallback when there's no icon available for a technology.

## Method 1: Using Custom Icon Images

### Step 1: Add your icon file
Place your icon file (SVG, PNG, or any image format) in the `public` folder:
```
web-portfolio/
  public/
    icons/
      my-custom-icon.svg
      langchain-logo.png
```

### Step 2: Use it in your skills data

```tsx
{
  category: "Generative AI & LLMs",
  icon: <Sparkles className="w-6 h-6 text-purple-400" />,
  items: [
    { 
      name: "LangChain", 
      logo: <img src="/icons/langchain-logo.png" alt="LangChain" className="w-8 h-8" /> 
    },
    // ... other items
  ]
}
```

## Method 2: Using Text as Fallback

When there's no icon available, you can display the technology name as styled text:

```tsx
{
  name: "RAG Systems",
  logo: (
    <div className="w-8 h-8 flex items-center justify-center">
      <span className="text-xs font-bold">RAG</span>
    </div>
  )
}
```

### Better Text Badge Style

For a more polished look, use a background and border:

```tsx
{
  name: "Prompt Engineering",
  logo: (
    <div className="px-2 py-1 bg-slate-800 border border-white/10 rounded-md flex items-center justify-center">
      <span className="text-[10px] font-bold whitespace-nowrap">Prompt Eng</span>
    </div>
  )
}
```

## Method 3: Mixed Approach

You can mix icons and text in the same category:

```tsx
{
  category: "Generative AI & LLMs",
  icon: <Sparkles className="w-6 h-6 text-purple-400" />,
  items: [
    // Official brand icon
    { name: "Hugging Face", logo: <SiHuggingface className="w-8 h-8" /> },
    
    // Custom image icon
    { name: "LangChain", logo: <img src="/icons/langchain.svg" className="w-8 h-8" /> },
    
    // Text fallback
    { 
      name: "RAG Systems", 
      logo: (
        <div className="px-2 py-1 bg-cyan-500/10 rounded text-[10px] font-bold">
          RAG
        </div>
      )
    }
  ]
}
```

## Example: Complete Skill Category with Mixed Icons

```tsx
{
  category: "AI Tools",
  icon: <Brain className="w-6 h-6 text-purple-400" />,
  items: [
    // react-icons brand logo
    { name: "OpenAI", logo: <SiOpenai className="w-8 h-8" /> },
    
    // lucide-react icon
    { name: "Neural Networks", logo: <Brain className="w-8 h-8" /> },
    
    // Custom SVG from public folder
    { name: "LangChain", logo: <img src="/icons/langchain.svg" className="w-8 h-8" alt="LangChain" /> },
    
    // Text badge fallback
    { 
      name: "Custom AI Tool", 
      logo: (
        <div className="h-8 flex items-center px-2 bg-purple-500/10 border border-purple-500/20 rounded-md">
          <span className="text-xs font-semibold text-purple-400">CAT</span>
        </div>
      )
    }
  ]
}
```

## Finding Icons

### From react-icons library
- Website: https://react-icons.github.io/react-icons/
- Search for technology names
- Import from appropriate package:
  - `react-icons/si` - Simple Icons (brand logos)
  - `react-icons/fa` - Font Awesome
  - `react-icons/bi` - BoxIcons

### Custom Icons
- Get official brand SVGs from their press/brand pages
- Download from icon sites (ensure licensing)
- Create your own in design tools

## Current Layout

Your skills section now follows this layout:

```
Row 1 (Full Width):
├── Generative AI & LLMs (spans 3 columns)

Row 2 (3 columns):
├── Programming
├── ML/DL Frameworks  
└── Vector Databases & Embeddings

Row 3 (3 columns):
├── MLOps
├── Computer Vision
└── Data Engineering

Row 4 (3 columns):
├── Backend & Deployment
├── Visualization
└── Cloud & DevOps
```
