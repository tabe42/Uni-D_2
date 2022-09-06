# Uni-D

Here in our college, we usually have to carry around 3 separate cards
to issue books from the library (One cad per book). This is troublesome
because managing 3 cards is a hassle and you often don't end up
having your card on you when you want to issue a book.  
**Uni-D** is simply our attempt at solving this problem.

## Our Solution

Students are issued an identification(ID) card at the start of their first semester.
The ID card contains on its back, a QR _unique_ to each student. We make use of the student
registration number (which can be pulled from the QR) to map each student to the details about
the books they have currently rented out as well as their book rental history.  
We believe this makes the whole process of issuing books from the library

- More Accessible
- More Faster it terms of issuing and returning of books.

## How it works

- The Uni-D is only locally set up at the Librarians computer
- A person wishing to issue a book scans the QR on their ID card
- The librarian then enters the book ID of the book that has been issued

## Deployment

- You can find our app deployed for demo purposes at [Uni-D](https://uni-d-beta.vercel.app/)

## Local set up to add new features

Clone the repository locally

```bash
git clone https://github.com/devan-MEC/Uni-D_2.git
```

Change directory into the newly created folder

```bash
npm install -f
```

To run the project

```bash
npm run start
```
