import React, { useState } from "react";
import {
  ArrowRight,
  Calendar,
  Clock,
  Eye,
  Play,
  Search,
  Youtube,
  BookOpen,
  Video,
} from "lucide-react";

const BlogsVideos: React.FC = () => {
  const [blogFilter, setBlogFilter] = useState("All");
  const [videoFilter, setVideoFilter] = useState("All Videos");

  const blogs = [
    {
      title: "Getting Started with AWS: A Beginner's Roadmap",
      category: "AWS",
      desc: "A practical guide for beginners to start their cloud journey with AWS.",
      date: "May 10, 2024",
      read: "6 min read",
      image: "/assets/blogs/aws-roadmap.jpg",
    },
    {
      title: "CI/CD with GitHub Actions: From Code to Cloud",
      category: "DevOps",
      desc: "Learn how to build and deploy applications using GitHub Actions step by step.",
      date: "Apr 25, 2024",
      read: "8 min read",
      image: "/assets/blogs/cicd-github-actions.jpg",
    },
    {
      title: "Kubernetes for Beginners: Understand the Basics",
      category: "Kubernetes",
      desc: "Break down Kubernetes core concepts in simple terms with real-life examples.",
      date: "Apr 12, 2024",
      read: "7 min read",
      image: "/assets/blogs/kubernetes-basics.jpg",
    },
    {
      title: "Building a Tech Community from Scratch",
      category: "Community",
      desc: "My learnings from building and growing tech communities.",
      date: "Mar 30, 2024",
      read: "5 min read",
      image: "/assets/blogs/community.jpg",
    },
    {
      title: "AWS Cost Optimization: Best Practices",
      category: "Cloud",
      desc: "Tips and tricks to reduce AWS costs without compromising performance.",
      date: "Mar 18, 2024",
      read: "6 min read",
      image: "/assets/blogs/aws-cost.jpg",
    },
    {
      title: "How I Grew from a Curious Learner to a Cloud Engineer",
      category: "Career",
      desc: "Lessons, habits, and mindset that helped me on my journey.",
      date: "Mar 05, 2024",
      read: "4 min read",
      image: "/assets/blogs/career-growth.jpg",
    },
  ];

  const videos = [
    {
      title: "Amazon S3 Storage Explained Simply",
      date: "May 5, 2024",
      views: "870 views",
      duration: "18:30",
      image: "/assets/videos/aws-s3.jpg",
    },
    {
      title: "CI/CD Pipeline with GitHub Actions",
      date: "Apr 28, 2024",
      views: "1.1K views",
      duration: "21:15",
      image: "/assets/videos/cicd.jpg",
    },
    {
      title: "Deploy a Web App on AWS Step by Step",
      date: "Apr 15, 2024",
      views: "920 views",
      duration: "16:40",
      image: "/assets/videos/deploy-aws.jpg",
    },
    {
      title: "Docker for Beginners in 14 Minutes",
      date: "Apr 2, 2024",
      views: "760 views",
      duration: "14:20",
      image: "/assets/videos/docker.jpg",
    },
    {
      title: "Kubernetes Pods, Services & Deployment",
      date: "Mar 22, 2024",
      views: "1.3K views",
      duration: "22:10",
      image: "/assets/videos/kubernetes.jpg",
    },
    {
      title: "Terraform Basics: Infrastructure as Code",
      date: "Mar 10, 2024",
      views: "690 views",
      duration: "18:50",
      image: "/assets/videos/terraform.jpg",
    },
  ];

  const blogCategories = ["All", "Cloud", "DevOps", "AWS", "Community", "Career", "Open Source", "Other"];
  const videoCategories = ["All Videos", "Talks & Sessions", "Tutorials", "Event Recordings", "Community", "Shorts"];

  const filteredBlogs =
    blogFilter === "All" ? blogs : blogs.filter((blog) => blog.category === blogFilter);

  return (
    <section className="relative overflow-hidden bg-[#06111f] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(37,99,235,0.2),transparent_30%),radial-gradient(circle_at_15%_45%,rgba(14,165,233,0.10),transparent_35%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 xl:grid-cols-2">
        {/* Blogs */}
        <div className="rounded-3xl border border-white/10 bg-slate-900/30 p-5 backdrop-blur-xl sm:p-8">
          <PageHeader
            icon={<BookOpen className="h-4 w-4" />}
            badge="Blogs"
            title="Thoughts, Insights &"
            marker="Lessons Learned."
            desc="Sharing knowledge, experiences, and real-world lessons from my journey in tech and community."
          />

          {/* <ImageHero /> */}

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex h-11 flex-1 items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4">
              <input
                placeholder="Search blogs..."
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-400"
              />
              <Search className="h-4 w-4 text-slate-400" />
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-slate-300">Filter by:</span>
              <select className="rounded-lg border border-white/10 bg-[#081525] px-4 py-3 text-sm text-white outline-none">
                <option>All Topics</option>
                <option>Cloud</option>
                <option>DevOps</option>
                <option>AWS</option>
              </select>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setBlogFilter(category)}
                className={`rounded-lg px-4 py-2 text-sm font-bold transition ${
                  blogFilter === category
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                    : "border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.title} blog={blog} />
            ))}
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 sm:flex-row">
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-purple-500/20 text-2xl text-purple-400">
                ✎
              </div>
              <div>
                <h3 className="font-black">Have an idea or topic you want me to write about?</h3>
                <p className="mt-1 text-sm text-slate-300">
                  Let me know! I’m always open to suggestions from the community.
                </p>
              </div>
            </div>

            <a
              href="/contact.html"
              className="rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-black"
            >
              Suggest a Topic <ArrowRight className="ml-2 inline h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Videos */}
        <div className="rounded-3xl border border-white/10 bg-slate-900/30 p-5 backdrop-blur-xl sm:p-8">
          <PageHeader
            icon={<Video className="h-4 w-4" />}
            badge="Videos"
            title="Watch, Learn &"
            marker="Get Inspired."
            desc="Sharing talks, tutorials, event sessions, and experiences through videos."
          />

          {/* <ImageHero /> */}

          <div className="mt-5 flex flex-wrap gap-2">
            {videoCategories.map((category) => (
              <button
                key={category}
                onClick={() => setVideoFilter(category)}
                className={`rounded-lg px-4 py-2 text-sm font-bold transition ${
                  videoFilter === category
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                    : "border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:grid-cols-[1.35fr_1fr]">
            <div
              className="relative min-h-[240px] bg-cover bg-center"
              style={{ backgroundImage: "url('/assets/videos/featured-video.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/20" />
              <button className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/20 backdrop-blur-md">
                <Play className="h-8 w-8 fill-white text-white" />
              </button>
              <span className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-1 text-xs">
                32:45
              </span>
            </div>

            <div className="p-6">
              <p className="mb-3 text-xs font-black text-orange-400">Featured Video</p>
              <h3 className="text-2xl font-black leading-tight">
                Building Community & Growing Together
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                My talk about the power of community and how we can grow together.
              </p>

              <div className="mt-4 flex flex-wrap gap-5 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> Nov 18, 2023
                </span>
                <span className="flex items-center gap-2">
                  <Eye className="h-4 w-4" /> 1.2K views
                </span>
              </div>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-orange-500 px-5 py-3 text-sm font-black text-orange-400"
              >
                Watch Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-7 flex items-center justify-between">
            <h3 className="text-xl font-black">Latest Videos</h3>
            <a href="#" className="text-sm font-bold text-orange-400">
              View all videos →
            </a>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {videos.map((video) => (
              <VideoCard key={video.title} video={video} />
            ))}
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 sm:flex-row">
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-red-500/20 text-red-500">
                <Youtube className="h-8 w-8 fill-red-500" />
              </div>
              <div>
                <h3 className="font-black">Don’t miss new videos!</h3>
                <p className="mt-1 text-sm text-slate-300">
                  Subscribe to my channel and stay updated.
                </p>
              </div>
            </div>

            <a
              href="#"
              className="rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-black"
            >
              Subscribe on YouTube <ArrowRight className="ml-2 inline h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const PageHeader = ({
  icon,
  badge,
  title,
  marker,
  desc,
}: {
  icon: React.ReactNode;
  badge: string;
  title: string;
  marker: string;
  desc: string;
}) => (
  <div>
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold">
      <span className="text-orange-400">{icon}</span>
      {badge}
    </div>

    <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
      {title}
    </h2>

    <h3
      className="mt-1 text-4xl text-orange-500 sm:text-5xl"
      style={{ fontFamily: "'Permanent Marker', cursive" }}
    >
      {marker}
    </h3>

    <p className="mt-5 max-w-xl leading-7 text-slate-300">{desc}</p>
  </div>
);

// const ImageHero = () => (
//   <div className="relative mt-4 flex h-52 justify-center overflow-hidden sm:h-64">
//     <div className="absolute top-5 h-56 w-56 rounded-full border border-orange-500/30 bg-orange-500/10" />
//     <img
//       src="/assets/naami-removebg01.png"
//       alt="Naami Ahmed"
//       className="relative z-10 h-full object-contain drop-shadow-[0_25px_60px_rgba(37,99,235,0.35)]"
//     />
//   </div>
// );

const BlogCard = ({
  blog,
}: {
  blog: {
    title: string;
    category: string;
    desc: string;
    date: string;
    read: string;
    image: string;
  };
}) => (
  <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-orange-500/40">
    <div
      className="h-40 bg-cover bg-center"
      style={{ backgroundImage: `url('${blog.image}')` }}
    />

    <div className="p-5">
      <span className="rounded-md bg-blue-600/80 px-3 py-1 text-xs font-black">
        {blog.category}
      </span>

      <h3 className="mt-4 text-lg font-black leading-6">{blog.title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-300">{blog.desc}</p>

      <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-400">
        <span className="flex items-center gap-1">
          <Calendar className="h-4 w-4" /> {blog.date}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-4 w-4" /> {blog.read}
        </span>
      </div>
    </div>
  </article>
);

const VideoCard = ({
  video,
}: {
  video: {
    title: string;
    date: string;
    views: string;
    duration: string;
    image: string;
  };
}) => (
  <article>
    <div
      className="relative h-32 rounded-xl border border-white/10 bg-cover bg-center"
      style={{ backgroundImage: `url('${video.image}')` }}
    >
      <span className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs">
        {video.duration}
      </span>
    </div>

    <h3 className="mt-3 text-sm font-black leading-5">{video.title}</h3>

    <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-400">
      <span className="flex items-center gap-1">
        <Calendar className="h-3 w-3" /> {video.date}
      </span>
      <span className="flex items-center gap-1">
        <Eye className="h-3 w-3" /> {video.views}
      </span>
    </div>
  </article>
);

export default BlogsVideos;