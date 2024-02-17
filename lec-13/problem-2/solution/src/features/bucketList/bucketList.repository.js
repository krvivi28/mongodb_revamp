import { getDB } from "../../config/mongodb.js";

class BucketListRepository {
  constructor() {
    this.collection = "bucketListItems";
  }
  async addBucketListItem(bucketListItem) {
    const db = getDB();
    await db.collection(this.collection).insertOne(bucketListItem);
    return bucketListItem;
  }

  async findOneBucketListItem(title) {
    const db = getDB();
    const item = await db.collection(this.collection).findOne({ title });
    return item;
  }
}

export default BucketListRepository;
