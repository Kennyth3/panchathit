import BlogForm from "@/components/BlogForm";
import BlogCard from "@/components/BlogCard";

export default function AdminblogsPage() {
  return (
    <main className="p-6">
      <BlogForm />
      <BlogCard/>
    </main>
    
  );
}