# boiler-buys marketplace website 

A website that is backed by a SQLite database and hosted on Glitch.

Checkout the website here: https://boiler-buys-main.glitch.me

**Working Features**

* Adding Users to the webiste and seeing all users
* Adding Items to sell to the website and seeing all users
* Searching for Items by a specific category
* Adding User as Tutor with qualifications
* Adding Users Information to search for Roommates
* Reviewing specific products and viewing all reviews
* Reviewing the website and getting the average website rating
* Can Toggle for Dark Mode

**Database Schema**

Key: table(PK, FK, attr_1, attr_2, ...)

Users (firstname, lastname, eadd, datejoined) - Main Page

Item(id, title, description, price, contact, category, datejoined) - Buying/Selling Page

Items(id, title, description, category, contact, datejoined) - Product Review Page

Tutors(id, title, description, category, contact, datejoined) - Tutors Sign Up Page

Roommates(id, title, description, category, category2, contact, datejoined) - Find Roommate Page

Req(id, name, product_name, comments)

Rating(id, rating, description) - Website Review Page
