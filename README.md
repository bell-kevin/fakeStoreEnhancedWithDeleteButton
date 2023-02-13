# Fake Store Enhanced with Delete Button

At the end of [the previous project](https://github.com/bell-kevin/fakeStoreEnhancedWithCards), it displays Cards, one per product, with information and an image about the product. In this project, you will add a Delete button on each card, and work with state so that clicking the Delete button will remove that card/product from the display. The results look like this:

Launch: (notice the change in the h1 tag)

![FakeStoreDel-1.PNG](https://github.com/bell-kevin/fakeStoreEnhancedWithDeleteButton/blob/main/readMeScreenShots/FakeStoreDel-1.PNG)

 

After clicking on the Delete button on the first item: (notice that the second item in the previous image is now the first item)

![FakeStoreDel-2.PNG](https://github.com/bell-kevin/fakeStoreEnhancedWithDeleteButton/blob/main/readMeScreenShots/FakeStoreDel-2.PNG)

 

Where does the code for the Delete button go? There are 3 choices -- the App component, the SearchBar component, and the Card component. The button needs to be displayed with the rest of the information about each product, and that display is created in the Card component, so the code to display the button will be part of the Card component. When the user clicks on the Delete button, it needs an onClick method to perform the work to remove the product from the array of products. That array of products is declared and stored in the App component, because it is data retrieved from an API when the project first loads. So that is where the work of deleting the product must happen. In this version of the project, you will add code with state and props to adjust the array to remove individual products.

The state variable for products is in the App component, and the button that will trigger the onClick action is in the Card component. The App component calls the SearchBar component, which calls the Card component. How does the click on the button in the Card component affect the state variable in the App component? The props passed from one component to the next can push data downward, but props data is immutable, unchangeable, so trying to delete a product from the array cannot work in the Card component. So how do you pass the ID for that product upward to the App component, where that deletion can happen? Data cannot be pushed upwards or backwards through calls to components -- the data flow is one-way, and it is always downward in the component tree. But, functions as well as data can be passed as props. If a function, which was passed through props, is called in another component, it is "bound" to the declaration of that function in the higher component and works as expected. Even though the array of products is declared in the App component, and therefore the function to delete a product from the array must also be declared in the App component, any other component can use that function as long as it is passed through props to that component.

 

### Important: Make a COPY of the previous project. Do not lose the functioning project while working out the details of the new project.

 

## Task A: Add the Delete Button in the Card component

The button's text says "Delete This Product". Add that button below the price in the Card. It needs an onClick method which will call a function that removes that specific product from the array, so that function needs a parameter for the specific product ID. If that function is named "deleteProduct", the call with a parameter would be "deleteProduct(product.id)". If you wrote that in the onClick function of the button, it would be:

      <button onClick={ deleteProduct(product.id) }>Delete This Product</button>

However, a function name with parentheses triggers the function. We don't want to run that deleteProduct function immediately, when the code is parsed -- we want to run it only when the button is clicked. The way to avoid the immediate triggering of the function is to put it inside an anonymous function, like this:

      <button onClick={ ( ) => deleteProduct(product.id) } >Delete This Product</button>

 

## Task B: Add the delete function to the App component

Since the state for the products array is set up and managed in the App component, that is the only place where you can remove a product from the array. The filter method on that array can create a new array that contains products that do not have the product ID to be deleted. You see this behavior in the SearchBar component, where it filters the products to include only those product titles that contain the text of the search field. Create a function "deleteProduct" that takes in one parameter for the product ID and filters the array for any product that does not have that product id.  Store the results of that filtering in a new variable, then use the setter from the state to assign that new array to the products array. Running the setter (for example, setProductsState) will result in rendering the component again, and you should see that product disappear from the page. That is the goal, but first, you have to connect that function from the App component down to the Card component where the button is clicked.

In the App component, also change the h1 tag to add "with Deletion", to differentiate this project from the previous one.

 

## Task C: Connect the delete function in the App component and the onClick action of the Button in the Card component

Props are used to pass things from one component to another. Props are arrays, so they can hold as many elements as you need. In this project, you are already sending the products array as a prop to pass from App to SearchBar and to Card components. In this project, you also need to send a prop that specifies the function "deleteProduct" into the SearchBar component so it can be sent into the Card component, which has the button whose onClick event needs to call that "deleteProduct" function. This will require adding the prop for the function to the component calls, and adding the prop for the function in the component declarations.

What do you name the prop for the function? You can call a prop anything you want. The easiest solution is to use the name of the function as the name of the prop. Then you'd see this:

      <SearchBar products={...} deleteProduct={deleteProduct} />

There is nothing wrong with that, in fact, it makes it very obvious and very easy to remember the purpose of the prop and the function name being passed. But you will often see different names for the prop, something that is not the same as the function name. For example, the prop that is passing the function "deleteProduct" might be called "removeProduct" or "onDelete", since it will run when an onClick event occurs. Then you would see code like this, for example:

      <SearchBar products={...} onDelete={deleteProduct} />

Inside the SearchBar component, the prop is named "onDelete". The actual name of the function, "deleteProduct", is not visible in the component. It's similar to one person having multiple versions of their name. A person named William might also be known as Will, Bill, Willy, or Billy. You use the name as he was introduced to you -- if it was Bill, you will call him that, not William. If a prop was named onDelete, you will use that, not the function name of deleteProduct. 

The App component calls the SearchBar component and needs to pass not only the products but also the delete function. The SearchBar component needs to receive both props, and then calls the Card component with two props, again the product(s) and the function. The Card component needs to receive two props; this component will call the function when the button is clicked, as coded above in Task A.

When properly connected, the project should display all of the products in separate Cards, with a delete button, and when clicked that card will be removed. Take 2 screenshots: (1) the page when it launches; then delete the first item and take another screenshot of the page which will show the first item is gone. See the images above for examples.

 

Submission: Zip the 2 screenshots and the root folder for the project together, and submit the single zipped folder.

![p](https://github.com/bell-kevin/fakeStoreEnhancedWithDeleteButton/blob/main/outputScreenshots/1.PNG)

![p](https://github.com/bell-kevin/fakeStoreEnhancedWithDeleteButton/blob/main/outputScreenshots/2.PNG)


== We're Using GitHub Under Protest ==

This project is currently hosted on GitHub.  This is not ideal; GitHub is a
proprietary, trade-secret system that is not Free and Open Souce Software
(FOSS).  We are deeply concerned about using a proprietary system like GitHub
to develop our FOSS project. I have a [website](https://bellKevin.me) where the
project contributors are actively discussing how we can move away from GitHub
in the long term.  We urge you to read about the [Give up GitHub](https://GiveUpGitHub.org) campaign 
from [the Software Freedom Conservancy](https://sfconservancy.org) to understand some of the reasons why GitHub is not 
a good place to host FOSS projects.

If you are a contributor who personally has already quit using GitHub, please
email me at **bellKevin@pm.me** for how to send us contributions without
using GitHub directly.

Any use of this project's code by GitHub Copilot, past or present, is done
without our permission.  We do not consent to GitHub's use of this project's
code in Copilot.

![Logo of the GiveUpGitHub campaign](https://sfconservancy.org/img/GiveUpGitHub.png)
