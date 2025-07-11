const users = [
  {
    username: "tech_guru",
    email: "alex.johnson@example.com",
    password: "SecurePass123!",
    createdAt: new Date("2022-01-15T08:30:00Z"),
    avatar: "/users/user-1.jpg",
  },
  {
    username: "coding_ninja",
    email: "sarah.williams@example.com",
    password: "NinjaCode$456",
    createdAt: new Date("2022-02-20T14:15:00Z"),
    avatar: "/users/user-2.jpg",
  },
  {
    username: "design_diva",
    email: "michaela.chen@example.com",
    password: "Creative@789",
    createdAt: new Date("2022-03-05T11:45:00Z"),
    avatar: "/users/user-3.jpg",
  },
  {
    username: "data_wizard",
    email: "david.smith@example.com",
    password: "DataMagic!2023",
    createdAt: new Date("2022-04-10T16:20:00Z"),
    avatar: "/users/user-4.jpg",
  },
  {
    username: "travel_bug",
    email: "emma.roberts@example.com",
    password: "Wanderlust#1",
    createdAt: new Date("2022-05-18T09:10:00Z"),
    avatar: "/users/user-5.jpg",
  },
  {
    username: "bookworm",
    email: "james.wilson@example.com",
    password: "PageTurner$99",
    createdAt: new Date("2022-06-22T13:25:00Z"),
    avatar: "/users/user-6.jpg",
  },
  {
    username: "fitness_freak",
    email: "olivia.martin@example.com",
    password: "GymRat2023!",
    createdAt: new Date("2022-07-30T07:40:00Z"),
    avatar: "/users/user-7.jpg",
  },
  {
    username: "photo_pro",
    email: "daniel.kim@example.com",
    password: "Shutter@Speed",
    createdAt: new Date("2022-08-12T15:55:00Z"),
    avatar: "/users/user-8.jpg",
  },
  {
    username: "music_maestro",
    email: "sophia.lee@example.com",
    password: "BflatMajor123",
    createdAt: new Date("2022-09-05T10:30:00Z"),
    avatar: "/users/user-9.jpg",
  },
  {
    username: "foodie_explorer",
    email: "william.brown@example.com",
    password: "Yummy!Tummy",
    createdAt: new Date("2022-10-19T12:45:00Z"),
    avatar: "/users/user-10.jpg",
  },
  {
    username: "startup_ceo",
    email: "ava.wilson@example.com",
    password: "Founder$2023",
    createdAt: new Date("2022-11-25T18:20:00Z"),
    avatar: "/users/user-11.jpg",
  },
  {
    username: "gamer_4_life",
    email: "ethan.taylor@example.com",
    password: "PwnAllN00bs",
    createdAt: new Date("2022-12-08T22:15:00Z"),
    avatar: "/users/user-12.jpg",
  },
  {
    username: "nature_lover",
    email: "mia.anderson@example.com",
    password: "GreenEarth!",
    createdAt: new Date("2023-01-14T06:50:00Z"),
    avatar: "/users/user-13.jpg",
  },
  {
    username: "fashion_icon",
    email: "noah.martinez@example.com",
    password: "Style#2023",
    createdAt: new Date("2023-02-17T19:35:00Z"),
    avatar: "/users/user-14.jpg",
  },
  {
    username: "science_nerd",
    email: "isabella.clark@example.com",
    password: "E=mc2!",
    createdAt: new Date("2023-03-21T08:10:00Z"),
    avatar: "/users/user-15.jpg",
  },
  {
    username: "art_soul",
    email: "lucas.white@example.com",
    password: "VanGogh#1",
    createdAt: new Date("2023-04-05T14:45:00Z"),
    avatar: "/users/user-10.jpg",
  },
  {
    username: "coffee_addict",
    email: "charlotte.hall@example.com",
    password: "Espresso@9",
    createdAt: new Date("2023-05-09T07:20:00Z"),
    avatar: "/users/user-16.jpg",
  },
  {
    username: "finance_whiz",
    email: "benjamin.adams@example.com",
    password: "Stonks^Up",
    createdAt: new Date("2023-06-12T16:55:00Z"),
    avatar: "/users/user-7.jpg",
  },
  {
    username: "minimalist_life",
    email: "amelia.scott@example.com",
    password: "LessIsMore$",
    createdAt: new Date("2023-07-18T11:30:00Z"),
    avatar: "/users/user-17.jpg",
  },
  {
    username: "blockchain_buff",
    email: "henry.young@example.com",
    password: "HodlCrypto!",
    createdAt: new Date("2023-08-22T09:05:00Z"),
    avatar: "/users/user-1.jpg",
  },
  {
    username: "adventure_seeker",
    email: "evelyn.king@example.com",
    password: "ClimbEveryMountain",
    createdAt: new Date("2023-09-26T13:40:00Z"),
    avatar: "/users/user-18.jpg",
  },
  {
    username: "marketing_guru",
    email: "alexander.wright@example.com",
    password: "GrowthHack#1",
    createdAt: new Date("2023-10-30T17:15:00Z"),
    avatar: "/users/user-4.jpg",
  },
  {
    username: "health_coach",
    email: "victoria.green@example.com",
    password: "Wellness2023!",
    createdAt: new Date("2023-11-05T10:50:00Z"),
    avatar: "/users/user-3.jpg",
  },
  {
    username: "devops_master",
    email: "nathan.rivera@example.com",
    password: "Kubernetes$",
    createdAt: new Date("2023-12-10T15:25:00Z"),
    avatar: "/users/user-19.jpg",
  },
  {
    username: "movie_critic",
    email: "zoe.hill@example.com",
    password: "OscarWorthy!",
    createdAt: new Date("2024-01-15T20:00:00Z"),
    avatar: "/users/user-20.jpg",
  },
  {
    username: "eco_warrior",
    email: "christopher.baker@example.com",
    password: "SaveThePlanet",
    createdAt: new Date("2024-02-20T08:35:00Z"),
    avatar: "/users/user-13.jpg",
  },
  {
    username: "ai_researcher",
    email: "hannah.carter@example.com",
    password: "TensorFlow#1",
    createdAt: new Date("2024-03-25T12:10:00Z"),
    avatar: "/users/user-15.jpg",
  },
  {
    username: "urban_farmer",
    email: "ryan.mitchell@example.com",
    password: "GrowYourOwn!",
    createdAt: new Date("2024-04-30T16:45:00Z"),
    avatar: "/users/user-6.jpg",
  },
  {
    username: "car_enthusiast",
    email: "lily.roberts@example.com",
    password: "VroomVroom$",
    createdAt: new Date("2024-05-05T19:20:00Z"),
    avatar: "/users/user-17.jpg",
  },
  {
    username: "language_learner",
    email: "adam.campbell@example.com",
    password: "Polyglot2024!",
    createdAt: new Date("2024-06-10T22:55:00Z"),
    avatar: "/users/user-3.jpg",
  },
];

module.exports = users;
