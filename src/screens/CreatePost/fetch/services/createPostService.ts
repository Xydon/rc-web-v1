import { apiIndex } from "../api";
import { CreatePostInstance } from "../instance";

export interface PostBody {
  userId: string;
  heading: string;
  body: string;
  images?: File[];
}

export default async function createPostService(body: PostBody) {
  try {
    const formData = new FormData();

    // Append data fields to FormData
    formData.append("userId", body.userId);
    formData.append("heading", body.heading);
    formData.append("body", body.body);

    // Append files to FormData
    if (body.images) {
      body.images.forEach((image, index) => {
        formData.append(`files`, image);
      });
    }

    // Make the Axios POST request with FormData
    await CreatePostInstance.post(apiIndex.createPost, formData);

    // Optionally, you can handle the response here if needed

    return true; // Or you can return any other relevant data
  } catch (error) {
    console.error("Error creating post:", error);
    throw error; // Rethrow the error or handle it as needed
  }
}
