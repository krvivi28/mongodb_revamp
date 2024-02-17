Problem Statement:

In this problem, you will focus on maintaining a clean architecture and adhering to best practices for scaling and maintaining your project, using the Repository Pattern to manage your MongoDB operations more efficiently.

Objectives:

Given a 'bucketList.repository.js' file inside 'src/features/bucketList' containing two methods: 'addBucketListItem' and 'findOneBucketListItem', which will handle the database operations for the Bucket List.

i) Implement the 'addBucketListItem' method to insert a new bucket list item into the database. After successful insertion into the database, return the new bucket list document to the 'BucketListController'.
Note: Sample object for a bucket list:

{
title: titleToSearch,
description: "I've always wanted to see it!",
dateAdded: "today's-date",
targetDate: "set a custom date",
isCompleted: false,
}

ii) Implement the 'findOneBucketListItem' method to retrieve a bucket list item from the database using query params.
Note: A bucket list item is retrieved by making a GET request at "http://localhost:3000/api/bucket-list-items?title=titleToSearch" passing the title of the list in query params.

Expected Output: Video link: https://files.codingninjas.in/screen-recording-2024-02-17-at-10-06-37-pm-1708191667.mov
