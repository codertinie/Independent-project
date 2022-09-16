# Independent-project

# Project Owner: Martin Munyao


# Project Name: Bookstore Management System (BMS)


# Problem Statement

Several bookstores face a challenge of inventory management. Customers come to buy the books only for the owner to realize that there is none left which may take several days to make the order and get the delivery therefore losing potential customers who opt to buy elsewhere. It becomes hectic to keep track of all the books available and books that are not available using the traditional file system. 


# Solution
Create an online application that allows bookstore owners to keep track of their inventory and make orders before they run out of stock.


# MVP
    • Inventory
    • Books available
    • Books almost running out of stock
    • Landing page
    • Offer availability

# Deliverables

The user can add books to the web application and remove them. 
Users can also check whether there are any offers available and when they will be available. 
Users can also see a list of subscribers who are eligible for offers and 
finally there is a section for quotes to help motivate users to read more books.

# Github link

https://github.com/codertinie/Independent-project

# API 
json-server

# Setup 

To begin using the application get the backend started using this command

`console
$ json-server --watch db.json
```
**Make sure to run this command exactly as written**, otherwise your server will
not return data in the correct format. Test your server by visiting this route
in the browser:

  [http://localhost:3000/Books]

When run, you'll see some messaging about how to access our JSON data. By
default, JSON Server will start up on port `3000`. You should see a notice
that you can access the server at `http://localhost:3000`.

To access the books in the server use the following port

  http://localhost:3000/Books/

Then, open the `index.html` file on your browser to run the application.

Have fun in using the application. I hope you find it helpful.
