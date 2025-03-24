import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/UI/shadcn/ui/dialog';
import { Button } from '@/UI/shadcn/ui/button';
import { Input } from '@/UI/shadcn/ui/input';
import { Label } from '@/UI/shadcn/ui/label';
import { Textarea } from '@/UI/shadcn/ui/textarea';
import { supabase } from '@/lib/supabase';
import { Loader2, } from 'lucide-react';
import { toast } from 'sonner';

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

export const JobApplicationModal = ({ isOpen, onClose, jobTitle }: JobApplicationModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolio: '',
    coverLetter: '',
  });
  const [resume, setResume] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Upload resume to Supabase Storage
      let resumeUrl = '';
      if (resume) {
        const fileExt = resume.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `resumes/${fileName}`;

        const { error: uploadError, data } = await supabase.storage
          .from('job-applications')
          .upload(filePath, resume);

        if (uploadError) throw uploadError;
        resumeUrl = data.path;
      }

      // Insert application data into Supabase
      const { error: insertError } = await supabase
        .from('job_applications')
        .insert([
          {
            job_title: jobTitle,
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            portfolio: formData.portfolio,
            cover_letter: formData.coverLetter,
            resume_url: resumeUrl,
            status: 'pending',
          },
        ]);

      if (insertError) throw insertError;

      toast.success('Application submitted successfully!');
      onClose();
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        portfolio: '',
        coverLetter: '',
      });
      setResume(null);
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Apply for {jobTitle}</DialogTitle>
          <DialogDescription>
            Please fill out the form below to submit your application.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="portfolio">Portfolio URL (Optional)</Label>
            <Input
              id="portfolio"
              type="url"
              value={formData.portfolio}
              onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="resume">Resume (PDF)</Label>
            <div className="flex items-center gap-2">
              <Input
                id="resume"
                type="file"
                accept=".pdf"
                onChange={(e) => setResume(e.target.files?.[0] || null)}
                required
              />
              {resume && (
                <span className="text-sm text-muted-foreground">
                  {resume.name}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="coverLetter">Cover Letter</Label>
            <Textarea
              id="coverLetter"
              value={formData.coverLetter}
              onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
              required
              className="min-h-[150px]"
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Application'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}; 