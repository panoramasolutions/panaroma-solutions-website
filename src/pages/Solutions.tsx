import Project from '@/components/Project';
import solution1Png from '../assets/solutions/solution1.png';
import solution1Webp from '../assets/solutions/solution1.webp';
import solution1Avif from '../assets/solutions/solution1.avif';
import solution2Png from '../assets/solutions/solution2.png';
import solution2Webp from '../assets/solutions/solution2.webp';
import solution2Avif from '../assets/solutions/solution2.avif';
import solution3Png from '../assets/solutions/solution3.png';
import solution3Webp from '../assets/solutions/solution3.webp';
import solution3Avif from '../assets/solutions/solution3.avif';
import solution4Png from '../assets/solutions/solution4.png';
import solution4Webp from '../assets/solutions/solution4.webp';
import solution4Avif from '../assets/solutions/solution4.avif';
import solution5Png from '../assets/solutions/solution5.png';
import solution5Webp from '../assets/solutions/solution5.webp';
import solution5Avif from '../assets/solutions/solution5.avif';
import solution6Png from '../assets/solutions/solution6.png';
import solution6Webp from '../assets/solutions/solution6.webp';
import solution6Avif from '../assets/solutions/solution6.avif';
import logo from '../assets/logo.svg';
// import AnimatedHeading from '@/components/AnimatedHeading';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import solutionsData from '../assets/solutions.json';


const imageMap: Record<string, { png: string; webp?: string; avif?: string }> = {
  'solution1.png': { png: solution1Png, webp: solution1Webp, avif: solution1Avif },
  'solution2.png': { png: solution2Png, webp: solution2Webp, avif: solution2Avif },
  'solution3.png': { png: solution3Png, webp: solution3Webp, avif: solution3Avif },
  'solution4.png': { png: solution4Png, webp: solution4Webp, avif: solution4Avif },
  'solution5.png': { png: solution5Png, webp: solution5Webp, avif: solution5Avif },
  'solution6.png': { png: solution6Png, webp: solution6Webp, avif: solution6Avif },
};


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  heading: string;
  subheading: string;
  content: string;
}

// Modal Component
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, heading, subheading, content }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-para-heading-color rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 md:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors cursor-pointer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-[0.07em] mb-6">
          {heading}
        </h2>
        <h3 className="font-bold text-white tracking-[0.07em] mb-6">
          {subheading}
        </h3>

        <div
          className="text-sm md:text-base font-light text-white leading-relaxed tracking-[0.07em] modal-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};


export default function Solutions() {
  // Resolve image per solution from data; fallback to solution1 if missing.
  const Projects = solutionsData.map((item, index) => {
    const assets = imageMap[item.image] ?? imageMap['solution1.png'];

    return {
    title: item.title,
    description: item.description.short,
    fullDescription: item.description.full,
    solution: item.solution.short,
    fullSolution: item.solution.full,
    clientType: item.client_type,
    results: {
      deliveries: '5+',
      testimonials: '48'
    },
    // Prefer modern formats; PNG only acts as a legacy fallback.
    img: assets.avif ?? assets.webp ?? assets.png,
    sources: {
      avif: assets.avif,
      webp: assets.webp,
    },
    alignment: item.alignment,
    tagline: item.tagline,
    priority: index === 0
    };
  });

  const [modalData, setModalData] = useState({ isOpen: false, heading: '', subheading: '', content: '' });
  const closeModal = () => {
    setModalData({ isOpen: false, heading: '', subheading: '', content: '' });
  };

  return (
    <div
      className="min-h-dvh w-full"
      style={{
        background: 'radial-gradient(91.13% 65.07% at 100% 0%, #000 0%, #000202 100%)'
      }}
    >
      {/* Header Bar with Logo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
        <div className="container-fluid mx-auto px-4 md:px-6">
          <div className="flex items-center h-[80px] md:h-auto py-2 md:py-0">
            <Link to="/" className="flex-shrink-0">
              <img
                src={logo}
                alt="Panorama Logo"
                className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] object-contain"
              />
            </Link>
          </div>
        </div>
      </header>

      <div className="container-fluid mx-auto px-6 md:px-8 lg:px-16 xl:px-18 pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-20 lg:pb-32">
        {/* Header Section */}
        <header className="flex flex-col items-center gap-3 mb-12 md:mb-14 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-[#D9D9D9] text-center leading-tight">
            Custom IT Solutions
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#9C9C9C] text-center font-medium max-w-2xl">
            Some of the decorated Solutions we have delivered to clients
          </p>
        </header>

        <div className="flex flex-col gap-12 md:gap-12 lg:gap-16">
          {Projects.map((prjDetails, index) => (
            <Project key={index} details={prjDetails} setModalData={setModalData} />
          ))}
        </div>
      </div>
      <Modal
        isOpen={modalData.isOpen}
        onClose={closeModal}
        heading={modalData.heading}
        subheading={modalData.subheading}
        content={modalData.content}
      />
    </div>
  );
}
