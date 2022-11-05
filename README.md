
# Uni-D

- [Uni-D](https://uni-d-beta.vercel.app/)  is a reading pattern tracker and a recommendation engine

### Problem Statement
- College Library provides 3 cards to students via which books can be issued from the library
- Managing 3 different cards often prove to be a hassle and students often end up losing their cards
- No system to recommend books based off reading patterns of a student

### Our Solution
- The Student Identification card is used to replace the 3 separate library cards
- QR code at the back of the ID card is scanned to authenticate the identity of the student

### Features
- App provides an interface where the book issued can be marked against each card
- Effectively saves the time to issue a book from the library and removes the requirement of having to have 3 library cards on your person at all times
- Provides functionality to view issual history as well as recommend books based off the reading patterns of the user 
- Recommendation engine is a [flask API](https://github.com/devan-MEC/recommendation_backend) hosted at [tobabe42.pythonanywhere.com/](http://tobabe42.pythonanywhere.com/) which returns 5 recommendations calculated using **ML** based off a book ID provided



### API Reference

#### Get 5 similar books

```http
  https://tobabe42.pythonanywhere.com/request/?book=BOOK_ID
```

| Parameter | Description     | Example                |
| :-------- | :------- | :------------------------- |
| `BOOK_ID` | ID of book for which 5 similar recommendations are needed | `9780006163831` |





### Tech-Stack

 - [ReactJs](https://reactjs.org/docs/getting-started.html)
 - [Firebase](https://firebase.google.com/docs/firestore)
 - [Tailwind CSS](https://tailwindcss.com/docs/installation)
 - [Flask](https://flask.palletsprojects.com/en/2.2.x/)


### Local set up to add new features

Clone the repository locally

```bash
git clone https://github.com/devan-MEC/Uni-D_2.git
```

Install dependencies inside the cloned directory
```
npm install -f
```
Start the app
```bash
npm run start
```