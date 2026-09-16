import { PremiumIndustryDetailPage, IndustryPageData } from "@/components/PremiumIndustryDetailPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education Digital Solutions | WebCodian",
  description: "Transforming the learning experience through intelligent Learning Management Systems and unified campus operations.",
};

const educationData: IndustryPageData = {
  id: "education",
  title: "Education",
  eyebrow: "WebCodian • Industry Solutions",
  heroDescription: "Transforming the learning experience through intelligent Learning Management Systems and unified campus operations.",
  heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  introHeading: "Technology built around modern learning.",
  introDescription: "Education is evolving faster than ever. Institutions face the dual challenge of engaging digital-native students while streamlining administrative workflows. We build unified educational platforms that connect administrators, teachers, and students in one seamless, interactive ecosystem.",
  challenges: [
    {
      id: "01",
      title: "Fragmented Systems",
      description: "Using separate platforms for attendance, exams, fees, and communication creates data silos and administrative overhead."
    },
    {
      id: "02",
      title: "Student Engagement",
      description: "Traditional passive learning tools fail to keep remote and hybrid students actively engaged in their coursework."
    },
    {
      id: "03",
      title: "Manual Administration",
      description: "Fee collection, timetable generation, and grading require massive manual effort without automation."
    },
    {
      id: "04",
      title: "Exam Integrity",
      description: "Conducting secure, large-scale online assessments requires advanced proctoring and robust infrastructure."
    }
  ],
  solutions: [
    {
      icon: "MonitorPlay",
      title: "Learning Management Systems (LMS)",
      description: "Interactive platforms for delivering courses, assignments, and multimedia content."
    },
    {
      icon: "Users",
      title: "Student & Parent Portals",
      description: "Centralized dashboards for tracking academic progress, attendance, and fee payments."
    },
    {
      icon: "FileText",
      title: "Online Examination Portals",
      description: "Secure, scalable testing environments with automated grading and result generation."
    },
    {
      icon: "Settings",
      title: "Institute Management Systems",
      description: "Comprehensive ERPs for managing HR, payroll, admissions, and campus resources."
    }
  ],
  featuredVisual: {
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    overlayText: "From student engagement to campus administration."
  },
  whatWeCanBuild: [
    "Learning Management Systems (LMS)",
    "Institute ERP Software",
    "Online Course Selling Platforms",
    "Computer-Based Testing (CBT) Systems",
    "Alumni Network Platforms",
    "Virtual Classroom Applications"
  ],
  useCases: [
    {
      title: "Academic Delivery",
      items: ["Video lectures & streaming", "Interactive assignments", "Peer-to-peer discussions", "Digital library access"]
    },
    {
      title: "Campus Operations",
      items: ["Automated fee collection", "Digital admissions", "Timetable scheduling", "Staff & faculty management"]
    }
  ],
  technologies: ["React", "Node.js", "Python", "AWS", "Flutter", "PostgreSQL", "WebRTC"]
};

export default function EducationIndustryPage() {
  return <PremiumIndustryDetailPage data={educationData} />;
}
