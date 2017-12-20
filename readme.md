# Assignment: Mini-MEAN store

Guideline: Create a RESTful API using Express and get this to pull/update/delete records from the database!

Wireframes for project included.

Based on the wireframe, several functionalities I would normally include are not required. Therefore, I will be completing the assignment as given in order to remain timely.

What I Need:
* pages:  -- partials with angular
    * main index - will hold links to the partials
    * dashboard
    * products
    * orders
    * customers
    * settings
        * this page isn't shown in the wireframe so I'm going to use it for testing purposes - primarily displaying and deleting objects and/or associations

* mongoose models:
    * products
    * orders - this will be an association connecting product and customer
    * customers

* controllers: - may need to use more than one on a single partial
    * products
    * customers
    * orders?

* factories:
    * products
    * customers
    * orders?

* possible routes:
    * GET/orders
        - use on orders page to get all and on dash with filter
        - may also need GET/orders/:id
    * POST/orders
        - use to create new order - this will be association of customer and product
        - no requirement for deleting an order, but how will deleting a customer affect this? (also no requirement for delete product)
    * GET/customers
        - use on customer page
    * POST/customers
        - use to create new customer
    * DELETE/customer/:id
        - use to remove customer from database
        - how will this affect existing orders?
    * GET/products
        - find all products on products page
        - filter for creating a new order
    * GET/product/:id
        - maybe use this to display the image for each item?
    * POST/products
        - add new product

* validations:
    * no duplicates - customers or products
    * orders cannot be placed if product count will go negative
