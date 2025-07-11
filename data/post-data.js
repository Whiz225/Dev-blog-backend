const blogPosts = [
  {
    title: "The Future of Artificial Intelligence",
    content: "Exploring how AI will transform industries in the next decade",
    image: "/img/tour-1-1.jpg",
    category: "Technology",
    readTime: "8 min",
    createdAt: new Date("2023-07-20T09:15:00.000Z"),
    slug: "future-of-ai",
    author: "6866be64fdb7ee7d124e9e20",
  },
  {
    title: "Sustainable Living in Urban Areas",
    content: "Practical tips for reducing your carbon footprint in the city",
    image: "/img/tour-1-2.jpg",
    category: "Lifestyle",
    readTime: "6 min",
    createdAt: new Date("2023-06-28T14:30:00.000Z"),
    slug: "urban-sustainable-living",
    author: "6866be64fdb7ee7d124e9e1e",
  },
  {
    title: "Beginner's Guide to Cryptocurrency",
    content:
      "Everything you need to know to start investing in digital currencies",
    image: "/img/tour-1-3.jpg",
    category: "Finance",
    readTime: "10 min",
    createdAt: new Date("2023-05-15T11:45:00.000Z"),
    slug: "crypto-beginners-guide",
    author: "6866be64fdb7ee7d124e9e23",
  },
  {
    title: "10 Essential React Hooks You Should Know",
    content: "Master these React hooks to build better applications",
    image: "/img/tour-2-1.jpg",
    category: "Programming",
    readTime: "7 min",
    createdAt: new Date("2023-08-05T16:20:00.000Z"),
    slug: "essential-react-hooks",
    author: "6866be64fdb7ee7d124e9e39",
  },
  {
    title: "The Science of Sleep",
    content:
      "Understanding how quality sleep affects your health and productivity",
    image: "/img/tour-2-2.jpg",
    category: "Health",
    readTime: "9 min",
    createdAt: new Date("2023-04-12T08:10:00.000Z"),
    slug: "science-of-sleep",
    author: "6866be64fdb7ee7d124e9e22",
  },
  {
    title: "Travel Photography Tips for Beginners",
    content:
      "Capture stunning travel memories with these professional techniques",
    image: "/img/tour-2-3.jpg",
    category: "Photography",
    readTime: "5 min",
    createdAt: new Date("2023-09-18T13:25:00.000Z"),
    slug: "travel-photo-tips",
    author: "6866be64fdb7ee7d124e9e21",
  },
  {
    title: "Plant-Based Diet for Beginners",
    content:
      "How to transition to a vegan lifestyle without feeling overwhelmed",
    image: "/img/tour-3-1.jpg",
    category: "Food",
    readTime: "6 min",
    createdAt: new Date("2023-07-30T10:50:00.000Z"),
    slug: "plant-based-diet-guide",
    author: "6866be64fdb7ee7d124e9e24",
  },
  {
    title: "Blockchain Technology Explained",
    content:
      "Demystifying the technology behind Bitcoin and other cryptocurrencies",
    image: "/img/tour-3-2.jpg",
    category: "Technology",
    readTime: "11 min",
    createdAt: new Date("2023-05-22T15:35:00.000Z"),
    slug: "blockchain-explained",
    author: "6866be64fdb7ee7d124e9e1f",
  },
  {
    title: "Minimalist Home Office Setup",
    content: "Create a productive workspace with these minimalist principles",
    image: "/img/tour-3-3.jpg",
    category: "Lifestyle",
    readTime: "4 min",
    createdAt: new Date("2023-08-14T12:40:00.000Z"),
    slug: "minimalist-home-office",
    author: "6866be63fdb7ee7d124e9e1d",
  },
  {
    title: "Python for Data Analysis",
    content: "Getting started with Pandas and NumPy for data science projects",
    image: "/img/tour-4-1.jpg",
    category: "Programming",
    readTime: "8 min",
    createdAt: new Date("2023-06-05T09:55:00.000Z"),
    slug: "python-data-analysis",
    author: "6866be64fdb7ee7d124e9e27",
  },
  {
    title: "Meditation for Stress Relief",
    content: "Simple meditation techniques to reduce anxiety and improve focus",
    image: "/img/tour-4-2.jpg",
    category: "Wellness",
    readTime: "5 min",
    createdAt: new Date("2023-09-02T17:10:00.000Z"),
    slug: "meditation-stress-relief",
    author: "6866be64fdb7ee7d124e9e28",
  },
  {
    title: "The Rise of Remote Work",
    content: "How the pandemic permanently changed where we work",
    image: "/img/tour-4-3.jpg",
    category: "Business",
    readTime: "7 min",
    createdAt: new Date("2023-04-25T14:15:00.000Z"),
    slug: "rise-of-remote-work",
    author: "6866be64fdb7ee7d124e9e2a",
  },
  {
    title: "Essential Cybersecurity Practices",
    content: "Protect your digital life with these basic security measures",
    image: "/img/tour-5-1.jpg",
    category: "Technology",
    readTime: "6 min",
    createdAt: new Date("2023-07-10T11:30:00.000Z"),
    slug: "essential-cybersecurity",
    author: "6866be64fdb7ee7d124e9e29",
  },
  {
    title: "Budget Travel in Europe",
    content: "How to explore Europe without breaking the bank",
    image: "/img/tour-5-2.jpg",
    category: "Travel",
    readTime: "9 min",
    createdAt: new Date("2023-05-08T08:45:00.000Z"),
    slug: "budget-travel-europe",
    author: "6866be64fdb7ee7d124e9e2c",
  },
  {
    title: "Home Workout Routine",
    content: "Stay fit without a gym using these effective exercises",
    image: "/img/tour-5-3.jpg",
    category: "Fitness",
    readTime: "5 min",
    createdAt: new Date("2023-08-22T16:50:00.000Z"),
    slug: "home-workout-routine",
    author: "6866be64fdb7ee7d124e9e35",
  },
  {
    title: "JavaScript ES2023 Features",
    content:
      "Explore the newest JavaScript features in the latest ECMAScript upcreatedAt",
    image: "/img/tour-6-1.jpg",
    category: "Programming",
    readTime: "7 min",
    createdAt: new Date("2023-06-15T13:05:00.000Z"),
    slug: "javascript-es2023",
    author: "6866be64fdb7ee7d124e9e2d",
  },
  {
    title: "Mindful Parenting Techniques",
    content: "How to be more present and connected with your children",
    image: "/img/tour-6-2.jpg",
    category: "Parenting",
    readTime: "6 min",
    createdAt: new Date("2023-09-10T10:20:00.000Z"),
    slug: "mindful-parenting",
    author: "6866be64fdb7ee7d124e9e2e",
  },
  {
    title: "Coffee Brewing Methods Compared",
    content:
      "French press, pour over, espresso - which method is right for you?",
    image: "/img/tour-6-3.jpg",
    category: "Food",
    readTime: "8 min",
    createdAt: new Date("2023-04-18T15:35:00.000Z"),
    slug: "coffee-brewing-methods",
    author: "6866be64fdb7ee7d124e9e2f",
  },
  {
    title: "Starting a Side Hustle in 2023",
    content: "Best business ideas you can start with minimal investment",
    image: "/img/tour-7-1.jpg",
    category: "Business",
    readTime: "10 min",
    createdAt: new Date("2023-07-25T12:50:00.000Z"),
    slug: "side-hustle-2023",
    author: "6866be64fdb7ee7d124e9e2b",
  },
  {
    title: "Decluttering Your Digital Life",
    content: "Organize your files, emails and apps for better productivity",
    image: "/img/tour-7-2.jpg",
    category: "Productivity",
    readTime: "5 min",
    createdAt: new Date("2023-05-30T09:05:00.000Z"),
    slug: "digital-decluttering",
    author: "6866be64fdb7ee7d124e9e30",
  },
  {
    title: "Understanding NFTs",
    content: "What are non-fungible tokens and why do they matter?",
    image: "/img/tour-7-3.jpg",
    category: "Technology",
    readTime: "7 min",
    createdAt: new Date("2023-08-08T14:20:00.000Z"),
    slug: "understanding-nfts",
    author: "6866be64fdb7ee7d124e9e31",
  },
  {
    title: "Hiking Essentials for Beginners",
    content: "Must-have gear for your first hiking adventure",
    image: "/img/tour-8-1.jpg",
    category: "Outdoors",
    readTime: "6 min",
    createdAt: new Date("2023-06-22T11:35:00.000Z"),
    slug: "hiking-essentials",
    author: "6866be64fdb7ee7d124e9e32",
  },
  {
    title: "The Psychology of Color in Marketing",
    content: "How different colors influence consumer behavior",
    image: "/img/tour-8-2.jpg",
    category: "Marketing",
    readTime: "8 min",
    createdAt: new Date("2023-09-15T08:50:00.000Z"),
    slug: "color-psychology-marketing",
    author: "6866be64fdb7ee7d124e9e33",
  },
  {
    title: "Meal Prep for Busy Professionals",
    content: "Save time and eat healthy with these meal prep strategies",
    image: "/img/tour-8-3.jpg",
    category: "Food",
    readTime: "5 min",
    createdAt: new Date("2023-04-30T16:05:00.000Z"),
    slug: "meal-prep-guide",
    author: "6866be64fdb7ee7d124e9e34",
  },
  {
    title: "Getting Started with Docker",
    content: "A beginner's guide to containerization technology",
    image: "/img/tour-9-1.jpg",
    category: "DevOps",
    readTime: "9 min",
    createdAt: new Date("2023-07-15T13:20:00.000Z"),
    slug: "docker-beginners-guide",
    author: "6866be64fdb7ee7d124e9e36",
  },
  {
    title: "Personal Finance for Millennials",
    content: "Money management tips for the younger generation",
    image: "/img/tour-9-2.jpg",
    category: "Finance",
    readTime: "7 min",
    createdAt: new Date("2023-05-18T10:35:00.000Z"),
    slug: "millennial-finance",
    author: "6866be64fdb7ee7d124e9e37",
  },
  {
    title: "Sustainable Fashion Choices",
    content: "How to build an eco-friendly wardrobe",
    image: "/img/tour-9-3.jpg",
    category: "Fashion",
    readTime: "6 min",
    createdAt: new Date("2023-08-28T15:50:00.000Z"),
    slug: "sustainable-fashion",
    author: "6866be64fdb7ee7d124e9e38",
  },
  {
    title: "Introduction to Machine Learning",
    content: "Basic concepts for absolute beginners",
    image: "/img/tour-1-1.jpg",
    category: "Technology",
    readTime: "10 min",
    createdAt: new Date("2023-06-10T12:05:00.000Z"),
    slug: "intro-machine-learning",
    author: "6866be64fdb7ee7d124e9e26",
  },
  {
    title: "Urban Gardening Tips",
    content: "Grow your own food even in small spaces",
    image: "/img/tour-5-1.jpg",
    category: "Gardening",
    readTime: "5 min",
    createdAt: new Date("2023-09-22T09:20:00.000Z"),
    slug: "urban-gardening-tips",
    author: "6866be64fdb7ee7d124e9e25",
  },
  {
    title: "The Future of Electric Vehicles",
    content: "What to expect in the EV market in the coming years",
    image: "/img/tour-3-1.jpg",
    category: "Automotive",
    readTime: "8 min",
    createdAt: new Date("2023-04-15T14:35:00.000Z"),
    slug: "future-electric-vehicles",
    author: "6866be64fdb7ee7d124e9e3a",
  },
];

module.exports = blogPosts;
