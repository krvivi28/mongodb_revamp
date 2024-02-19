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

describe("Testing update and delete routes", () => {
  it("updates a tag in a specific expense", async () => {
    try {
      const res = await request(app).post("/api/expenses/").send(seededExpense);
      expect(res.body).not.toBe("");
      console.log("res-body is", res.body);
      const { _id } = res.body;

      const resU = await request(app)
        .put(`/api/expenses/update/tag/${_id}`)
        .send({ oldTag: "food", newTag: "game" });
      console.log(resU.text);
      expect(resU.text).toContain("Tag updated successfully");

      const resD = await request(app).delete(
        `/api/expenses/delete/tags/${_id}?tag=lunch`
      );
      console.log(resD.text);
      expect(resD.text).toContain("Tag deleted successfully");
    } catch (error) {
      console.error("Error in update tag test:", error);
      throw error;
    }
  });
});
