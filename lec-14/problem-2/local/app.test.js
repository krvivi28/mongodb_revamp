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

const seededExpense = {
  title: "Lunch at Joe's",
  amount: 15.0,
  date: new Date().toISOString(),
  isRecurring: false,
  tags: ["food", "lunch"],
};

describe("Testing aggregation routes", () => {
  it("aggregates total revenue for each product", async () => {
    const response = await request(app).get(
      "/api/expenses/aggregate/total-revenue"
    );
    expect(response.status).toBe(200);
  });

  it("groups expenses by tags", async () => {
    const response = await request(app).get("/api/expenses/group/by-tags");

    expect(response.status).toBe(200);
  });

  it("groups and calculates average by recurring status", async () => {
    const response = await request(app).get(
      "/api/expenses/group/avg-by-recurring"
    );
    expect(response.status).toBe(200);
  });
});
