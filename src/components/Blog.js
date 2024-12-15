"use client"
import Image from "next/image";

// src/components/Blog.js
const Blog = () => (
    <div id="blog" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((blog) => (
            <div
              key={blog}
              className="border rounded-lg overflow-hidden shadow-lg"
            >
              <Image
              width={200}
              height={200}
                src={`/images/blog${blog}.jpg`}
                alt={`Blog ${blog}`}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">Blog Post Title {blog}</h3>
                <p className="text-sm text-gray-600">Posted on December 1, 2024</p>
                <p className="mt-2">Short description of the blog post...</p>
                <a href="#" className="text-indigo-600 hover:underline mt-4 block">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  export default Blog;
  