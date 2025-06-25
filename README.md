# 🐾 Dog Gallery with Breed Search

A simple web app that displays 5 random dog images using the [Dog CEO API](https://dog.ceo/dog-api/).  
You can enter a breed (e.g. `beagle`, `bulldog-french`) and load 5 random images of that breed.

## 🌐 Live Demo
👉 [Your Live Link Here]

## 🚀 Features
✅ Fetch 5 random dog images  
✅ Enter a breed name to load images for that breed  
✅ Shows an error message if the breed is invalid  
✅ Refresh images with a button  

## 📌 API Used
- `https://dog.ceo/api/breeds/image/random/5` → fetch random dogs  
- `https://dog.ceo/api/breed/{breed}/images/random/5` → fetch random dogs of a specific breed  

## 💻 How It Works
1️⃣ On page load, 5 random dogs are shown.  
2️⃣ Type a breed name (like `beagle` or `bulldog-french`).  
3️⃣ Click **Load New Dogs** → it fetches 5 images of that breed (or shows an error if breed not found).  

## ✨ Example breeds
- `beagle`
- `bulldog-french`
- `retriever-golden`
- `pug`
- `hound-afghan`
