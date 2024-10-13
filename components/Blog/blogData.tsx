import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "ADHD in Children: A Parent's Guide to Support",
    paragraph:
      "Explore resources and guidance for parents navigating the challenges of raising a child with ADHD.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Emily Carter",
      image: "/images/blog/author-01.png",
      designation: "Parenting Coach",
    },
    tags: ["ADHD"],
    publishDate: "Oct 15, 2023",
  },
  {
    id: 2,
    title: "Early Intervention in Autism: Why It Matters",
    paragraph:
      "Delve into the importance of early intervention and available options for supporting individuals with autism.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Amanda Miller",
      image: "/images/blog/author-02.png",
      designation: " Autism Advocate",
    },
    tags: ["Autism"],
    publishDate: "Oct 5, 2023",
  },
  {
    id: 3,
    title: "Decoding Dyslexia: Unveiling Causes and Symptoms.",
    paragraph:
      "Explore the underlying causes and symptoms of dyslexia, shedding light on this often-misunderstood learning difference.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Dr. Rebecca Simmons",
      image: "/images/blog/author-03.png",
      designation: "Educational Psychologist",
    },
    tags: ["Dyslexia"],
    publishDate: "Nov 7, 2023",
  },
];
export default blogData;
