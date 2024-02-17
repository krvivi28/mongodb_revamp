Problem statement
Through this problem, you will learn essential skills to connect your Node.js application to MongoDB, access a specific database, and confidently perform document insertions. This will lay a robust foundation for efficient data management and interaction with MongoDB in your Node.js projects.

Guide to upload Coding Problems:

Objective:
You have access to the 'connectToMongoDB' function inside 'src/config/mongodb.js', which facilitates the connection between your application and MongoDB. Your objectives are as follows:

i) Implement the 'getDB' function provided in 'src/config/mongodb.js' to access the "confession" database.

ii) Implement the 'create' method of the 'ConfessionModel' provided in 'src/features/confession/confession.model.js' to store new confessions into a collection named 'confessions' in the 'confession' database. Upon successful insertion, return the new confession document to the 'ConfessionController'.

Sample object of a confession:
{
title: "Test Confession",
body: "This is a test confession",
author: "John Doe",
};

Sample Object of Expected Output for POST ("/api/confessions"):
{
title: 'Test Confession',
body: 'This is a test confession',
author: 'John Doe',
\_id: '65d0d21e6930dcc1204b8482'
}

<summary><h3 style="display:inline">Expected Output:</h3></summary>
<br>
After successfully implementing the provided problem, ensure that your output aligns with the demonstration given in the reference video.
<br><br>
<video width="340px" controls>
<source src="https://files.codingninjas.in/screen-recording-2024-01-14-at-2-20-06-pm-34757.mov">
Your browser does not support the video tag.
</video>
<br>
