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

describe("POST /api/confessions", () => {
  it("it creates a new confession", async () => {
    const newConfession = {
      title: "Test Confession",
      body: "This is a test confession",
      author: "John Doe",
    };

    const response = await request(app)
      .post("/api/confessions")
      .send(newConfession);
    // console.log(response.body);
    expect(response.status).toBe(201);
    expect(response.body.title).toMatch(/Test Confession/i);
  });
});
