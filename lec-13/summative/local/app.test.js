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
  tags: [],
};

describe("Testing expense routes", () => {
  it("creates a new expense", async () => {
    const response = await request(app)
      .post("/api/expenses")
      .send(seededExpense);

    // console.log(response.body);
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(seededExpense);
  });

  it("fetches a specific expense by id", async () => {
    const newExpRes = await request(app)
      .post("/api/expenses")
      .send(seededExpense);

    const testId = newExpRes.body._id.toString();
    const response = await request(app).get(`/api/expenses/${testId}`);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(seededExpense);
  });

  it("fetches all expenses", async () => {
    const response = await request(app).get("/api/expenses");
    expect(response.status).toBe(200);
  });

  it("filters expenses based on criteria", async () => {
    const filterCriteria = {
      minAmount: 10.0,
      maxAmount: 20.0,
      isRecurring: "false",
    };

    const response = await request(app)
      .get("/api/expenses/filter")
      .query(filterCriteria);
    expect(response.status).toBe(200);
  });

  it("adds a tag to a specific expense", async () => {
    const newExpRes = await request(app)
      .post("/api/expenses")
      .send(seededExpense);

    const testId = newExpRes.body._id.toString();
    const tagToAdd = "food";

    const response = await request(app)
      .post(`/api/expenses/${testId}/tags`)
      .send({ tag: tagToAdd });

    expect(response.status).toBe(200);
  });
});
