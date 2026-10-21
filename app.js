
"use strict";

/* =========================================
   WORD TRAP — COMPLETE GAME ENGINE
   ========================================= */

const TURN_LENGTH = 60;


const QUESTIONS = {
  Funny: [
    { word: "Sleep", forbidden: ["Bed", "Dream", "Night", "Tired", "Pillow"] },
    { word: "Snoring", forbidden: ["Sleep", "Nose", "Noise", "Night", "Loud"] },
    { word: "Fart", forbidden: ["Gas", "Smell", "Toilet", "Sound", "Stomach"] },
    { word: "Burp", forbidden: ["Drink", "Gas", "Mouth", "Soda", "Sound"] },
    { word: "Meme", forbidden: ["Funny", "Internet", "Picture", "Viral", "Joke"] },
    { word: "Prank", forbidden: ["Joke", "Surprise", "Trick", "Friend", "Funny"] },
    { word: "Clown", forbidden: ["Circus", "Funny", "Makeup", "Red", "Nose"] },
    { word: "Monkey", forbidden: ["Banana", "Animal", "Tree", "Tail", "Zoo"] },
    { word: "Chicken dance", forbidden: ["Bird", "Music", "Funny", "Wings", "Dance"] },
    { word: "Facepalm", forbidden: ["Hand", "Face", "Embarrassed", "Mistake", "Reaction"] },
    { word: "Laughing", forbidden: ["Funny", "Smile", "Joke", "Happy", "Giggle"] },
    { word: "Tickle", forbidden: ["Laugh", "Touch", "Funny", "Feet", "Giggle"] },
    { word: "Karaoke", forbidden: ["Sing", "Music", "Microphone", "Song", "Voice"] },
    { word: "Ugly selfie", forbidden: ["Photo", "Face", "Camera", "Funny", "Picture"] },
    { word: "Photobomb", forbidden: ["Photo", "Picture", "Camera", "Interrupt", "Pose"] },
    { word: "Dad joke", forbidden: ["Father", "Funny", "Pun", "Comedy", "Laugh"] },
    { word: "Clumsy", forbidden: ["Fall", "Trip", "Accident", "Drop", "Awkward"] },
    { word: " Hiccup", forbidden: ["Burp", "Sound", "Water", "Body", "Sudden"] },
    { word: "Goofy", forbidden: ["Silly", "Funny", "Disney", "Character", "Laugh"] },
    { word: "Pajamas", forbidden: ["Sleep", "Clothes", "Night", "Bed", "Wear"] },
    { word: "Funny walk", forbidden: ["Legs", "Move", "Run", "Silly", "Style"] },
    { word: "Impersonation", forbidden: ["Copy", "Voice", "Actor", "Mimic", "Person"] },
    { word: "Tongue twister", forbidden: ["Speak", "Words", "Fast", "Repeat", "Pronounce"] },
    { word: "Rubber chicken", forbidden: ["Bird", "Toy", "Squeak", "Yellow", "Prank"] },
    { word: "Slapstick", forbidden: ["Comedy", "Fall", "Physical", "Funny", "Movies"] },
    { word: "Goosebumps", forbidden: ["Skin", "Cold", "Fear", "Hair", "Shiver"] },
    { word: "Silly hat", forbidden: ["Head", "Wear", "Clothes", "Funny", "Cap"] },
    { word: "Fake laugh", forbidden: ["Pretend", "Smile", "Funny", "Sound", "Act"] },
    { word: "Dramatic entry", forbidden: ["Arrive", "Hero", "Slow motion", "Scene", "Music"] },
    { word: "Wrong number", forbidden: ["Phone", "Call", "Contact", "Mistake", "Dial"] },
    { word: "Autocorrect", forbidden: ["Phone", "Typing", "Text", "Spelling", "Mistake"] },
    { word: "Voice crack", forbidden: ["Voice", "Speak", "Sound", "Teenager", "Sing"] },
    { word: "Dance fail", forbidden: ["Move", "Music", "Trip", "Steps", "Funny"] },
    { word: "Overthinking", forbidden: ["Think", "Worry", "Mind", "Stress", "Problem"] },
    { word: "Excuse", forbidden: ["Reason", "Lie", "Late", "Explain", "Avoid"] },
    { word: "Hide and seek", forbidden: ["Game", "Hide", "Find", "Children", "Count"] },
    { word: "Pillow fight", forbidden: ["Bed", "Soft", "Hit", "Sleep", "Feather"] },
    { word: "Water balloon", forbidden: ["Water", "Throw", "Burst", "Summer", "Play"] },
    { word: "Funny nickname", forbidden: ["Name", "Friend", "Call", "Tease", "Label"] },
    { word: "Mimicry", forbidden: ["Copy", "Voice", "Imitate", "Actor", "Sound"] },
    { word: "Cartoon voice", forbidden: ["Animation", "Character", "Speak", "Funny", "Sound"] },
    { word: "Slipper chase", forbidden: ["Sandal", "Run", "Mother", "Hit", "Indian"] },
    { word: "Mosquito", forbidden: ["Bite", "Blood", "Buzz", "Insect", "Itch"] },
    { word: "Alarm snooze", forbidden: ["Morning", "Wake", "Sleep", "Clock", "Delay"] },
    { word: "Food coma", forbidden: ["Eat", "Full", "Sleepy", "Meal", "Tired"] },
    { word: "Dramatic crying", forbidden: ["Tears", "Sad", "Emotional", "Act", "Sob"] },
    { word: "Fake injury", forbidden: ["Pain", "Pretend", "Fall", "Act", "Hurt"] },
    { word: "Talking to yourself", forbidden: ["Alone", "Speak", "Mind", "Crazy", "Conversation"] },
    { word: "Laughing at the wrong time", forbidden: ["Serious", "Funny", "Quiet", "Awkward", "Giggle"] },
    { word: "Accidental message", forbidden: ["Text", "Send", "Phone", "Wrong", "Chat"] }
  ],

  Movies: [
    { word: "Cinema", forbidden: ["Movie", "Theatre", "Screen", "Film", "Watch"] },
    { word: "Bollywood", forbidden: ["Hindi", "Movies", "India", "Actors", "Mumbai"] },
    { word: "Sandalwood", forbidden: ["Kannada", "Movies", "Karnataka", "Film", "Actors"] },
    { word: "Hollywood", forbidden: ["America", "Movies", "Actors", "Film", "Los Angeles"] },
    { word: "Director", forbidden: ["Film", "Camera", "Scene", "Shoot", "Movie"] },
    { word: "Actor", forbidden: ["Role", "Film", "Character", "Perform", "Star"] },
    { word: "Villain", forbidden: ["Bad guy", "Hero", "Evil", "Antagonist", "Fight"] },
    { word: "Hero", forbidden: ["Lead", "Actor", "Good guy", "Film", "Main"] },
    { word: "Plot twist", forbidden: ["Surprise", "Story", "Unexpected", "Reveal", "Ending"] },
    { word: "Sequel", forbidden: ["Part two", "Movie", "Continue", "Follow-up", "Film"] },
    { word: "Prequel", forbidden: ["Before", "Story", "Original", "Earlier", "Film"] },
    { word: "Horror movie", forbidden: ["Scary", "Ghost", "Fear", "Dark", "Scream"] },
    { word: "Comedy movie", forbidden: ["Funny", "Laugh", "Joke", "Humour", "Giggle"] },
    { word: "Action movie", forbidden: ["Fight", "Explosion", "Stunt", "Chase", "Hero"] },
    { word: "Romantic movie", forbidden: ["Love", "Couple", "Date", "Kiss", "Relationship"] },
    { word: "Thriller", forbidden: ["Suspense", "Mystery", "Tension", "Crime", "Twist"] },
    { word: "Background music", forbidden: ["Soundtrack", "Scene", "Song", "Score", "Audio"] },
    { word: "Interval", forbidden: ["Break", "Halfway", "Snacks", "Theatre", "Pause"] },
    { word: "Trailer", forbidden: ["Preview", "Upcoming", "Movie", "Teaser", "Video"] },
    { word: "First day first show", forbidden: ["Release", "Opening", "Fans", "Cinema", "Ticket"] },
    { word: "Box office", forbidden: ["Collection", "Money", "Ticket", "Earnings", "Movie"] },
    { word: "Oscar", forbidden: ["Award", "Academy", "Hollywood", "Trophy", "Winner"] },
    { word: "Cameo", forbidden: ["Guest", "Appearance", "Actor", "Brief", "Role"] },
    { word: "Stunt", forbidden: ["Action", "Danger", "Jump", "Fight", "Daredevil"] },
    { word: "Dialogue", forbidden: ["Words", "Actor", "Speak", "Script", "Scene"] },
    { word: "Screenplay", forbidden: ["Script", "Writer", "Story", "Film", "Dialogue"] },
    { word: "Dubbed movie", forbidden: ["Language", "Voice", "Translate", "Audio", "Film"] },
    { word: "Subtitles", forbidden: ["Text", "Translation", "Screen", "Dialogue", "Read"] },
    { word: "Movie marathon", forbidden: ["Binge", "Several", "Watch", "Films", "All night"] },
    { word: "Cliffhanger", forbidden: ["Ending", "Suspense", "Continue", "Unresolved", "Next"] },
    { word: "Cinematography", forbidden: ["Camera", "Visuals", "Lighting", "Shots", "Film"] },
    { word: "Remake", forbidden: ["Original", "New version", "Film", "Repeat", "Adaptation"] },
    { word: "Biopic", forbidden: ["Biography", "Life", "Real person", "Film", "History"] },
    { word: "Animated movie", forbidden: ["Cartoon", "Drawn", "Computer", "Characters", "Animation"] },
    { word: "Superhero movie", forbidden: ["Powers", "Cape", "Marvel", "DC", "Villain"] },
    { word: "Movie review", forbidden: ["Opinion", "Rating", "Critic", "Film", "Recommend"] },
    { word: "Film festival", forbidden: ["Movies", "Screening", "Award", "Cinema", "Event"] },
    { word: "Popcorn", forbidden: ["Cinema", "Snack", "Corn", "Butter", "Bucket"] },
    { word: "Movie ticket", forbidden: ["Seat", "Price", "Theatre", "Booking", "Show"] },
    { word: "Interval snack", forbidden: ["Food", "Break", "Buy", "Theatre", "Eat"] },
    { word: "Post-credit scene", forbidden: ["Ending", "Marvel", "After", "Credits", "Extra"] },
    { word: "Method acting", forbidden: ["Role", "Character", "Actor", "Prepare", "Performance"] },
    { word: "Film camera", forbidden: ["Shoot", "Lens", "Director", "Record", "Video"] },
    { word: "Movie franchise", forbidden: ["Series", "Sequel", "Universe", "Films", "Installment"] },
    { word: "Sound effects", forbidden: ["Audio", "Noise", "Film", "Action", "Sound"] },
    { word: "Film award", forbidden: ["Trophy", "Winner", "Actor", "Ceremony", "Prize"] },
    { word: "Dance number", forbidden: ["Song", "Choreography", "Music", "Movie", "Perform"] },
    { word: "Love triangle", forbidden: ["Romance", "Three", "Couple", "Relationship", "Jealousy"] },
    { word: "Movie spoiler", forbidden: ["Reveal", "Ending", "Surprise", "Story", "Secret"] },
    { word: "Removable moustache", forbidden: ["Disguise", "Actor", "Face", "Costume", "Fake"] }
  ],

  Food: [
    { word: "Dosa", forbidden: ["South Indian", "Batter", "Crispy", "Tawa", "Chutney"] },
    { word: "Idli", forbidden: ["Steamed", "Breakfast", "Rice", "Soft", "Sambar"] },
    { word: "Pizza", forbidden: ["Cheese", "Crust", "Topping", "Italy", "Slice"] },
    { word: "Burger", forbidden: ["Bun", "Patty", "Lettuce", "Fast food", "Cheese"] },
    { word: "Biryani", forbidden: ["Rice", "Spices", "Chicken", "Dum", "Pot"] },
    { word: "Samosa", forbidden: ["Triangle", "Fried", "Potato", "Snack", "Chutney"] },
    { word: "Pani puri", forbidden: ["Water", "Gol gappa", "Crispy", "Street food", "Spicy"] },
    { word: "Ice cream", forbidden: ["Cold", "Dessert", "Cone", "Scoop", "Melt"] },
    { word: "Chocolate", forbidden: ["Sweet", "Cocoa", "Brown", "Candy", "Bar"] },
    { word: "French fries", forbidden: ["Potato", "Fried", "Salt", "Ketchup", "Crispy"] },
    { word: "Sandwich", forbidden: ["Bread", "Filling", "Slices", "Lunch", "Toast"] },
    { word: "Masala dosa", forbidden: ["Potato", "Dosa", "Filling", "South Indian", "Chutney"] },
    { word: "Vada", forbidden: ["Fried", "Lentil", "Doughnut", "Sambar", "Snack"] },
    { word: "Upma", forbidden: ["Semolina", "Breakfast", "Rava", "Cook", "South Indian"] },
    { word: "Poha", forbidden: ["Flattened rice", "Breakfast", "Yellow", "Peanuts", "Maharashtra"] },
    { word: "Paratha", forbidden: ["Flatbread", "Stuffed", "North Indian", "Butter", "Dough"] },
    { word: "Gulab jamun", forbidden: ["Sweet", "Syrup", "Round", "Dessert", "Milk powder"] },
    { word: "Jalebi", forbidden: ["Orange", "Syrup", "Spiral", "Sweet", "Fried"] },
    { word: "Mysore pak", forbidden: ["Mysore", "Sweet", "Ghee", "Gram flour", "Karnataka"] },
    { word: "Filter coffee", forbidden: ["South Indian", "Caffeine", "Milk", "Decoction", "Tumbler"] },
    { word: "Milkshake", forbidden: ["Milk", "Blender", "Cold", "Drink", "Straw"] },
    { word: "Lemonade", forbidden: ["Lemon", "Water", "Sugar", "Sour", "Drink"] },
    { word: "Popcorn", forbidden: ["Corn", "Cinema", "Butter", "Snack", "Kernel"] },
    { word: "Noodles", forbidden: ["Long", "Slurp", "Chopsticks", "Instant", "Wheat"] },
    { word: "Pasta", forbidden: ["Italian", "Sauce", "Macaroni", "Boil", "Spaghetti"] },
    { word: "Taco", forbidden: ["Mexico", "Shell", "Filling", "Salsa", "Fold"] },
    { word: "Pancake", forbidden: ["Syrup", "Breakfast", "Flat", "Flip", "Batter"] },
    { word: "Waffle", forbidden: ["Grid", "Breakfast", "Syrup", "Crispy", "Iron"] },
    { word: "Donut", forbidden: ["Hole", "Sweet", "Ring", "Fried", "Glaze"] },
    { word: "Cupcake", forbidden: ["Small cake", "Icing", "Paper cup", "Sweet", "Sprinkles"] },
    { word: "Cheesecake", forbidden: ["Cream cheese", "Dessert", "Crust", "Slice", "Baked"] },
    { word: "Fruit salad", forbidden: ["Apple", "Bowl", "Chopped", "Healthy", "Mixed"] },
    { word: "Watermelon", forbidden: ["Summer", "Green", "Red", "Seeds", "Fruit"] },
    { word: "Mango", forbidden: ["Yellow", "Summer", "Fruit", "Sweet", "King"] },
    { word: "Banana", forbidden: ["Yellow", "Peel", "Fruit", "Monkey", "Potassium"] },
    { word: "Coconut", forbidden: ["Palm", "Water", "Shell", "White", "Tropical"] },
    { word: "Paneer", forbidden: ["Cheese", "Milk", "Indian", "Curry", "Vegetarian"] },
    { word: "Sambar", forbidden: ["Lentils", "South Indian", "Dosa", "Vegetables", "Tamarind"] },
    { word: "Rasam", forbidden: ["Pepper", "Soup", "Tomato", "South Indian", "Rice"] },
    { word: "Curd rice", forbidden: ["Yogurt", "Rice", "Cooling", "South Indian", "Temper"] },
    { word: "Bisi bele bath", forbidden: ["Karnataka", "Rice", "Lentils", "Vegetables", "Hot"] },
    { word: "Pav bhaji", forbidden: ["Mumbai", "Bread", "Butter", "Mashed vegetables", "Street food"] },
    { word: "Dhokla", forbidden: ["Gujarat", "Steamed", "Yellow", "Besan", "Snack"] },
    { word: "Chaat", forbidden: ["Street food", "Spicy", "Tangy", "India", "Snack"] },
    { word: "Pickle", forbidden: ["Mango", "Jar", "Spicy", "Preserve", "Side dish"] },
    { word: "Papad", forbidden: ["Thin", "Crunchy", "Roast", "Fry", "Indian meal"] },
    { word: "Chapati", forbidden: ["Roti", "Flatbread", "Wheat", "Tawa", "Curry"] },
    { word: "Puri", forbidden: ["Fried", "Inflated", "Bread", "Potato curry", "Breakfast"] },
    { word: "Sweet corn", forbidden: ["Yellow", "Cob", "Butter", "Kernel", "Boil"] },
    { word: "Fruit juice", forbidden: ["Drink", "Squeeze", "Fruit", "Glass", "Fresh"] }
  ],

  Everyday: [
    { word: "Alarm clock", forbidden: ["Wake up", "Morning", "Time", "Ring", "Sleep"] },
    { word: "Toothbrush", forbidden: ["Teeth", "Paste", "Bathroom", "Clean", "Brush"] },
    { word: "Umbrella", forbidden: ["Rain", "Wet", "Open", "Handle", "Shade"] },
    { word: "Wallet", forbidden: ["Money", "Cards", "Pocket", "Cash", "Leather"] },
    { word: "Keys", forbidden: ["Lock", "Door", "Metal", "Open", "Keychain"] },
    { word: "Backpack", forbidden: ["Bag", "Shoulders", "School", "Carry", "Zip"] },
    { word: "Water bottle", forbidden: ["Drink", "Refill", "Plastic", "Steel", "Thirst"] },
    { word: "Headphones", forbidden: ["Music", "Ears", "Listen", "Wireless", "Audio"] },
    { word: "Remote control", forbidden: ["TV", "Buttons", "Change channel", "Battery", "Click"] },
    { word: "Refrigerator", forbidden: ["Cold", "Food", "Kitchen", "Freezer", "Store"] },
    { word: "Washing machine", forbidden: ["Clothes", "Laundry", "Soap", "Spin", "Clean"] },
    { word: "Pressure cooker", forbidden: ["Kitchen", "Steam", "Whistle", "Lid", "Food"] },
    { word: "Ceiling fan", forbidden: ["Air", "Rotate", "Summer", "Blades", "Electricity"] },
    { word: "Light bulb", forbidden: ["Electricity", "Glow", "Switch", "Bright", "Lamp"] },
    { word: "Doorbell", forbidden: ["Ring", "Visitor", "Door", "Sound", "Button"] },
    { word: "Mirror", forbidden: ["Reflection", "Glass", "Face", "Look", "Bathroom"] },
    { word: "Sofa", forbidden: ["Sit", "Living room", "Cushion", "Furniture", "Comfort"] },
    { word: "Pillow", forbidden: ["Sleep", "Bed", "Soft", "Head", "Cushion"] },
    { word: "Blanket", forbidden: ["Warm", "Sleep", "Bed", "Cover", "Winter"] },
    { word: "Slippers", forbidden: ["Feet", "Shoes", "Wear", "Sandals", "Walk"] },
    { word: "Sunglasses", forbidden: ["Eyes", "Sun", "Dark", "Wear", "Shades"] },
    { word: "Sunscreen", forbidden: ["Skin", "Sun", "Lotion", "SPF", "Protect"] },
    { word: "Comb", forbidden: ["Hair", "Teeth", "Brush", "Style", "Plastic"] },
    { word: "Shampoo", forbidden: ["Hair", "Wash", "Bottle", "Foam", "Bathroom"] },
    { word: "Soap", forbidden: ["Wash", "Clean", "Bubbles", "Bath", "Germ"] },
    { word: "Towel", forbidden: ["Dry", "Bath", "Water", "Cotton", "Wipe"] },
    { word: "Laundry basket", forbidden: ["Clothes", "Dirty", "Wash", "Laundry", "Container"] },
    { word: "Dustbin", forbidden: ["Trash", "Waste", "Rubbish", "Throw", "Bin"] },
    { word: "Broom", forbidden: ["Sweep", "Floor", "Dust", "Clean", "Handle"] },
    { word: "Mop", forbidden: ["Floor", "Water", "Clean", "Bucket", "Wipe"] },
    { word: "Dishwasher", forbidden: ["Plates", "Kitchen", "Wash", "Machine", "Utensils"] },
    { word: "Microwave", forbidden: ["Heat", "Food", "Kitchen", "Timer", "Oven"] },
    { word: "Gas stove", forbidden: ["Flame", "Cook", "Kitchen", "Burner", "Cylinder"] },
    { word: "Lunch box", forbidden: ["Food", "School", "Carry", "Meal", "Container"] },
    { word: "Shopping cart", forbidden: ["Store", "Wheels", "Grocery", "Push", "Basket"] },
    { word: "Traffic signal", forbidden: ["Red", "Green", "Road", "Stop", "Lights"] },
    { word: "Bus stop", forbidden: ["Wait", "Transport", "Road", "Passengers", "Route"] },
    { word: "Metro train", forbidden: ["Station", "Rail", "Urban", "Ticket", "Platform"] },
    { word: "Raincoat", forbidden: ["Rain", "Wet", "Wear", "Waterproof", "Monsoon"] },
    { word: "Electric kettle", forbidden: ["Water", "Boil", "Tea", "Plug", "Kitchen"] },
    { word: "Power bank", forbidden: ["Phone", "Charge", "Battery", "Portable", "Cable"] },
    { word: "Extension cord", forbidden: ["Plug", "Socket", "Electricity", "Wire", "Power"] },
    { word: "Calendar", forbidden: ["Date", "Month", "Year", "Days", "Wall"] },
    { word: "Notebook", forbidden: ["Paper", "Write", "Pages", "School", "Pen"] },
    { word: "Sticky note", forbidden: ["Paper", "Reminder", "Adhesive", "Yellow", "Write"] },
    { word: "Stapler", forbidden: ["Paper", "Pin", "Office", "Join", "Press"] },
    { word: "Scissors", forbidden: ["Cut", "Blades", "Paper", "Sharp", "Handle"] },
    { word: "Tape", forbidden: ["Sticky", "Roll", "Attach", "Adhesive", "Cut"] },
    { word: "Torch", forbidden: ["Light", "Dark", "Battery", "Flashlight", "Beam"] },
    { word: "Door mat", forbidden: ["Entrance", "Feet", "Clean", "Floor", "Welcome"] }
  ],

  College: [
    { word: "Attendance", forbidden: ["Present", "Absent", "Class", "Percentage", "Register"] },
    { word: "Assignment", forbidden: ["Homework", "Submit", "Teacher", "Deadline", "Work"] },
    { word: "Exam", forbidden: ["Test", "Marks", "Question paper", "Study", "Answer"] },
    { word: "Canteen", forbidden: ["Food", "College", "Snacks", "Lunch", "Friends"] },
    { word: "Lecture", forbidden: ["Teacher", "Class", "Explain", "Students", "Subject"] },
    { word: "Lab", forbidden: ["Practical", "Experiment", "Computer", "Equipment", "Record"] },
    { word: "Library", forbidden: ["Books", "Read", "Quiet", "Study", "Borrow"] },
    { word: "Backbenchers", forbidden: ["Last row", "Students", "Class", "Fun", "Sit"] },
    { word: "Class representative", forbidden: ["CR", "Leader", "Students", "Teacher", "Class"] },
    { word: "Timetable", forbidden: ["Schedule", "Periods", "Subjects", "Time", "Classes"] },
    { word: "Internal marks", forbidden: ["Assessment", "Score", "College", "Test", "Evaluation"] },
    { word: "Semester", forbidden: ["Term", "Months", "Exam", "College", "Course"] },
    { word: "Syllabus", forbidden: ["Topics", "Subjects", "Study", "Course", "Chapters"] },
    { word: "Viva", forbidden: ["Oral", "Questions", "Answer", "Examiner", "Speak"] },
    { word: "Project", forbidden: ["Team", "Build", "Submit", "Presentation", "Work"] },
    { word: "Presentation", forbidden: ["Slides", "Speak", "Audience", "Explain", "Projector"] },
    { word: "Group study", forbidden: ["Friends", "Prepare", "Exam", "Together", "Notes"] },
    { word: "Bunking class", forbidden: ["Skip", "Absent", "Lecture", "Friends", "Escape"] },
    { word: "Proxy attendance", forbidden: ["Present", "Friend", "Register", "Absent", "Fake"] },
    { word: "College fest", forbidden: ["Event", "Dance", "Music", "Students", "Celebration"] },
    { word: "Freshers' day", forbidden: ["New students", "Welcome", "Event", "Seniors", "College"] },
    { word: "Farewell", forbidden: ["Goodbye", "Final year", "Seniors", "Event", "Leaving"] },
    { word: "ID card", forbidden: ["Identity", "Photo", "College", "Wear", "Name"] },
    { word: "Uniform", forbidden: ["Dress", "Clothes", "College", "Wear", "Rules"] },
    { word: "College bus", forbidden: ["Transport", "Route", "Students", "Travel", "Stop"] },
    { word: "Lab record", forbidden: ["Experiment", "Write", "Practical", "Submit", "Notebook"] },
    { word: "Whiteboard", forbidden: ["Marker", "Teacher", "Write", "Classroom", "Erase"] },
    { word: "Projector", forbidden: ["Screen", "Slides", "Display", "Presentation", "Class"] },
    { word: "Internal assessment", forbidden: ["Marks", "Test", "College", "Evaluation", "Score"] },
    { word: "Revaluation", forbidden: ["Marks", "Paper", "Check", "Exam", "Result"] },
    { word: "Backlog", forbidden: ["Fail", "Subject", "Repeat", "Exam", "Pending"] },
    { word: "CGPA", forbidden: ["Grade", "Marks", "Average", "Semester", "Score"] },
    { word: "Credit points", forbidden: ["Course", "Subject", "Academic", "Earn", "Value"] },
    { word: "Placement", forbidden: ["Job", "Company", "Interview", "Campus", "Recruitment"] },
    { word: "Internship", forbidden: ["Work", "Experience", "Company", "Training", "Student"] },
    { word: "Coding", forbidden: ["Program", "Computer", "Code", "Software", "Developer"] },
    { word: "Hackathon", forbidden: ["Coding", "Competition", "Team", "Build", "Event"] },
    { word: "Technical seminar", forbidden: ["Talk", "Expert", "Topic", "Presentation", "Audience"] },
    { word: "College trip", forbidden: ["Travel", "Friends", "Bus", "Excursion", "Fun"] },
    { word: "Free period", forbidden: ["No class", "Break", "Time", "Students", "Relax"] },
    { word: "Late submission", forbidden: ["Deadline", "Assignment", "Delay", "Teacher", "Penalty"] },
    { word: "Exam hall", forbidden: ["Desk", "Answer sheet", "Invigilator", "Silence", "Test"] },
    { word: "Question bank", forbidden: ["Questions", "Practice", "Exam", "Answers", "Study"] },
    { word: "Study notes", forbidden: ["Write", "Revision", "Pages", "Subject", "Exam"] },
    { word: "Semester break", forbidden: ["Holiday", "College", "Vacation", "Rest", "Exams"] },
    { word: "College crush", forbidden: ["Love", "Like", "Student", "Romance", "Secret"] },
    { word: "Cultural committee", forbidden: ["Event", "Organize", "Students", "Fest", "Team"] },
    { word: "Placement interview", forbidden: ["Job", "Questions", "HR", "Company", "Candidate"] },
    { word: "Student ID", forbidden: ["Number", "Identity", "College", "Card", "Registration"] },
    { word: "Graduation", forbidden: ["Degree", "Finish", "Convocation", "Student", "Cap"] }
  ],

  Chaos: [
    { word: "Time travel", forbidden: ["Past", "Future", "Machine", "Time", "History"] },
    { word: "Alien", forbidden: ["Space", "Extraterrestrial", "UFO", "Planet", "Earth"] },
    { word: "Zombie", forbidden: ["Dead", "Brain", "Walking", "Undead", "Horror"] },
    { word: "Apocalypse", forbidden: ["End", "World", "Disaster", "Survive", "Doomsday"] },
    { word: "Teleportation", forbidden: ["Instant", "Travel", "Disappear", "Appear", "Place"] },
    { word: "Invisibility", forbidden: ["Invisible", "See", "Hidden", "Transparent", "Power"] },
    { word: "Mind reading", forbidden: ["Thoughts", "Brain", "Think", "Mental", "Secret"] },
    { word: "Super strength", forbidden: ["Strong", "Power", "Lift", "Muscles", "Heavy"] },
    { word: "Flying car", forbidden: ["Drive", "Wings", "Sky", "Vehicle", "Road"] },
    { word: "Robot uprising", forbidden: ["Machine", "AI", "Revolt", "Human", "Technology"] },
    { word: "Parallel universe", forbidden: ["Alternate", "Reality", "World", "Dimension", "Multiverse"] },
    { word: "Black hole", forbidden: ["Space", "Gravity", "Star", "Galaxy", "Suck"] },
    { word: "Meteor shower", forbidden: ["Space", "Rocks", "Sky", "Stars", "Falling"] },
    { word: "Supervillain", forbidden: ["Evil", "Hero", "Power", "Crime", "Enemy"] },
    { word: "Secret identity", forbidden: ["Disguise", "Mask", "Hidden", "Hero", "Name"] },
    { word: "Cursed object", forbidden: ["Haunted", "Magic", "Evil", "Possessed", "Artifact"] },
    { word: "Haunted house", forbidden: ["Ghost", "Scary", "Spirit", "Dark", "Creepy"] },
    { word: "Magic portal", forbidden: ["Doorway", "World", "Travel", "Fantasy", "Dimension"] },
    { word: "Dragon", forbidden: ["Fire", "Wings", "Mythical", "Scales", "Fantasy"] },
    { word: "Mermaid", forbidden: ["Ocean", "Tail", "Fish", "Mythical", "Sea"] },
    { word: "Werewolf", forbidden: ["Wolf", "Moon", "Transform", "Monster", "Full moon"] },
    { word: "Vampire", forbidden: ["Blood", "Fangs", "Night", "Immortal", "Garlic"] },
    { word: "Time loop", forbidden: ["Repeat", "Day", "Stuck", "Time", "Again"] },
    { word: "Clone", forbidden: ["Copy", "Duplicate", "Identical", "DNA", "Person"] },
    { word: "Body swap", forbidden: ["Exchange", "Person", "Body", "Identity", "Switch"] },
    { word: "Wish-granting genie", forbidden: ["Lamp", "Magic", "Three wishes", "Spirit", "Aladdin"] },
    { word: "Talking animal", forbidden: ["Speak", "Pet", "Voice", "Human", "Creature"] },
    { word: "Mutant", forbidden: ["Mutation", "Power", "Change", "Superhero", "Genes"] },
    { word: "Mind control", forbidden: ["Brain", "Command", "Thought", "Influence", "Control"] },
    { word: "Doomsday device", forbidden: ["Weapon", "Destroy", "World", "Danger", "Machine"] },
    { word: "Parallel timeline", forbidden: ["History", "Alternate", "Events", "Future", "Reality"] },
    { word: "Frozen time", forbidden: ["Pause", "Clock", "Stop", "Moment", "Still"] },
    { word: "Endless staircase", forbidden: ["Steps", "Climb", "Never-ending", "Building", "Up"] },
    { word: "Infinite money", forbidden: ["Rich", "Cash", "Unlimited", "Bank", "Wealth"] },
    { word: "Dream world", forbidden: ["Sleep", "Fantasy", "Nightmare", "Mind", "Imagine"] },
    { word: "Living shadow", forbidden: ["Darkness", "Silhouette", "Follow", "Shape", "Light"] },
    { word: "Possession", forbidden: ["Spirit", "Body", "Ghost", "Control", "Haunted"] },
    { word: "Shape-shifter", forbidden: ["Transform", "Change", "Form", "Creature", "Appearance"] },
    { word: "Giant", forbidden: ["Huge", "Tall", "Big", "Fairy tale", "Large"] },
    { word: "Miniature world", forbidden: ["Tiny", "Small", "Little", "Scale", "Mini"] },
    { word: "Living statue", forbidden: ["Stone", "Move", "Sculpture", "Still", "Figure"] },
    { word: "Gravity reversal", forbidden: ["Fall", "Up", "Down", "Float", "Physics"] },
    { word: "Weather machine", forbidden: ["Rain", "Storm", "Climate", "Control", "Clouds"] },
    { word: "Memory eraser", forbidden: ["Forget", "Mind", "Remember", "Brain", "Past"] },
    { word: "Dream catcher", forbidden: ["Sleep", "Nightmare", "Web", "Native American", "Dream"] },
    { word: "Portal gun", forbidden: ["Shoot", "Door", "Travel", "Dimension", "Game"] },
    { word: "Universal translator", forbidden: ["Language", "Speak", "Translate", "Words", "Communication"] },
    { word: "Clone army", forbidden: ["Soldiers", "Copies", "Army", "Identical", "Fight"] },
    { word: "Apocalyptic storm", forbidden: ["Weather", "Disaster", "Wind", "Destruction", "Survive"] },
    { word: "Reality glitch", forbidden: ["Error", "World", "Simulation", "Bug", "Strange"] }
  ],

  Sports: [
    { word: "Cricket", forbidden: ["Bat", "Ball", "Wicket", "Pitch", "Bowler"] },
    { word: "Football", forbidden: ["Soccer", "Goal", "Kick", "Ball", "Team"] },
    { word: "Badminton", forbidden: ["Racket", "Shuttlecock", "Net", "Court", "Smash"] },
    { word: "Basketball", forbidden: ["Hoop", "Dribble", "Bounce", "Court", "Dunk"] },
    { word: "Tennis", forbidden: ["Racket", "Serve", "Court", "Net", "Wimbledon"] },
    { word: "Volleyball", forbidden: ["Net", "Spike", "Team", "Serve", "Court"] },
    { word: "Kabaddi", forbidden: ["Raid", "Tag", "Breathe", "Defender", "India"] },
    { word: "Hockey", forbidden: ["Stick", "Puck", "Goal", "Field", "Team"] },
    { word: "Swimming", forbidden: ["Pool", "Water", "Stroke", "Dive", "Float"] },
    { word: "Cycling", forbidden: ["Bicycle", "Pedal", "Helmet", "Wheels", "Ride"] },
    { word: "Marathon", forbidden: ["Run", "Race", "Distance", "42 kilometres", "Finish"] },
    { word: "Olympics", forbidden: ["Medal", "Games", "Athlete", "Gold", "International"] },
    { word: "World Cup", forbidden: ["Tournament", "Country", "Trophy", "Champion", "Final"] },
    { word: "Six", forbidden: ["Cricket", "Boundary", "Over", "Maximum", "Hit"] },
    { word: "Century", forbidden: ["Hundred", "Runs", "Cricket", "Batter", "Score"] },
    { word: "Hat-trick", forbidden: ["Three", "Wickets", "Consecutive", "Bowler", "Cricket"] },
    { word: "Wicketkeeper", forbidden: ["Gloves", "Stumps", "Behind", "Catch", "Cricket"] },
    { word: "Umpire", forbidden: ["Referee", "Decision", "Cricket", "Rules", "Signal"] },
    { word: "Penalty kick", forbidden: ["Football", "Goal", "Foul", "Spot", "Keeper"] },
    { word: "Goalkeeper", forbidden: ["Save", "Net", "Gloves", "Football", "Goal"] },
    { word: "Red card", forbidden: ["Referee", "Football", "Sent off", "Foul", "Discipline"] },
    { word: "Hat", forbidden: ["Head", "Wear", "Cap", "Sun", "Clothing"] },
    { word: "Marathon runner", forbidden: ["Race", "Long distance", "Run", "Athlete", "Finish"] },
    { word: "Gymnastics", forbidden: ["Balance", "Flip", "Routine", "Olympics", "Flexibility"] },
    { word: "Boxing", forbidden: ["Gloves", "Ring", "Punch", "Fight", "Knockout"] },
    { word: "Wrestling", forbidden: ["Grapple", "Mat", "Pin", "Opponent", "Fight"] },
    { word: "Karate", forbidden: ["Martial arts", "Kick", "Belt", "Punch", "Dojo"] },
    { word: "Yoga", forbidden: ["Stretch", "Pose", "Breathing", "Mat", "Relax"] },
    { word: "Skateboarding", forbidden: ["Board", "Wheels", "Trick", "Ramp", "Ride"] },
    { word: "Surfing", forbidden: ["Wave", "Ocean", "Board", "Beach", "Water"] },
    { word: "Skiing", forbidden: ["Snow", "Slopes", "Mountain", "Poles", "Winter"] },
    { word: "Formula One", forbidden: ["Racing", "Car", "Driver", "Track", "Pit stop"] },
    { word: "Chess", forbidden: ["King", "Queen", "Board", "Checkmate", "Pieces"] },
    { word: "Carrom", forbidden: ["Striker", "Coins", "Board", "Pocket", "Queen"] },
    { word: "Table tennis", forbidden: ["Ping pong", "Paddle", "Ball", "Net", "Table"] },
    { word: "Golf", forbidden: ["Club", "Hole", "Course", "Ball", "Swing"] },
    { word: "Archery", forbidden: ["Bow", "Arrow", "Target", "Aim", "Bullseye"] },
    { word: "Javelin", forbidden: ["Throw", "Spear", "Athletics", "Distance", "Field"] },
    { word: "Long jump", forbidden: ["Sand", "Run-up", "Athletics", "Leap", "Distance"] },
    { word: "High jump", forbidden: ["Bar", "Leap", "Athletics", "Height", "Landing"] },
    { word: "Relay race", forbidden: ["Team", "Baton", "Run", "Exchange", "Track"] },
    { word: "Doping", forbidden: ["Drugs", "Athlete", "Illegal", "Performance", "Ban"] },
    { word: "Sportsmanship", forbidden: ["Fair play", "Respect", "Opponent", "Honesty", "Game"] },
    { word: "Commentator", forbidden: ["Voice", "Match", "Describe", "Broadcast", "Sports"] },
    { word: "Scoreboard", forbidden: ["Points", "Score", "Display", "Match", "Numbers"] },
    { word: "Stadium", forbidden: ["Crowd", "Seats", "Match", "Ground", "Spectators"] },
    { word: "Trophy", forbidden: ["Winner", "Prize", "Cup", "Champion", "Award"] },
    { word: "Captain", forbidden: ["Leader", "Team", "Toss", "Player", "Decision"] },
    { word: "Substitute", forbidden: ["Replacement", "Player", "Bench", "Change", "Team"] },
    { word: "Warm-up", forbidden: ["Exercise", "Stretch", "Before", "Prepare", "Muscles"] }
  ],

  Technology: [
    { word: "Smartphone", forbidden: ["Mobile", "Call", "Screen", "Apps", "Touch"] },
    { word: "Laptop", forbidden: ["Computer", "Keyboard", "Portable", "Screen", "Trackpad"] },
    { word: "Keyboard", forbidden: ["Keys", "Typing", "Computer", "Letters", "Input"] },
    { word: "Mouse", forbidden: ["Cursor", "Click", "Computer", "Scroll", "Pointer"] },
    { word: "Monitor", forbidden: ["Screen", "Display", "Computer", "Pixels", "Desktop"] },
    { word: "Wi-Fi", forbidden: ["Internet", "Wireless", "Router", "Network", "Connection"] },
    { word: "Bluetooth", forbidden: ["Wireless", "Pair", "Device", "Connect", "Short range"] },
    { word: "Charger", forbidden: ["Battery", "Power", "Cable", "Plug", "Electricity"] },
    { word: "Power bank", forbidden: ["Portable", "Battery", "Charge", "Phone", "USB"] },
    { word: "Selfie", forbidden: ["Photo", "Camera", "Face", "Front", "Picture"] },
    { word: "Password", forbidden: ["Login", "Secret", "Account", "Security", "Username"] },
    { word: "Fingerprint scanner", forbidden: ["Touch", "Biometric", "Unlock", "Finger", "Security"] },
    { word: "Face recognition", forbidden: ["Camera", "Identity", "Unlock", "Face", "Security"] },
    { word: "QR code", forbidden: ["Scan", "Square", "Camera", "Barcode", "Link"] },
    { word: "Cloud storage", forbidden: ["Online", "Files", "Internet", "Backup", "Drive"] },
    { word: "USB drive", forbidden: ["Pen drive", "Files", "Storage", "Plug", "Computer"] },
    { word: "Printer", forbidden: ["Paper", "Ink", "Print", "Document", "Machine"] },
    { word: "Scanner", forbidden: ["Document", "Copy", "Image", "Paper", "Digital"] },
    { word: "Web browser", forbidden: ["Internet", "Website", "Chrome", "Search", "Tabs"] },
    { word: "Search engine", forbidden: ["Google", "Find", "Web", "Results", "Query"] },
    { word: "Social media", forbidden: ["Posts", "Followers", "Likes", "Online", "Platform"] },
    { word: "Hashtag", forbidden: ["Pound sign", "Social media", "Tag", "Post", "Symbol"] },
    { word: "Emoji", forbidden: ["Face", "Symbol", "Text", "Message", "Expression"] },
    { word: "Screenshot", forbidden: ["Capture", "Screen", "Image", "Phone", "Save"] },
    { word: "Video call", forbidden: ["Camera", "Internet", "Face", "Meeting", "Talk"] },
    { word: "Podcast", forbidden: ["Audio", "Episode", "Listen", "Host", "Show"] },
    { word: "Streaming", forbidden: ["Video", "Online", "Watch", "Internet", "Live"] },
    { word: "Algorithm", forbidden: ["Steps", "Code", "Logic", "Computer", "Instructions"] },
    { word: "Artificial intelligence", forbidden: ["AI", "Machine", "Learning", "Computer", "Smart"] },
    { word: "Chatbot", forbidden: ["Conversation", "AI", "Text", "Reply", "Robot"] },
    { word: "Virtual reality", forbidden: ["Headset", "Immersive", "Digital", "Gaming", "3D"] },
    { word: "Augmented reality", forbidden: ["Overlay", "Camera", "Digital", "Real world", "Filter"] },
    { word: "Cybersecurity", forbidden: ["Hacker", "Protect", "Data", "Security", "Online"] },
    { word: "Firewall", forbidden: ["Network", "Security", "Block", "Internet", "Protection"] },
    { word: "Virus", forbidden: ["Malware", "Infect", "Computer", "Harmful", "Antivirus"] },
    { word: "Phishing", forbidden: ["Scam", "Email", "Password", "Fake", "Fraud"] },
    { word: "Two-factor authentication", forbidden: ["Login", "Code", "Security", "Verification", "Account"] },
    { word: "Operating system", forbidden: ["Windows", "Linux", "Software", "Computer", "Run"] },
    { word: "Source code", forbidden: ["Programming", "Text", "Developer", "Instructions", "Software"] },
    { word: "Website", forbidden: ["Page", "Browser", "Internet", "URL", "Online"] },
    { word: "App", forbidden: ["Application", "Phone", "Install", "Software", "Icon"] },
    { word: "Update", forbidden: ["New version", "Software", "Download", "Fix", "Install"] },
    { word: "Bug", forbidden: ["Error", "Code", "Problem", "Software", "Fix"] },
    { word: "Debugging", forbidden: ["Error", "Fix", "Code", "Test", "Program"] },
    { word: "Database", forbidden: ["Data", "Tables", "Records", "Store", "Query"] },
    { word: "Server", forbidden: ["Host", "Network", "Requests", "Computer", "Website"] },
    { word: "Domain name", forbidden: ["Website", "Address", "URL", "Internet", "Register"] },
    { word: "QR payment", forbidden: ["Scan", "Money", "UPI", "Phone", "Transfer"] },
    { word: "Smartwatch", forbidden: ["Wrist", "Time", "Fitness", "Screen", "Wearable"] },
    { word: "Drone", forbidden: ["Fly", "Remote", "Camera", "Air", "Propeller"] }
  ],

  Friendship: [
    { word: "Best friend", forbidden: ["Close", "Loyal", "Trust", "Buddy", "Companion"] },
    { word: "Trust", forbidden: ["Honesty", "Believe", "Secret", "Reliable", "Faith"] },
    { word: "Loyalty", forbidden: ["Faithful", "Support", "Friend", "Commitment", "Trust"] },
    { word: "Inside joke", forbidden: ["Funny", "Secret", "Friends", "Laugh", "Meaning"] },
    { word: "Group chat", forbidden: ["Messages", "Friends", "Phone", "Text", "Conversation"] },
    { word: "Sleepover", forbidden: ["Night", "Friends", "Pajamas", "House", "Sleep"] },
    { word: "Road trip", forbidden: ["Car", "Travel", "Journey", "Friends", "Highway"] },
    { word: "Birthday surprise", forbidden: ["Cake", "Gift", "Party", "Secret", "Celebration"] },
    { word: "Friendship bracelet", forbidden: ["Wrist", "Band", "Gift", "Colourful", "Wear"] },
    { word: "Reunion", forbidden: ["Meet", "Old friends", "Gathering", "Together", "Again"] },
    { word: "Apology", forbidden: ["Sorry", "Forgive", "Mistake", "Regret", "Make up"] },
    { word: "Forgiveness", forbidden: ["Pardon", "Mistake", "Sorry", "Let go", "Accept"] },
    { word: "Jealousy", forbidden: ["Envy", "Possessive", "Comparison", "Green", "Feelings"] },
    { word: "Peer pressure", forbidden: ["Friends", "Influence", "Group", "Choice", "Fit in"] },
    { word: "Wingman", forbidden: ["Dating", "Friend", "Help", "Approach", "Support"] },
    { word: "Third wheel", forbidden: ["Couple", "Extra", "Awkward", "Friend", "Romance"] },
    { word: "Best friend test", forbidden: ["Quiz", "Questions", "Know", "Friendship", "Challenge"] },
    { word: "Friend zone", forbidden: ["Romance", "Like", "Crush", "Relationship", "Platonic"] },
    { word: "Long-distance friendship", forbidden: ["Far", "Apart", "Calls", "Messages", "Distance"] },
    { word: "Late-night call", forbidden: ["Phone", "Midnight", "Talk", "Sleep", "Friend"] },
    { word: "Sharing secrets", forbidden: ["Private", "Trust", "Tell", "Confidential", "Friend"] },
    { word: "Borrowing clothes", forbidden: ["Wear", "Lend", "Shirt", "Wardrobe", "Return"] },
    { word: "Splitting the bill", forbidden: ["Money", "Pay", "Restaurant", "Share", "Cost"] },
    { word: "Group selfie", forbidden: ["Photo", "Friends", "Camera", "Pose", "Picture"] },
    { word: "Practical joke", forbidden: ["Prank", "Funny", "Trick", "Laugh", "Surprise"] },
    { word: "Friendly competition", forbidden: ["Contest", "Win", "Rival", "Game", "Challenge"] },
    { word: "Emotional support", forbidden: ["Comfort", "Listen", "Help", "Feelings", "Care"] },
    { word: "Reliable friend", forbidden: ["Dependable", "Trust", "Help", "Promise", "Support"] },
    { word: "Funny friend", forbidden: ["Jokes", "Laugh", "Comedy", "Silly", "Humour"] },
    { word: "Quiet friend", forbidden: ["Silent", "Shy", "Talk", "Reserved", "Calm"] },
    { word: "Foodie friend", forbidden: ["Eat", "Hungry", "Restaurant", "Snacks", "Food"] },
    { word: "Fashionable friend", forbidden: ["Style", "Clothes", "Trendy", "Outfit", "Look"] },
    { word: "Planner friend", forbidden: ["Organize", "Schedule", "Plan", "Arrange", "Event"] },
    { word: "Forgetful friend", forbidden: ["Remember", "Forget", "Late", "Lost", "Absent-minded"] },
    { word: "Overprotective friend", forbidden: ["Care", "Worry", "Safe", "Guard", "Concern"] },
    { word: "Friendship breakup", forbidden: ["End", "Argument", "Fallout", "Separate", "Conflict"] },
    { word: "Making new friends", forbidden: ["Meet", "Introduce", "Socialize", "People", "Connect"] },
    { word: "Reconnecting", forbidden: ["Contact", "Again", "Message", "Old friend", "Meet"] },
    { word: "Group holiday", forbidden: ["Travel", "Vacation", "Friends", "Trip", "Destination"] },
    { word: "Movie night with friends", forbidden: ["Film", "Snacks", "Watch", "Group", "Screen"] },
    { word: "Game night", forbidden: ["Board game", "Play", "Friends", "Competition", "Evening"] },
    { word: "Friendship goals", forbidden: ["Ideal", "Relationship", "Trust", "Support", "Bond"] },
    { word: "Giving advice", forbidden: ["Suggestion", "Help", "Opinion", "Problem", "Guide"] },
    { word: "Being a good listener", forbidden: ["Hear", "Attention", "Talk", "Understand", "Quiet"] },
    { word: "Keeping a promise", forbidden: ["Commitment", "Word", "Trust", "Do", "Honour"] },
    { word: "Surprise visit", forbidden: ["Arrive", "Unexpected", "Door", "Friend", "Visit"] },
    { word: "Matching outfits", forbidden: ["Clothes", "Same", "Wear", "Style", "Pair"] },
    { word: "Shared playlist", forbidden: ["Music", "Songs", "Listen", "Tracks", "Together"] },
    { word: "Friendship anniversary", forbidden: ["Date", "Years", "Celebrate", "Bond", "Memory"] },
    { word: "Unconditional support", forbidden: ["Always", "Help", "Care", "Loyal", "No matter what"] }
  ],

  "India & GK": [
    { word: "India", forbidden: ["Country", "Bharat", "Asia", "Nation", "Subcontinent"] },
    { word: "New Delhi", forbidden: ["Capital", "India", "Government", "City", "Parliament"] },
    { word: "Karnataka", forbidden: ["Bengaluru", "Kannada", "State", "Mysuru", "South"] },
    { word: "Bengaluru", forbidden: ["Garden City", "Karnataka", "IT", "Silicon Valley", "City"] },
    { word: "Mysuru", forbidden: ["Palace", "Karnataka", "Dasara", "City", "Chamundi"] },
    { word: "Indian flag", forbidden: ["Tricolour", "Saffron", "White", "Green", "Ashoka Chakra"] },
    { word: "National anthem", forbidden: ["Jana Gana Mana", "Song", "Rabindranath Tagore", "Sing", "India"] },
    { word: "National animal", forbidden: ["Tiger", "Wildlife", "India", "Stripes", "Forest"] },
    { word: "National bird", forbidden: ["Peacock", "Feathers", "India", "Dance", "Bird"] },
    { word: "National flower", forbidden: ["Lotus", "Petals", "India", "Pond", "Plant"] },
    { word: "Republic Day", forbidden: ["January", "26", "Parade", "Constitution", "Holiday"] },
    { word: "Independence Day", forbidden: ["August", "15", "Freedom", "Flag", "1947"] },
    { word: "Gandhi Jayanti", forbidden: ["October", "2", "Mahatma", "Birthday", "Nonviolence"] },
    { word: "Mahatma Gandhi", forbidden: ["Father of the Nation", "Freedom", "India", "Nonviolence", "Charkha"] },
    { word: "Jawaharlal Nehru", forbidden: ["First Prime Minister", "India", "Children's Day", "Chacha", "Congress"] },
    { word: "Dr. B. R. Ambedkar", forbidden: ["Constitution", "Law", "India", "Social justice", "Chairman"] },
    { word: "Indian Parliament", forbidden: ["Lok Sabha", "Rajya Sabha", "Laws", "Delhi", "MP"] },
    { word: "Supreme Court", forbidden: ["Judge", "Law", "Justice", "Court", "Constitution"] },
    { word: "Rupee", forbidden: ["Currency", "Money", "₹", "India", "Coins"] },
    { word: "Indian Railways", forbidden: ["Train", "Tracks", "Station", "Travel", "Railway"] },
    { word: "ISRO", forbidden: ["Space", "India", "Rocket", "Satellite", "Scientists"] },
    { word: "Chandrayaan", forbidden: ["Moon", "Mission", "ISRO", "Lunar", "Spacecraft"] },
    { word: "Mangalyaan", forbidden: ["Mars", "Mission", "ISRO", "Red Planet", "Space"] },
    { word: "Taj Mahal", forbidden: ["Agra", "Marble", "Monument", "Shah Jahan", "Love"] },
    { word: "Red Fort", forbidden: ["Delhi", "Monument", "Mughal", "Red sandstone", "Independence Day"] },
    { word: "Hampi", forbidden: ["Karnataka", "Ruins", "Vijayanagara", "Temple", "Heritage"] },
    { word: "Western Ghats", forbidden: ["Mountains", "Biodiversity", "India", "Forest", "Range"] },
    { word: "Ganges", forbidden: ["River", "India", "Holy", "Water", "North"] },
    { word: "Himalayas", forbidden: ["Mountains", "Snow", "Everest", "Asia", "Peaks"] },
    { word: "Thar Desert", forbidden: ["Rajasthan", "Sand", "Dry", "Camel", "Desert"] },
    { word: "Indian Ocean", forbidden: ["Sea", "Water", "Asia", "Ocean", "Coast"] },
    { word: "Kerala", forbidden: ["Backwaters", "Coconut", "Malayalam", "South", "God's Own Country"] },
    { word: "Tamil Nadu", forbidden: ["Chennai", "Tamil", "State", "South India", "Temples"] },
    { word: "Maharashtra", forbidden: ["Mumbai", "Marathi", "State", "Pune", "Western India"] },
    { word: "Rajasthan", forbidden: ["Jaipur", "Desert", "Forts", "Camels", "State"] },
    { word: "Punjab", forbidden: ["Sikh", "Bhangra", "Wheat", "Amritsar", "State"] },
    { word: "Assam", forbidden: ["Tea", "Guwahati", "Brahmaputra", "Northeast", "State"] },
    { word: "Diwali", forbidden: ["Lights", "Festival", "Lamps", "Fireworks", "October"] },
    { word: "Holi", forbidden: ["Colours", "Festival", "Powder", "Water", "March"] },
    { word: "Ugadi", forbidden: ["Kannada", "Telugu", "New Year", "Festival", "Pachadi"] },
    { word: "Makar Sankranti", forbidden: ["Harvest", "Kites", "January", "Festival", "Sesame"] },
    { word: "Onam", forbidden: ["Kerala", "Pookalam", "Boat race", "Sadya", "Festival"] },
    { word: "Eid", forbidden: ["Festival", "Prayer", "Moon", "Celebration", "Feast"] },
    { word: "Christmas", forbidden: ["December", "25", "Tree", "Santa", "Jesus"] },
    { word: "Yoga", forbidden: ["Exercise", "Pose", "Breathing", "India", "Meditation"] },
    { word: "Ayurveda", forbidden: ["Medicine", "Herbs", "Traditional", "India", "Healing"] },
    { word: "Kathak", forbidden: ["Dance", "Classical", "North India", "Footwork", "Performance"] },
    { word: "Bharatanatyam", forbidden: ["Dance", "Classical", "Tamil Nadu", "Mudra", "Performance"] },
    { word: "Yakshagana", forbidden: ["Karnataka", "Theatre", "Costume", "Dance", "Performance"] },
    { word: "Karnataka Rajyotsava", forbidden: ["November", "1", "Kannada", "State", "Celebration"] }
  ]
};

const TEAM_COLORS = [
  "#FF7058", "#20A995", "#E4A923", "#5A8DEE",
  "#D66DB2", "#8B77D9", "#69A84F", "#E08A42",
  "#398EAA", "#C65C78"
];

/* =========================================
   GAME STATE
   ========================================= */

let teams = [];
let activeTeamIndex = 0;
let selectedCategory = "All";
let deck = [];
let deckPosition = 0;
let currentCard = null;
let timerValue = TURN_LENGTH;
let timerInterval = null;
let turnRunning = false;
let turnFinished = false;
let turnsCompleted = 0;
let totalCorrect = 0;
let totalTraps = 0;
let totalSkips = 0;
let sessionNumber = 0;

/* =========================================
   HTML ELEMENTS
   ========================================= */

const setupScreen = document.getElementById("setupScreen");
const gameScreen = document.getElementById("gameScreen");
const resultsScreen = document.getElementById("resultsScreen");

const jumpToSetup = document.getElementById("jumpToSetup");
const teamSetup = document.getElementById("teamSetup");
const teamNameInput = document.getElementById("teamNameInput");
const addTeamBtn = document.getElementById("addTeamBtn");
const teamList = document.getElementById("teamList");
const teamCount = document.getElementById("teamCount");
const categorySelect = document.getElementById("categorySelect");
const startGameBtn = document.getElementById("startGameBtn");
const setupMessage = document.getElementById("setupMessage");

const backToSetupBtn = document.getElementById("backToSetupBtn");
const endGameBtn = document.getElementById("endGameBtn");
const currentTeamName = document.getElementById("currentTeamName");
const turnSubtitle = document.getElementById("turnSubtitle");
const timerDisplay = document.getElementById("timerDisplay");
const timerBar = document.getElementById("timerBar");
const startTurnBtn = document.getElementById("startTurnBtn");
const categoryBadge = document.getElementById("categoryBadge");
const cardCounter = document.getElementById("cardCounter");
const secretWord = document.getElementById("secretWord");
const forbiddenWords = document.getElementById("forbiddenWords");
const correctBtn = document.getElementById("correctBtn");
const skipBtn = document.getElementById("skipBtn");
const trapBtn = document.getElementById("trapBtn");
const gameMessage = document.getElementById("gameMessage");
const scoreList = document.getElementById("scoreList");
const nextTeamBtn = document.getElementById("nextTeamBtn");

const roundNumber = document.getElementById("roundNumber");
const totalCorrectDisplay = document.getElementById("totalCorrect");
const totalTrapsDisplay = document.getElementById("totalTraps");
const totalSkipsDisplay = document.getElementById("totalSkips");

const winnerHeading = document.getElementById("winnerHeading");
const winnerSubtitle = document.getElementById("winnerSubtitle");
const finalLeaderboard = document.getElementById("finalLeaderboard");
const playAgainBtn = document.getElementById("playAgainBtn");
const newGameBtn = document.getElementById("newGameBtn");

/* =========================================
   SETUP AND TEAM MANAGEMENT
   ========================================= */

function showMessage(element, message, type = "") {
  element.textContent = message;
  element.className = "message";

  if (type) {
    element.classList.add(type);
  }
}

function addTeam() {
  const name = teamNameInput.value.trim();

  if (!name) {
    showMessage(setupMessage, "Enter a team name first.", "error");
    teamNameInput.focus();
    return;
  }

  if (teams.some(team => team.name.toLowerCase() === name.toLowerCase())) {
    showMessage(setupMessage, "That team name already exists.", "error");
    teamNameInput.focus();
    return;
  }

  teams.push({
    id: `${Date.now()}-${Math.random()}`,
    name,
    score: 0,
    color: TEAM_COLORS[(teams.length) % TEAM_COLORS.length]
  });

  teamNameInput.value = "";
  renderTeams();
  showMessage(setupMessage, `${name} added!`, "success");
  teamNameInput.focus();
}

function renderTeams() {
  teamList.replaceChildren();

  teams.forEach((team, index) => {
    const item = document.createElement("li");
    item.className = "team-item";

    const name = document.createElement("span");
    name.textContent = `${index + 1}. ${team.name}`;

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-team-btn";
    remove.textContent = "Remove";
    remove.setAttribute("aria-label", `Remove ${team.name}`);

    remove.addEventListener("click", () => {
      teams.splice(index, 1);
      renderTeams();
      showMessage(setupMessage, "Team removed.");
    });

    item.append(name, remove);
    teamList.appendChild(item);
  });

  teamCount.textContent =
    `${teams.length} team${teams.length === 1 ? "" : "s"} added`;
}

jumpToSetup.addEventListener("click", () => {
  teamSetup.scrollIntoView({ behavior: "smooth", block: "start" });
  teamNameInput.focus({ preventScroll: true });
});

addTeamBtn.addEventListener("click", addTeam);

teamNameInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    event.preventDefault();
    addTeam();
  }
});

/* =========================================
   DECK AND QUESTION SELECTION
   ========================================= */

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function makeDeck() {
  const categories = selectedCategory === "All"
    ? Object.keys(QUESTIONS)
    : [selectedCategory];

  const cards = [];

  categories.forEach(category => {
    QUESTIONS[category].forEach(card => {
      cards.push({
        word: card.word.trim(),
        forbidden: [...card.forbidden],
        category
      });
    });
  });

  return shuffle(cards);
}

function drawCard() {
  if (deckPosition >= deck.length) {
    deck = makeDeck();
    deckPosition = 0;
  }

  currentCard = deck[deckPosition];
  deckPosition++;
  renderCard();
}

function renderCard() {
  if (!currentCard) return;

  secretWord.textContent = currentCard.word;
  categoryBadge.textContent = currentCard.category.toUpperCase();
  cardCounter.textContent = `Card ${deckPosition} / ${deck.length}`;
  forbiddenWords.replaceChildren();

  currentCard.forbidden.forEach(word => {
    const chip = document.createElement("span");
    chip.className = "forbidden-word";
    chip.textContent = word;
    forbiddenWords.appendChild(chip);
  });
}

/* =========================================
   START AND RESET GAME
   ========================================= */

function clearTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function resetStats() {
  turnsCompleted = 0;
  totalCorrect = 0;
  totalTraps = 0;
  totalSkips = 0;
  updateStats();
}

function updateStats() {
  roundNumber.textContent = turnsCompleted;
  totalCorrectDisplay.textContent = totalCorrect;
  totalTrapsDisplay.textContent = totalTraps;
  totalSkipsDisplay.textContent = totalSkips;
}

function startGame() {
  if (teams.length < 2) {
    showMessage(setupMessage, "Add at least two teams to begin.", "error");
    return;
  }

  clearTimer();
  sessionNumber++;
  selectedCategory = categorySelect.value;
  deck = makeDeck();
  deckPosition = 0;
  activeTeamIndex = 0;
  timerValue = TURN_LENGTH;
  turnRunning = false;
  turnFinished = false;

  teams.forEach(team => {
    team.score = 0;
  });

  resetStats();

  setupScreen.classList.add("hidden");
  resultsScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");

  drawCard();
  prepareTurn();
  renderScores();
  updateTimerDisplay();

  gameScreen.scrollIntoView({ behavior: "smooth", block: "start" });
}

startGameBtn.addEventListener("click", startGame);

/* =========================================
   TURN CONTROL AND TIMER
   ========================================= */

function prepareTurn() {
  clearTimer();

  turnRunning = false;
  turnFinished = false;
  timerValue = TURN_LENGTH;

  const team = teams[activeTeamIndex];

  if (!team) {
    finishGame();
    return;
  }

  currentTeamName.textContent = team.name;
  turnSubtitle.textContent = "Get ready to describe!";
  startTurnBtn.classList.remove("hidden");
  startTurnBtn.disabled = false;
  startTurnBtn.textContent = "Start Turn ▶";

  correctBtn.disabled = true;
  skipBtn.disabled = true;
  trapBtn.disabled = true;
  nextTeamBtn.classList.add("hidden");

  updateTimerDisplay();
  renderScores();
  showMessage(gameMessage, "When everyone is ready, start the timer.");
}

function updateTimerDisplay() {
  timerDisplay.textContent = timerValue;
  timerBar.style.width = `${(timerValue / TURN_LENGTH) * 100}%`;
  timerBar.classList.toggle("warning", timerValue <= 20 && timerValue > 10);
  timerBar.classList.toggle("urgent", timerValue <= 10);
}

function startTurn() {
  if (turnRunning || turnFinished) return;

  turnRunning = true;
  startTurnBtn.disabled = true;
  startTurnBtn.textContent = "Turn in progress…";
  turnSubtitle.textContent = "Describe the word. Don't say the forbidden words!";

  correctBtn.disabled = false;
  skipBtn.disabled = false;
  trapBtn.disabled = false;

  showMessage(gameMessage, "Good luck! Every second counts.");

  timerInterval = setInterval(() => {
    if (!turnRunning) return;

    timerValue = Math.max(0, timerValue - 1);
    updateTimerDisplay();

    if (timerValue <= 0) {
      endTurn("Time's up! ⏰");
    }
  }, 1000);
}

function endTurn(message) {
  if (turnFinished) return;

  clearTimer();
  turnRunning = false;
  turnFinished = true;
  turnsCompleted++;

  correctBtn.disabled = true;
  skipBtn.disabled = true;
  trapBtn.disabled = true;
  startTurnBtn.classList.add("hidden");

  turnSubtitle.textContent = "Turn completed!";
  showMessage(gameMessage, message, "success");

  nextTeamBtn.classList.remove("hidden");
  nextTeamBtn.textContent =
    activeTeamIndex === teams.length - 1
      ? "Start Next Round →"
      : "Next Team →";

  renderScores();
  updateStats();
}

startTurnBtn.addEventListener("click", startTurn);

/* =========================================
   CARD ACTIONS
   ========================================= */

function requireActiveTurn() {
  return turnRunning && !turnFinished && timerValue > 0;
}

correctBtn.addEventListener("click", () => {
  if (!requireActiveTurn()) return;

  teams[activeTeamIndex].score += 1;
  totalCorrect++;

  drawCard();
  renderScores();
  updateStats();
  showMessage(gameMessage, "Correct! +1 point. Next word! 🎉", "success");
});

skipBtn.addEventListener("click", () => {
  if (!requireActiveTurn()) return;

  totalSkips++;
  drawCard();

  updateStats();
  showMessage(gameMessage, "Skipped! No points lost. Next word.");
});

trapBtn.addEventListener("click", () => {
  if (!requireActiveTurn()) return;

  teams[activeTeamIndex].score -= 1;
  totalTraps++;

  drawCard();
  renderScores();
  updateStats();

  showMessage(gameMessage, "TRAPPED! −1 point. Watch your words! 🚫", "error");
});

/* =========================================
   SCOREBOARD
   ========================================= */

function renderScores(target = scoreList) {
  target.replaceChildren();

  const sorted = teams
    .map((team, index) => ({ ...team, originalIndex: index }))
    .sort((a, b) => b.score - a.score || a.originalIndex - b.originalIndex);

  sorted.forEach((team, rank) => {
    const row = document.createElement("div");
    row.className = "score-row";

    if (
      target === scoreList &&
      team.originalIndex === activeTeamIndex
    ) {
      row.classList.add("active-team");
    }

    const rankElement = document.createElement("span");
    rankElement.className = "rank";
    rankElement.textContent = rank === 0 ? "🏆" : rank + 1;

    const name = document.createElement("span");
    name.className = "score-name";
    name.textContent = team.name;

    const points = document.createElement("span");
    points.className = "score-points";
    points.textContent = team.score;

    row.append(rankElement, name, points);
    target.appendChild(row);
  });
}

/* =========================================
   TEAM ROTATION
   ========================================= */

nextTeamBtn.addEventListener("click", () => {
  if (!turnFinished) return;

  if (activeTeamIndex >= teams.length - 1) {
    activeTeamIndex = 0;
  } else {
    activeTeamIndex++;
  }

  prepareTurn();
});

/* =========================================
   END GAME AND RESULTS
   ========================================= */

function finishGame() {
  clearTimer();
  turnRunning = false;
  turnFinished = true;

  gameScreen.classList.add("hidden");
  setupScreen.classList.add("hidden");
  resultsScreen.classList.remove("hidden");

  const highestScore = Math.max(...teams.map(team => team.score));
  const winners = teams.filter(team => team.score === highestScore);

  if (winners.length === 1) {
    winnerHeading.textContent = `${winners[0].name} wins!`;
    winnerSubtitle.textContent =
      `Champion with ${highestScore} point${highestScore === 1 ? "" : "s"}! 🎉`;
  } else {
    winnerHeading.textContent = "It's a tie!";
    winnerSubtitle.textContent =
      `${winners.map(team => team.name).join(" & ")} share the top spot with ${highestScore} points!`;
  }

  renderScores(finalLeaderboard);
  resultsScreen.scrollIntoView({ behavior: "smooth", block: "start" });
}

endGameBtn.addEventListener("click", () => {
  if (confirm("End the game and show the final leaderboard?")) {
    finishGame();
  }
});

playAgainBtn.addEventListener("click", () => {
  startGame();
});

newGameBtn.addEventListener("click", () => {
  clearTimer();

  teams = [];
  activeTeamIndex = 0;
  deck = [];
  deckPosition = 0;
  currentCard = null;
  turnRunning = false;
  turnFinished = false;

  renderTeams();
  showMessage(setupMessage, "Add your teams to start a new game.");

  resultsScreen.classList.add("hidden");
  gameScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");

  teamSetup.scrollIntoView({ behavior: "smooth", block: "start" });
});

/* =========================================
   RETURN TO SETUP
   ========================================= */

backToSetupBtn.addEventListener("click", () => {
  if (turnRunning && !confirm("Leave the current turn? Its timer will stop.")) {
    return;
  }

  clearTimer();
  turnRunning = false;

  gameScreen.classList.add("hidden");
  resultsScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");

  showMessage(
    setupMessage,
    "Your team names are saved for this browser session. Starting again resets scores."
  );

  teamSetup.scrollIntoView({ behavior: "smooth", block: "start" });
});

/* Initial screen */
renderTeams();
updateStats();
