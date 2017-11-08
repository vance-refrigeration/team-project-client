# Vance Refrigeration - E-Commerce Site

This app allows customers to view refrigeration products available for purchase.  Anyone can view but only signed-in users can add items to their shopping cart.  Total price is calculated in the cart and then purchases are completed using Stripe, a third-party app that handles credit card transactions.  (Note: we used Stripes testing functionality, which allows us to use a fake credit card number to simulate the transaction.)  Once an order is complete, the shopping cart is emptied and the order is added to 'My Orders,' which allows users to view their order history.

### [Live App](https://vance-refrigeration.github.io/team-project-client/) | [Deployed API](https://obscure-springs-81184.herokuapp.com/) | [API Repository](https://github.com/vance-refrigeration/team-project-api)


## Technologies

- HTML
- CSS/SASS
- Bootstrap
- Javascript
- jQuery
- AJAX
- Handlebars
- MongoDB
- Mongoose
- Express
- Heroku
- Github Pages

## Planning, Process & Problem-Solving

We started with a wireframe, which led to planning uur collections, documents, and their interplay and ultimately creating an ERD.

Cole set up a basic HTML template using Bootstrap & Handlebars so that we had a skeleton website.

Next we set up the API - creating products to test, creating a collection of Orders and a collection of Users.  Our shopping cart lives in Users as an array called 'cart.'  We tested all collections - Products, Orders & Users (including authentication) - using curl scripts.

We began work on the Client by making sure that products displayed, then adding products to the shopping cart, populating order history, and lastly integrating Stripe to handle checkout.

Most of our time was spent pair-programming but we held frequent stand-ups to be sure that we weren't work in such a way that we would create complex merge conflicts.  More challenging problems and major plamning decisions were made as a team.  On occasion, all four of us huddled around one computer and at times we were all working on our own machines, but always with a well-communicated common goal.


### User Stories
- As a consumer of top-quality refrigeration products, I want to view all items available for purchase from Vance Refrigeration so that I can see if VR sells what I want.
- As a consumer who is signed-in to VR's app, I want to add items to my shopping cart so that I can prepare to purchase them.
- As a consumer who has added items to my shopping cart, I want to view my shopping cart so that I can see the total cost before completing the purchase.
- As a consumer who is prepared to make a purchase, I want to pay with a credit card so that I can complete my online order.
- As a shrewd online shopper, I want the ability to remove items from my shopping cart so that I can decide not to purchase a particular item or correct a mistake.
- As a frequent online shopper, I want to view my VR order history so that I can track my purchases.
- As a user of the VR website, I want to see confirmation messages for all actions I perform so that I know if my actions were successful or not.
- As a user, I would like to be able to sign-up for a new account
- As a user, I would like to be able to sign-in to my account
- As a user, I would like to be able to change my account password
- As a user, I would like to be able to sign out of my account so none of my information shows for another user

### Wireframes

- [Wireframes](https://imgur.com/a/jWNl7)

### Goals for Future Versions
- Search function
- A more sophistocated/logical process for order numbers
- Photos of products
- A longer list of products
- Return process
