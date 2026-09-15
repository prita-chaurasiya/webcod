export interface Course {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  duration: string;
  level: string;
  mode: string;
  image: string;
  featured?: boolean;
}

export const courses: Course[] = [
  {
    id: "adca",
    title: "ADCA (Advanced Diploma in Computer Applications)",
    category: "Professional Courses",
    shortDesc: "Comprehensive course covering computer basics, MS Office, Tally, GST, web basics, and graphic design fundamentals.",
    duration: "12 Months",
    level: "Beginner to Advanced",
    mode: "Offline / Online",
    image: "/images/courses/adca.jpg",
    featured: true
  },
  {
    id: "tally-prime",
    title: "Tally Prime with GST",
    category: "Accounting",
    shortDesc: "Master computerized accounting, payroll management, and GST filing with practical business scenarios.",
    duration: "3 Months",
    level: "Intermediate",
    mode: "Offline / Online",
    image: "/images/courses/tally.jpg",
    featured: true
  },
  {
    id: "advanced-excel",
    title: "Advanced Excel",
    category: "Accounting",
    shortDesc: "Learn advanced formulas, data analysis, pivot tables, and macros to boost productivity.",
    duration: "2 Months",
    level: "Intermediate",
    mode: "Offline / Online",
    image: "/images/courses/excel.jpg",
    featured: true
  },
  {
    id: "web-development",
    title: "Web Development Training",
    category: "Web Development",
    shortDesc: "Learn HTML, CSS, JavaScript, Bootstrap, and React.js to build responsive, modern websites.",
    duration: "4 Months",
    level: "Beginner to Intermediate",
    mode: "Offline / Online",
    image: "/images/courses/web-dev.jpg",
    featured: true
  },
  {
    id: "full-stack-development",
    title: "Full Stack Development (MERN)",
    category: "Advanced / Career Programs",
    shortDesc: "Become a Full Stack Developer. Master MongoDB, Express, React, Node.js, and API development.",
    duration: "6 Months",
    level: "Advanced",
    mode: "Offline / Online",
    image: "/images/courses/full-stack.jpg",
    featured: true
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Mastery",
    category: "Digital Marketing",
    shortDesc: "Master SEO, Google Ads, Social Media Marketing, and Google Analytics to drive business growth.",
    duration: "3 Months",
    level: "Beginner to Advanced",
    mode: "Offline / Online",
    image: "/images/courses/marketing.jpg",
    featured: true
  },
  {
    id: "graphic-design",
    title: "Graphic Design (Photoshop & Illustrator)",
    category: "Design & Creative",
    shortDesc: "Learn to create stunning visual identities, UI/UX designs, and brand assets.",
    duration: "3 Months",
    level: "Beginner",
    mode: "Offline",
    image: "/images/courses/graphic-design.jpg",
    featured: true
  },
  {
    id: "python",
    title: "Python Programming",
    category: "Programming",
    shortDesc: "Start coding with Python. Learn syntax, logic, algorithms, and build your first application.",
    duration: "2 Months",
    level: "Beginner",
    mode: "Offline / Online",
    image: "/images/courses/python.jpg",
    featured: true
  },
  {
    id: "ai-training",
    title: "Generative AI & Prompt Engineering",
    category: "AI & Machine Learning",
    shortDesc: "Learn AI fundamentals, ChatGPT, Midjourney, and prompt engineering to supercharge your workflow.",
    duration: "2 Months",
    level: "Beginner to Intermediate",
    mode: "Online",
    image: "/images/courses/ai.jpg",
    featured: false
  },
  {
    id: "ccc",
    title: "Course on Computer Concepts (CCC)",
    category: "Professional Courses",
    shortDesc: "Essential digital literacy and computer basics for competitive exams and government jobs.",
    duration: "3 Months",
    level: "Beginner",
    mode: "Offline",
    image: "/images/courses/ccc.jpg",
    featured: false
  }
];

export const courseCategories = [
  "All",
  "Basic Computer",
  "Accounting",
  "Programming",
  "Web Development",
  "Digital Marketing",
  "Design & Creative",
  "AI & Machine Learning",
  "Professional Courses",
  "Advanced / Career Programs"
];
