![logo](https://user-images.githubusercontent.com/44912347/202296600-c5f247d6-9616-49db-88f0-38433429d781.jpg)

# Inventory App
You are a team of developers for an e-commerce company. The Engineering team  is rebuilding their inventory tracking app from the ground up. Your team has been tasked with creating a Full-Sack (front and back end) RESTful CRUD application to track the items.

## Getting Started

1. `npm install`
2. `npm run seed`
3. `npm run server-dev`
4. In a seperate terminal, `npm run client-dev`

## Inventory App “Tiers”

The tiers describe different levels of functionality in your application with the difficulty becoming more complex as you advance through the tiers. Start with Tier I, and complete everything you can, moving as quickly as possible as you can to Tier II. They are described as user stories.

Your team should strive to finish at least the first 4 tiers (a CRUD application) and attempt some of the bonus material.

### Tier I: MVP Application
- (DONE) As a User, I want to view all items in inventory
  - (DONE) Sequelize Model for Item
  - (DONE) Name, Description, Price, Category, Image
  - (DONE) Express Route to GET all Items
  - (DONE) Front-end View for all Items
- As a User, I want to view any individual item
  - (DONE) Express Route to GET one Item
  - (DONE) Front-end view for one item (click to see)

### Tier II: Adding an Item
- (DONE) As a User, I want to add an item by completing a form
  - (DONE) Add Item front-end form
  - (DONE) Express Route to ADD the Item
  - (DONE) Form or Fetch request to add item when form is submitted

### Tier III: Deleting an Item
- (DONE) As a User, I want to  remove an item from inventory
  - (DONE) Delete button on Single Item View
  - (DONE) Express Route to DELETE the Item
  - (DONE) Fetch request to delete item when button is clicked

### Tier IV: Updating an Item
- As a User, I want to edit an item by filling a form
  - (DONE) Edit form on Single Item View
  - (DONE) Express Route to UPDATE the Item
  - (DONE) Fetch request to update item when form is submitted

### Tier V: Bonus Stuff
- Models, Routes for Users and Orders
- As a User, I want my Inventory site to be visually stunning
- As a User, I want to be able to search through data based on search criteria
- As a User, I want to add items to a cart and purchase
- As a User, I want to use the application on a mobile browser
- As an Admin, I want all Add and Edit item requests to have server-side validations
