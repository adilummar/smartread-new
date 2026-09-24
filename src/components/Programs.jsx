import React, { useState } from 'react';
import './Programs.css';
import { ArrowRight, ArrowLeft, Bot, Star, Baby, BookOpen, Compass, ArrowRightCircle } from 'lucide-react';

const hubs = [
  {
    id: 'dreamers',
    title: "Little Dreamers",
    icon: <Baby size={20} />,
    color: "var(--kidza-orange)",
    bgColor: "var(--kidza-yellow-light)",
    courses: [
      {
        id: 'ld-1',
        title: "Early Kid Foundation Program",
        desc: "A nurturing early childhood program focused on building strong foundations in learning, creativity, communication, and social development.",
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80"
      },
      {
        id: 'ld-2',
        title: "Arabic Explorers",
        age: "5+",
        desc: "A structured Arabic language program designed to build strong speaking, reading, and writing skills, helping students communicate confidently and connect with the language and culture.",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80"
      }
    ]
  },
  {
    id: 'leaders',
    title: "Future Leaders",
    icon: <Star size={20} />,
    color: "var(--kidza-pink)",
    bgColor: "#E0F8F6",
    courses: [
      {
        id: 'fl-1',
        title: "Mind & Emotion: Emotional Intelligence Studio",
        desc: "Helps students understand emotions, build self-confidence, improve relationships, and develop positive thinking through interactive activities.",
        image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80"
      },
      {
        id: 'fl-2',
        title: "Future Ready: Careers, Skills & AI Awareness",
        desc: "Introduces students to modern career opportunities, essential life skills, and AI basics — exploring creativity, digital awareness, and teamwork.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80"
      },
      {
        id: 'fl-3',
        title: "Spoken Arabic",
        desc: "An engaging language program developing practical Arabic speaking and communication skills through conversations and vocabulary building.",
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80"
      },
      {
        id: 'fl-4',
        title: "Speak to Lead: Communication & Confidence Lab",
        desc: "A personality development program improving public speaking, presentation skills, leadership, and self-confidence through storytelling and speeches.",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80"
      }
    ]
  },
  {
    id: 'eduhub',
    title: "EduHub",
    icon: <BookOpen size={20} />,
    color: "var(--kidza-green)",
    bgColor: "#F0FDF4",
    courses: [
      {
        id: 'eh-1',
        title: "Pre-Primary Support Program",
        age: "Pre-KG – KG2",
        desc: "A nurturing academic support program for early learners to build strong foundations in language, numbers, motor skills, and early reading readiness.",
        image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80"
      },
      {
        id: 'eh-2',
        title: "Grade 1–4 Support Program",
        age: "Grade 1 – Grade 4",
        desc: "A comprehensive academic support program for young learners to strengthen core skills in language, mathematics, reading, writing, and science.",
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80"
      }
    ]
  },
  {
    id: 'moral',
    title: "Moral Studies",
    icon: <Compass size={20} />,
    color: "var(--kidza-blue)",
    bgColor: "#EFF6FF",
    courses: [
      {
        id: 'ms-1',
        title: "Values & Life Skills Program",
        desc: "A structured moral education program teaching students kindness, honesty, empathy, gratitude, and essential life values.",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80"
      },
      {
        id: 'ms-2',
        title: "Character Development Program",
        desc: "A values-based character development program focused on good manners, discipline, respect, honesty, and responsibility.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
      }
    ]
  },
  {
    id: 'ai',
    title: "AI & Future Intelligence",
    icon: <Bot size={20} />,
    color: "var(--kidza-purple)",
    bgColor: "var(--kidza-purple-light)",
    courses: [
      {
        id: 'ai-1',
        title: "AI & Robotics for Kids",
        age: "Age 7–12",
        desc: "A fun, interactive beginner program where children learn AI, coding, and robotics through hands-on activities. Create Scratch games, build robots, and train simple AI models.",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&q=80"
      },
      {
        id: 'ai-2',
        title: "AI for Working Professionals",
        age: "18+ Years",
        desc: "A practical, career-focused AI program for professionals, graduates, and entrepreneurs. Learn AI tools, prompt engineering, automation, data analysis, and AI application development.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80"
      }
    ]
  }
];

const Programs = () => {
  const [activeTab, setActiveTab] = useState(hubs[0].id);

  const currentHub = hubs.find(h => h.id === activeTab);

  return (
    <section className="programs-section" id="courses">
      <div className="programs-container">
        <div className="section-header text-center">
          <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <span className="decorative-arrow"><ArrowRight size={32} strokeWidth={3} /></span> Our Programs <span className="decorative-arrow"><ArrowLeft size={32} strokeWidth={3} /></span>
          </h2>
          <p className="section-text mx-auto">
            Each hub is thoughtfully designed to unlock a different dimension of your child's potential.
          </p>
        </div>

        <div className="hub-tabs-container">
          {hubs.map((hub) => (
            <button 
              key={hub.id} 
              className={`hub-tab-btn ${activeTab === hub.id ? 'active' : ''}`}
              onClick={(e) => {
                setActiveTab(hub.id);
                e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
              }}
              style={{
                backgroundColor: activeTab === hub.id ? hub.color : 'transparent',
                borderColor: activeTab === hub.id ? hub.color : '#E5E7EB',
                color: activeTab === hub.id ? 'white' : 'var(--kidza-text-muted)'
              }}
            >
              <span className="tab-icon" style={{ color: activeTab === hub.id ? 'white' : hub.color }}>{hub.icon}</span>
              {hub.title}
            </button>
          ))}
        </div>

        <div className="courses-grid" key={activeTab}>
          {currentHub.courses.map((course) => (
            <div className="detailed-course-card" key={course.id}>
              <div className="course-image-wrapper">
                <img src={course.image} alt={course.title} className="course-image" />
                {course.age && <div className="course-age-badge" style={{color: currentHub.color}}>{course.age}</div>}
              </div>
              <div className="course-content">
                <h3 className="course-title" style={{color: currentHub.color}}>{course.title}</h3>
                <p className="course-desc">{course.desc}</p>
                <a href="#admission" className="course-enroll-btn" style={{backgroundColor: currentHub.bgColor, color: currentHub.color}}>
                  Enroll Now <ArrowRightCircle size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Programs;
