import { useState } from "react";
import { blogPosts } from "./post-data";
import Post from "../models/Post";

async function deletePosts() {
  await Post.deleteMany();
}

async function createPosts() {
  await Post.create(blogPosts);
}

function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadAll() {
    setIsLoading(true);
    // Bookings need to be deleted FIRST
    await deletePosts();
    await createPosts();

    setIsLoading(false);
  }

  return (
    <div
      style={{
        marginTop: "auto",
        backgroundColor: "#e0e7ff",
        padding: "8px",
        borderRadius: "5px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <h3>SAMPLE DATA</h3>

      <Button onClick={uploadAll} disabled={isLoading}>
        Upload Posts
      </Button>

      {/* <Button onClick={uploadBookings} disabled={isLoading}>
        Upload bookings ONLY
      </Button> */}
    </div>
  );
}

export default Uploader;
