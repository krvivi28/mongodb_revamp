Problem statement
Embark on a mission to enhance your finance management API with robust expense tracking capabilities. This problem dives into the implementation of the repository pattern in MongoDB, providing a centralized hub for seamless interactions between the expense model and the controller functions.

Objectives

Given an 'expense.repository.js' that will serve as the centralized location for all MongoDB operations related to expenses.

i) Implement the below methods within the repository:

addExpense: Insert a new expense into the database.
getAllExpenses: Retrieve all expenses from the database.
getOne: Fetch a single expense by its ID.
filterExpenses: Filter expenses based on criteria such as minimum amount, maximum amount, and recurring status.
addTagToExpense: Add a tag to an existing expense.

ii). Refactor the controller to seamlessly integrate these new repository methods for various operations, ensuring a cohesive and efficient workflow.

Notes:
Initialize the repository in your controller's constructor for efficient usage.
When defining routes, ensure to bind the correct context (this) to the controller methods by using arrow functions.

 <summary><h3 style="display: inline">Expected Output:</h3></summary>
      <br />
      The application should function as before but with a cleaner architecture:
      <br />
      <br />
      <ul>
        <li>
          Successfully adding a new expense via a POST request should seamlessly
          store the data using the '<code style="font-weight: bolder"
            >addExpense</code
          >' method from the repository.
        </li>
        <li>
          Using the appropriate ID parameter in a GET request should fetch a
          specific expense using the '<code style="font-weight: bolder"
            >getOne</code
          >' method.
        </li>
        <li>
          Filtering expenses through a GET request with specific query
          parameters should effectively utilize the '<code
            style="font-weight: bolder"
            >filterExpenses</code
          >' method. The necessary query parameters for filtration include:
          minAmount, maxAmount, and isRecurring. Example:
          http://localhost:3000/api/expenses/filter?minAmount=10&maxAmount=20&isRecurring=false
        </li>
        <li>
          POSTing a new tag to an expense should seamlessly update the expense
          with the new tag using '<code style="font-weight: bolder"
            >addTagToExpense</code
          >'.
        </li>
        <br />
        For a clearer grasp, please refer to the provided video:
<br>
<br>
        <video width="340px" controls>
          <source
            src="https://files.codingninjas.in/screencast-from-09-08-2023-11431-30940.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </ul>
      <br /><br />
    </details>
    <br />
