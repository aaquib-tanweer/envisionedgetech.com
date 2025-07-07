import { companyDataConstants } from '@/constants/data/companyData.constant';
import { Input } from '@/UI/shadcn/ui/input';
import { Button } from '@/UI/shadcn/ui/button';

export const Contact = () => {
  return (
    <div className="relative py-12">
      <div className="flex flex-col justify-center items-center gap-6 px-4 min-h-[300px]">
        <h1 className="lg:text-5xl text-xl font-bold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-electric-400 dark:via-electric-500 dark:to-neon-400 bg-clip-text text-transparent">
          Let's <span className="underline">create</span> something together.
        </h1>
        <div className="flex gap-2 max-w-md w-full">
          <Input 
            placeholder={companyDataConstants.emails[0] || "info@envisionedgetech.com"} 
            className="border-blue-500/20 dark:border-electric-500/20 bg-white/80 dark:bg-white/10 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" 
          />
          <a href={`mailto:${companyDataConstants.emails[0]}`}>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-electric-600 dark:to-electric-500 hover:from-blue-700 hover:to-purple-700 dark:hover:from-electric-500 dark:hover:to-neon-500 text-white shadow-lg transition-all duration-300">
              Send Email
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
