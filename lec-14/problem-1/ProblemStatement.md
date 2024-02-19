## Title

Expense Tracking App Enhancement

### Introduction + Scenario

Imagine you're working on an expense tracking app. Currently, the app allows adding, fetching, filtering, and tagging expenses. However, the crucial functionalities of updating and deleting tags are missing. Your task is to implement these features using MongoDB and Node.js, ensuring efficient use of the pull operator for seamless expense management.

### Objectives

1. Integrate update functionality to modify tags in expenses. A sample object for an expense is:
   {
   "title": "Lunch at Joe's",
   "amount": 15.0,
   "date": "new Date().toISOString()",
   "isRecurring": false,
   "tags": ["food", "lunch"]
   }
   To update a tag, use the route: PUT("/update/tag/:id")
   where "id" is the object ID of the expense document in the MongoDB database passed as the parameter value. Use the following JSON content as the request body:
   { "oldTag": "food", "newTag": "game" }
   This will replace the old tag 'food' in the sample object with 'game'. The expected output will look like:
   {
   "title": "Lunch at Joe's",
   "amount": 15.0,
   "date": "new Date().toISOString()",
   "isRecurring": false,
   "tags": ["game", "lunch"]
   }

2. Implement the ability to delete a specific tag from expenses. To delete a tag, use the route: DELETE(/api/expenses/delete/tags/:id?tag=lunch)
   where "id" is the object ID of the expense document in the MongoDB database passed as the parameter value, and the tag name is passed as a query parameter.
   The expected output after deleting the 'lunch' tag from the sample expense will be:
   {
   "title": "Lunch at Joe's",
   "amount": 15.0,
   "date": "new Date().toISOString()",
   "isRecurring": false,
   "tags": ["game"]
   }

3. Utilize MongoDB and Node.js, focusing on optimizing with the pull operator.

### Notes

1. You only need to make changes in the repository file. There is no need to change the prewritten code.
2. Consider the structure of the existing expenses and tags in the database.
3. Research how to apply the pull operator to update or delete specific elements within an array.

### Expected Output

Output should look like: https://files.codingninjas.in/screencast-from-18-09-23-08-15-40-am-ist-31143.webm
