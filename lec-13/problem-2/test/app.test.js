import request from "supertest";
import app from "./index.js";
import {
  closeMongoDBConnection,
  connectToMongoDB,
} from "./src/config/mongodb.js";

beforeAll(async () => {
  try {
    await connectToMongoDB();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
});

afterAll(async () => {
  try {
    await closeMongoDBConnection();
  } catch (error) {
    console.error("Error closing MongoDB connection:", error);
    throw error;
  }
});

describe("POST /api/bucket-list-items", () => {
  it("adds a new bucket list item", async () => {
    const newItem = {
      title: "Visit the Great Wall",
      description: "I've always wanted to see it!",
      dateAdded: new Date().toISOString(),
      targetDate: new Date().toISOString(),
      isCompleted: false,
    };

    const response = await request(app)
      .post("/api/bucket-list-items")
      .send(newItem);
    // expect(response.status).toBe(201);
    expect(response.body).toMatchObject(newItem);
  });

  it("fetches a specific bucket list item by title", async () => {
    const titleToSearch = "Visit the Great Wall";
    const seededItem = {
      title: titleToSearch,
      description: "I've always wanted to see it!",
      dateAdded: new Date().toISOString(),
      targetDate: new Date().toISOString(),
      isCompleted: false,
    };
    await request(app).post("/api/bucket-list-items").send(seededItem);

    const response = await request(app)
      .get("/api/bucket-list-items")
      .query({ title: titleToSearch });
    console.log(response.body);
    expect(response.body.title).toMatch(titleToSearch);
  });
});
