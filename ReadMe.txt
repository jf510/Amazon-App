Welcome to the Amazon clone app! This app in a e-commerce website that allows a user to create an account, sign-in, and shop for items on the site. From the checkout page, the user can proceed to the payment page where there is full Stripe payment functionality.

Some of the Components in the app:

    - Login.js
        This is the component that contains the sign in page. Here, the user has the option to sign-in or create an account. If a user attempts to create an account with an email that already exists in the system, they will see an error message.
        If user trys to sign with the wrong password or email then they will also recieve an email.
        Once the use has logged in successfully, they will be redirected to the home page. 
    
    - Home.js 
        The home page is located within this component. Here the user can select an item by clicking the button located below the item to add the item to the basket. Every time an item is added to the basket, the basket in the top right corner of the page updates. When the user is ready to checkout or see the contents of their basket, they can click on the basket icon which will redirect them to the checkout page.
    
    - Checkout.js
        This is the checkout page where the user can review the contents of the basket. They have the option to remove items from their basket or proceed the checkout page. Also on this page, the total price of the basket contents is added up or subtracted if an item is removed. Once the user is ready, they can proceed to the payment page.
    
    -Payment.js
        This would be final step in the shopping process. Again, the user has the option to remove an item from their basket on this page but also has the option to enter thier card information into the payment methods input.

Currently Working On:

    - I want to add an account page that allows the user to update more of their personal information like the address, username, and Prime information.

    - I currently only have the standard firebase account which I believe is the reason why I cannot deploy the app with the Express API attached. Once I upgrade I think certain issues I am having with the deployment will be gone. Because of this, the search bar function is currently disabled.

    
