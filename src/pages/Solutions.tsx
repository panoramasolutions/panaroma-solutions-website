import Project from '../components/Project'; // adjust if needed
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

import { useState } from 'react';
import { Link } from 'react-router-dom';
import solutionsData from '../assets/solutions.json';


// ✅ Image Map
const imageMap: Record<string, { png: string; webp?: string; avif?: string }> = {
  'solution1.png': { png: solution1Png, webp: solution1Webp, avif: solution1Avif },
  'solution2.png': { png: solution2Png, webp: solution2Webp, avif: solution2Avif },
  'solution3.png': { png: solution3Png, webp: solution3Webp, avif: solution3Avif },
  'solution4.png': { png: solution4Png, webp: solution4Webp, avif: solution4Avif },
  'solution5.png': { png: solution5Png, webp: solution5Webp, avif: solution5Avif },
  'solution6.png': { png: solution6Png, webp: solution6Webp, avif: solution6Avif },
};


// ✅ Modal Props
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  heading: string;
  subheading: string;
  content: string;
}


// ✅ Modal Component
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
          className="absolute top-4 right-4 text-white hover:text-gray-300 cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {heading}
        </h2>

        <h3 className="text-white font-semibold mb-4">
          {subheading}
        </h3>

        <div
          className="text-sm md:text-base text-white leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};


// ✅ MAIN COMPONENT
export default function Solutions() {

  const Projects = solutionsData.map((item: any, index: number) => {
    const assets = imageMap[item.image] ?? imageMap['solution1.png'];

    return {
      title: item.title,
      description: item.description.short,
      fullDescription: item.description.full,
      solution: item.solution.short,
      fullSolution: item.solution.full,
      clientType: item.client_type,

      results: {
        deliveries: item.results.deliveries,
        testimonials: item.results.testimonials,

        deliveriesCount: Number(item.results.deliveries.replace(/\D/g, "")),
        testimonialsCount: Number(item.results.testimonials.replace(/\D/g, "")),
      },

      img: assets.avif ?? assets.webp ?? assets.png,

      sources: {
        avif: assets.avif,
        webp: assets.webp,
      },

      alignment: item.alignment,
      tagline: item.tagline,
      priority: index === 0,
    };
  });


  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    heading: string;
    subheading: string;
    content: string;
  }>({
    isOpen: false,
    heading: '',
    subheading: '',
    content: '',
  });

  const closeModal = () => {
    setModalData({
      isOpen: false,
      heading: '',
      subheading: '',
      content: '',
    });
  };


  return (
    <div className="min-h-dvh w-full bg-black">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
        <div className="px-6">
          <Link to="/">
            <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
          </Link>
        </div>
      </header>


      {/* CONTENT */}
      <div className="px-6 pt-28 pb-20">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-gray-200 font-semibold">
            Custom IT Solutions
          </h1>

          <p className="text-gray-400 mt-3">
            Some of the decorated Solutions we have delivered to clients
          </p>
        </div>


        {/* PROJECT LIST */}
        <div className="flex flex-col gap-16">
          {Projects.map((prjDetails, index) => (
            <Project
              key={index}
              details={prjDetails}
              setModalData={setModalData}
            />
          ))}
        </div>

      </div>


      {/* MODAL */}
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
