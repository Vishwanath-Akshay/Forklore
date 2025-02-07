// Function to send user input and receive response
function sendUserInput() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        appendUserMessage(userInput);
        fetchRecipeSuggestions(userInput);
    }
}

// Function to append user message to chat box
function appendUserMessage(message) {
    var chatBox = document.getElementById('chat-box');
    var userMessageElement = document.createElement('div');
    userMessageElement.className = 'message user-message';
    userMessageElement.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(userMessageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to append bot message to chat box
function appendBotMessage(message) {
    var chatBox = document.getElementById('chat-box');
    var botMessageElement = document.createElement('div');
    botMessageElement.className = 'message bot-message';
    botMessageElement.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(botMessageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to fetch recipe suggestions (dummy function)
function fetchRecipeSuggestions(ingredients) {
    // In a real application, this would fetch data from a backend or an API
    // For demonstration purposes, let's just use dummy data
    var dummyRecipes = {
        "tomato, cheese": [
            "Caprese Salad",
            "Margherita Pizza",
            "Tomato Basil Soup"
        ],
        "chicken, broccoli, rice": [
            "Chicken Stir Fry",
            "Broccoli Cheddar Casserole",
            "Chicken and Broccoli Alfredo",
            "Chicken Fried Rice"
        ],
        "banana, oats, honey": [
            "Banana Oat Pancakes",
            "Oatmeal with Honey and Banana",
            "Banana Bread",
            "Banana Smoothie"
        ],
        "eggs, spinach, cheese": [
            "Spinach and Cheese Omelette",
            "Egg and Spinach Breakfast Wrap",
            "Spinach and Feta Quiche"
        ],
        "pasta, tomato sauce, ground beef": [
            "Spaghetti Bolognese",
            "Lasagna",
            "Pasta with Meatballs"
        ],
        "avocado, bread, tomato": [
            "Avocado Toast",
            "Tomato Avocado Salad",
            "Guacamole"
        ],
        "salmon, lemon, asparagus": [
            "Grilled Salmon with Lemon Butter",
            "Baked Salmon with Asparagus",
            "Salmon and Asparagus Stir Fry"
        ],
        "potatoes, cheese, bacon": [
            "Loaded Potato Skins",
            "Cheesy Potato Casserole",
            "Bacon and Cheese Stuffed Potatoes"
        ],
        "apple, cinnamon, oats": [
            "Apple Cinnamon Oatmeal",
            "Apple Crisp",
            "Baked Apples with Cinnamon"
        ],
        "rice, beans, salsa": [
            "Mexican Rice and Beans",
            "Bean Burrito",
            "Rice and Beans Salad"
        ],
            "chicken, spices": [
              "Chicken Curry",
              "Butter Chicken",
              "Chicken Tikka Masala"
            ],
            "lentils, spinach": [
              "Dal Palak",
              "Palak Dal",
              "Spinach Lentil Soup"
            ],
            "paneer, peas": [
              "Matar Paneer",
              "Paneer Peas Curry",
              "Paneer Matar Masala"
            ],
            "rice, lentils": [
              "Khichdi",
              "Bisi Bele Bath",
              "Dal Khichdi"
            ],
            "cauliflower, potatoes": [
              "Aloo Gobi",
              "Gobi Aloo Masala",
              "Cauliflower Potato Curry"
            ],
            "chickpeas, tomatoes": [
              "Chole Masala",
              "Chana Masala",
              "Chickpea Tomato Curry"
            ],
            "fish, mustard oil": [
              "Fish Curry",
              "Fish Fry",
              "Mustard Fish"
            ],
            "eggs, tomatoes": [
              "Egg Curry",
              "Tomato Egg Bhurji",
              "Anda Tomato Masala"
            ],
            "rice, yogurt": [
              "Curd Rice",
              "Yogurt Rice",
              "Dahi Chawal"
            ],
            "eggplant, potatoes": [
              "Baingan Aloo",
              "Aloo Baingan",
              "Eggplant Potato Curry"
            ],
            "bitter gourd, spices": [
              "Karela Sabzi",
              "Bharwa Karela",
              "Karela Fry"
            ],
            "okra, onions": [
              "Bhindi Masala",
              "Bhindi Do Pyaza",
              "Okra Onion Stir Fry"
            ],
            "tomatoes, tamarind": [
              "Rasam",
              "Tomato Rasam",
              "Tomato Tamarind Soup"
            ],
            "lamb, spinach": [
              "Palak Gosht",
              "Lamb Spinach Curry",
              "Spinach Lamb Stew"
            ],
            "rice, coconut milk": [
              "Coconut Rice",
              "Thengai Sadam",
              "Nariyal Chawal"
            ],
            "yogurt, chickpea flour": [
              "Kadhi",
              "Punjabi Kadhi",
              "Gujarati Kadhi"
            ],
            "mango, yogurt": [
              "Mango Lassi",
              "Aam Doi",
              "Mango Yogurt Smoothie"
            ],
            "lentils, ghee": [
              "Dal Tadka",
              "Ghee Dal",
              "Tadka Dal"
            ],
            "potatoes, green beans": [
              "Aloo Beans",
              "Potato Green Bean Stir Fry",
              "Aloo Phali Sabzi"
            ],
            "paneer, bell peppers": [
              "Paneer Jalfrezi",
              "Paneer Capsicum",
              "Paneer Pepper Fry"
            ],
            "spinach, garlic": [
              "Lasooni Palak",
              "Spinach Garlic Stir Fry",
              "Garlic Spinach"
            ],
            "rice, saffron": [
              "Saffron Rice",
              "Kesar Chawal",
              "Zafrani Pulao"
            ],
            "mutton, potatoes": [
              "Aloo Gosht",
              "Mutton Potato Curry",
              "Aloo Mutton"
            ],
            "carrots, peas": [
              "Gajar Matar",
              "Carrot Pea Stir Fry",
              "Gajar Matar Sabzi"
            ],
            "chicken, yogurt": [
              "Chicken Korma",
              "Dahi Chicken",
              "Yogurt Chicken Curry"
            ],
            "lentils, tomatoes": [
              "Tomato Dal",
              "Dal Tomato Curry",
              "Tomato Pappu"
            ],
            "paneer, spinach": [
              "Palak Paneer",
              "Spinach Paneer",
              "Paneer Palak Masala"
            ],
            "rice, jaggery": [
              "Sweet Pongal",
              "Gur Chawal",
              "Sakkarai Pongal"
            ],
            "fenugreek leaves, potatoes": [
              "Aloo Methi",
              "Potato Fenugreek Curry",
              "Methi Aloo"
            ],
            "chickpeas, spinach": [
              "Chana Palak",
              "Spinach Chickpea Curry",
              "Palak Chole"
            ],
            "fish, coconut milk": [
              "Fish Molee",
              "Coconut Fish Curry",
              "Meen Moilee"
            ],
            "eggs, potatoes": [
              "Aloo Egg Curry",
              "Potato Egg Masala",
              "Egg Aloo"
            ],
            "rice, lemon": [
              "Lemon Rice",
              "Chitranna",
              "Nimbu Chawal"
            ],
            "eggplant, chickpeas": [
              "Baingan Chole",
              "Eggplant Chickpea Curry",
              "Brinjal Chana"
            ],
            "bitter gourd, yogurt": [
              "Karela Raita",
              "Bitter Gourd Yogurt",
              "Karela Dahi"
            ],
            "okra, tomatoes": [
              "Bhindi Tomato",
              "Tomato Bhindi Fry",
              "Okra Tomato Curry"
            ],
            "tomatoes, cumin": [
              "Tomato Jeera",
              "Jeera Tomato Fry",
              "Cumin Tomato Curry"
            ],
            "lamb, tomatoes": [
              "Mutton Curry",
              "Tomato Gosht",
              "Lamb Tomato Stew"
            ],
            "rice, spinach": [
              "Palak Rice",
              "Spinach Rice",
              "Palak Chawal"
            ],
            "chicken, butter": [
              "Butter Chicken",
              "Murgh Makhani",
              "Chicken Makhani"
            ],
            "lentils, garlic": [
              "Garlic Dal",
              "Lahsooni Dal",
              "Garlic Lentil Soup"
            ],
            "paneer, tomatoes": [
              "Paneer Butter Masala",
              "Paneer Tomato Curry",
              "Paneer Tikka Masala"
            ],
            "rice, tamarind": [
              "Tamarind Rice",
              "Puliyodarai",
              "Imli Chawal"
            ],
            "cauliflower, peas": [
              "Gobi Matar",
              "Cauliflower Pea Curry",
              "Gobi Matar Masala"
            ],
            "chickpeas, potatoes": [
              "Aloo Chole",
              "Potato Chickpea Curry",
              "Chana Aloo"
            ],
            "fish, tomatoes": [
              "Tomato Fish Curry",
              "Fish Tomato Stew",
              "Meen Tomato Curry"
            ],
            "eggs, peas": [
              "Egg Peas Curry",
              "Matar Anda Masala",
              "Pea Egg Fry"
            ],
            "rice, peanuts": [
              "Peanut Rice",
              "Groundnut Rice",
              "Verkadalai Sadam"
            ],
            "eggplant, tomatoes": [
              "Baingan Bharta",
              "Eggplant Tomato Curry",
              "Tomato Baingan"
            ],
            "bitter gourd, potatoes": [
              "Karela Aloo",
              "Bitter Gourd Potato Fry",
              "Aloo Karela"
            ],
            "okra, spices": [
              "Bhindi Fry",
              "Spicy Okra",
              "Masala Bhindi"
            ],
            "tomatoes, coriander": [
              "Tomato Coriander Soup",
              "Coriander Tomato Curry",
              "Tomato Dhania"
            ],
            "lamb, yogurt": [
              "Yogurt Lamb Curry",
              "Dahi Gosht",
              "Lamb Korma"
            ],
            "rice, mustard seeds": [
              "Mustard Rice",
              "Kadugu Sadam",
              "Sarson Chawal"
            ],
            "chicken, tomatoes": [
              "Tomato Chicken",
              "Chicken Tomato Curry",
              "Murgh Tamatar"
            ],
            "lentils, cumin": [
              "Jeera Dal",
              "Cumin Lentil Soup",
              "Dal Jeera"
            ],
            "paneer, onions": [
              "Paneer Do Pyaza",
              "Onion Paneer",
              "Paneer Pyaza Masala"
            ],
            "rice, spinach": [
              "Palak Rice",
              "Spinach Rice",
              "Palak Chawal"
            ],
            "cauliflower, carrots": [
              "Gobi Gajar",
              "Cauliflower Carrot Curry",
              "Gobi Gajar Masala"
            ],
            "chickpeas, onions": [
              "Chana Do Pyaza",
              "Onion Chickpea Curry",
              "Chole Pyaza"
            ],
            "fish, green chilies": [
              "Green Chili Fish",
              "Spicy Fish Curry",
              "Chili Fish Fry"
            ],
            "eggs, green chilies": [
              "Green Chili Egg",
              "Spicy Egg Fry",
              "Chili Egg Curry"
            ],
            "rice, cinnamon": [
              "Cinnamon Rice",
              "Dalchini Chawal",
              "Spiced Rice"
            ],
            "eggplant, onions": [
              "Baingan Do Pyaza",
              "Onion Eggplant Fry",
              "Eggplant Onion Curry"
            ]
    };
    
    

    var recipes = dummyRecipes[ingredients.toLowerCase()];
    if (recipes) {
        var recipeMessage = `Here are some recipe suggestions for ${ingredients}:<br>`;
        recipes.forEach(recipe => {
            recipeMessage += `- ${recipe}<br>`;
        });
        appendBotMessage(recipeMessage);
    } else {
        appendBotMessage(`Sorry, I couldn't find any recipes for ${ingredients}.`);
    }
}
