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
  ExternalLink,
} from "lucide-react";

const YOUTUBE_CHANNEL_URL = "https://youtube.com/@NaamiAhmed-27";

const BlogsVideos: React.FC = () => {
  const [blogFilter, setBlogFilter] = useState("All");
  const [videoFilter, setVideoFilter] = useState("All Videos");

  const blogs = [
    {
      title: "Automating AWS EC2 Through a Simple Website",
      category: "AWS",
      desc: "A practical guide for beginners to start their cloud journey with AWS.",
      date: "May 10, 2024",
      read: "6 min read",
      image: "/assets/blogs/aws_ec2_control.webp",
      url: "https://naamiahmed.medium.com/automating-aws-ec2-through-a-simple-website-b8bcacef0987",
    },
    {
      title: "From 1000+MB to Lean & Production Ready: How We Optimized Our Docker Image",
      category: "DevOps",
      desc: "Learn how to build and deploy applications using GitHub Actions step by step.",
      date: "Apr 25, 2024",
      read: "8 min read",
      image: "/assets/blogs/docker_optmz.webp",
      url: "https://naamiahmed.medium.com/from-1000-mb-to-lean-production-ready-how-we-optimized-our-docker-image-83d074c48cc2",
    },
    {
      title: "How to Prevent Unnecessary Charges on AWS: Free Billing Alerts for Beginners",
      category: "AWS",
      desc: "In this article, we will guide you step by step to set up free billing alerts, understand usage limits, and stay safe while learning AWS.",
      date: "Nov 14, 2025",
      read: "3 min read",
      image: "/assets/blogs/aws_bill.webp",
      url: "https://naamiahmed.medium.com/how-to-prevent-unnecessary-charges-on-aws-free-billing-alerts-for-beginners-1c7aea1866c4",
    },
    {
      title: "Migrating a Git Project to a New Repository Without Affecting the Live One",
      category: "DevOps",
      desc: "Safely migrate code to a new GitHub repository",
      date: "Jul 08, 2025",
      read: "3 min read",
      image: "/assets/blogs/git_mig.webp",
      url: "https://naamiahmed.medium.com/migrating-a-git-project-to-a-new-repository-without-affecting-the-live-one-86b6e0faa3d5",
    },
    {
      title: "Nginx Configuration on AWS EC2 Deployment",
      category: "DevOps",
      desc: "This guide explains how to configure an EC2 instance, install Nginx, and set up auto-deployment using GitHub Actions.",
      date: "Apr 13, 2025",
      read: "3 min read",
      image: "/assets/blogs/nginx-conf.webp",
      url: "https://naamiahmed.medium.com/nginx-configuration-on-aws-ec2-deployment-669288887614",
    },
    // {
    //   title: "How I Grew from a Curious Learner to a Cloud Engineer",
    //   category: "Career",
    //   desc: "Lessons, habits, and mindset that helped me on my journey.",
    //   date: "Mar 05, 2024",
    //   read: "4 min read",
    //   image: "/assets/blogs/career-growth.jpg",
    //   url: "/blogs/cloud-engineer-journey",
    // },
  ];

  const videos = [
    {
      title: "How to Host a Static Website on AWS S3",
      date: "July 1, 2025",
      views: "870 views",
      duration: "12:55",
      image: "/assets/videos/s3-web-host.jpg",
      url: "https://youtu.be/MUvXsqk7Ywg?si=h2HKtg0FJ7B3V18f",
    },
    {
      title: "Automate AWS RDS with Lambda, CloudWatch & Event Bridge",
      date: "Apr 28, 2025",
      views: "1.1K views",
      duration: "03:49",
      image: "/assets/videos/aws-rds.webp",
      url:"https://youtu.be/8VwWFzcItMY?si=0_k8Tfu30rdI7Jvp",
    },
    {
      title: "Amazon Q Business Explained | Powerful AI Tool for Companies",
      date: "Dec 15, 2025",
      views: "920 views",
      duration: "16:40",
      image: "/assets/videos/aws-q.jpg",
      url: "https://youtu.be/Yxty2icohIs?si=0NEax2Kib14ZRVsr",
    },
    {
      title: " AWS Serverless Technologies with Madhura Jayashanka",
      date: "Apr 2, 2024",
      views: "760 views",
      duration: "14:20",
      image: "/assets/videos/aws-serverless-video.png",
      url: "https://youtu.be/e7ri9DD1pBQ?si=vptLyjl9andxQJmI",
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

          <div className="mt-6 flex h-11 items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4">
            <input
              placeholder="Search blogs..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-400"
            />
            <Search className="h-4 w-4 text-slate-400" />
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

          {/* Featured Video */}
          <a
            href="https://youtu.be/VbGNlV9Mqog"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-orange-500/40 lg:grid-cols-[1.35fr_1fr]"
          >
            <div
              className="relative min-h-[240px] bg-cover bg-center"
              style={{ backgroundImage: "url('/assets/videos/community-video.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/20 backdrop-blur-md">
                <Play className="h-8 w-8 fill-white text-white" />
              </div>
              <span className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-1 text-xs">
                05:10
              </span>
            </div>

            <div className="p-6">
              <p className="mb-3 text-xs font-black text-orange-400">Featured Video</p>
              <h3 className="text-2xl font-black leading-tight">
                How to Apply for AWS Cloud Club Captain
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                I guide you step-by-step on how to apply for the AWS Cloud Club Captain.
Learn about the application components, written tips, video submission, and faculty support.
              </p>

              <div className="mt-4 flex flex-wrap gap-5 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> Nov 18, 2025
                </span>
                <span className="flex items-center gap-2">
                  <Eye className="h-4 w-4" /> 1.2K views
                </span>
              </div>

              <span className="mt-6 inline-flex items-center gap-2 rounded-lg border border-orange-500 px-5 py-3 text-sm font-black text-orange-400">
                Watch Now <ExternalLink className="h-4 w-4" />
              </span>
            </div>
          </a>

          <div className="mt-7 flex items-center justify-between">
            <h3 className="text-xl font-black">Latest Videos</h3>
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-orange-400"
            >
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
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-black"
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

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
    url: string;
  };
}) => (
  <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-orange-500/40">
    <a href={blog.url}>
      <div
        className="h-40 bg-cover bg-center"
        style={{ backgroundImage: `url('${blog.image}')` }}
      />
    </a>

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

      <a
        href={blog.url}
        className="mt-5 inline-flex items-center gap-2 text-sm font-black text-orange-400"
      >
        Read Blog <ArrowRight className="h-4 w-4" />
      </a>
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
    url: string;
  };
}) => (
  <a
    href={video.url}
    target="_blank"
    rel="noopener noreferrer"
    className="block transition hover:-translate-y-1"
  >
    <div
      className="relative h-32 rounded-xl border border-white/10 bg-cover bg-center"
      style={{ backgroundImage: `url('${video.image}')` }}
    >
      <div className="absolute inset-0 rounded-xl bg-black/10" />
      <div className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/20 backdrop-blur-md">
        <Play className="h-5 w-5 fill-white text-white" />
      </div>
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
  </a>
);

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

export default BlogsVideos;