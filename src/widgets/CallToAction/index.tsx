import { FC } from 'react';
import { useRouter } from 'next/navigation';


import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props {}

const Index: FC<Props> = () => {
  const router = useRouter();



  return (
    <SectionOpacity classes="flex flex-col justify-center h-screen">
      <div className=" mx-auto flex w-full max-w-[60vw] md:max-w-[90%] flex-1 flex-col items-center justify-center text-center">
        <h3 className="text-[4vw] md:text-[8vw] font-medium">Get in Touch</h3>
        <p className="mt-[0.6vw] text-[1.7vw] md:text-[3.2vw] font-normal text-gray-300 md:leading-[1.3]">
          Need expert web development, SEO, or IT solutions? Send us a message, and we’ll get back to you soon!
        </p>
    
      </div>

      <footer className="flex justify-between border-t border-t-gray-800 px-[5vw] py-[1.8vw] text-[1.6vw] md:text-[2vw] md:py-[2.4vw] md:px-[2vw]">
        <div>© 2025 Webelo. All rights reserved.</div>
        <ul className="flex space-x-[3vw]">
  <li>
    <a href="https://wa.me/923010209887" target="_blank" rel="noopener noreferrer">
      +92 3010209887
    </a>
  </li>
  <li>
    <a href="mailto:arsalanaftab191@gmail.com">
      arsalanaftab191@gmail.com
    </a>
  </li>
  <li>
    <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
      Facebook
    </a>
  </li>
  <li>
    <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
      LinkedIn
    </a>
  </li>
</ul>

      </footer>
    </SectionOpacity>
  );
};

export default Index;
