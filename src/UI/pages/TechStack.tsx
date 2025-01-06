import { motion } from 'framer-motion';

const TechLogo = ({ src, alt }: { src: string; alt: string }) => (
    <img 
      src={src} 
      alt={alt} 
      className="h-14 w-14 transition-all duration-300 hover:scale-150 hover:shadow-lg" 
    />
  );
  
  const LogoSection = () => (
    <div className="flex gap-12 items-center shrink-0">
      <TechLogo src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="Redux" />
      <TechLogo src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML" />
      <TechLogo src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS" />
      <TechLogo src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" />
      <TechLogo src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" />
      <TechLogo src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" />
      <TechLogo src="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png" alt="Next.js" />
      <TechLogo src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind" />
      <TechLogo src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" />
      <TechLogo src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
      <TechLogo src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
      <TechLogo src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" />
      <TechLogo src="https://static.djangoproject.com/img/logos/django-logo-negative.svg" alt="Django" />
      <TechLogo src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" alt="Docker" />
      <TechLogo src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" />
      <TechLogo src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="Git" />
    </div>
  );
  
  export const TechStack = () => {
    return (
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-full overflow-hidden py-4 select-none relative"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent 100%)'
          }}
        >
          <div className="flex animate-[scroll_20s_linear_infinite] hover:[animation-play-state:paused]">
            <LogoSection />
            <LogoSection />
          </div>
        </motion.div>
      </div>
    );
  };