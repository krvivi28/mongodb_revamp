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

const seededStudents = {
  name: "John Doe",
  age: 15,
  grade: "A",
  assignments: [
    { title: "Math", score: 85 },
    { title: "Science", score: 75 },
  ],
};

describe("Student Management API", () => {
  it("should create indexes successfully", async () => {
    const response = await request(app).post("/api/student/create-indexes");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Indexes created successfully.");
  });

  it("should get students with average score", async () => {
    const response = await request(app).get(
      "/api/student/students-average-score"
    );

    expect(response.status).toBe(200);
  });

  it("should get qualified students count", async () => {
    const response = await request(app).get(
      "/api/student/qualified-students-count"
    );

    expect(response.status).toBe(200);
  });
});
