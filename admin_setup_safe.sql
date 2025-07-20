-- Safe Admin Dashboard Setup SQL Commands
-- This script checks for existing policies before creating them

-- 1. Create profiles table if it doesn't exist
CREATE TABLE IF NOT EXISTS profiles (
    id UUID REFERENCES auth.users(id) PRIMARY KEY,
    email TEXT,
    is_admin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles (only if they don't exist)
DO $$
BEGIN
    -- Check if policy exists before creating
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'profiles' 
        AND policyname = 'Users can view own profile'
    ) THEN
        CREATE POLICY "Users can view own profile" ON profiles
            FOR SELECT USING (auth.uid() = id);
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'profiles' 
        AND policyname = 'Users can update own profile'
    ) THEN
        CREATE POLICY "Users can update own profile" ON profiles
            FOR UPDATE USING (auth.uid() = id);
    END IF;
END $$;

-- 2. Create contact_messages table if it doesn't exist
CREATE TABLE IF NOT EXISTS contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    archived BOOLEAN DEFAULT FALSE
);

-- Enable RLS on contact_messages
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies for contact_messages (only if they don't exist)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'contact_messages' 
        AND policyname = 'Allow public to insert contact messages'
    ) THEN
        CREATE POLICY "Allow public to insert contact messages" ON contact_messages
            FOR INSERT WITH CHECK (true);
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'contact_messages' 
        AND policyname = 'Allow admins to view all contact messages'
    ) THEN
        CREATE POLICY "Allow admins to view all contact messages" ON contact_messages
            FOR SELECT USING (
                EXISTS (
                    SELECT 1 FROM profiles 
                    WHERE profiles.id = auth.uid() 
                    AND profiles.is_admin = true
                )
            );
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'contact_messages' 
        AND policyname = 'Allow admins to update contact messages'
    ) THEN
        CREATE POLICY "Allow admins to update contact messages" ON contact_messages
            FOR UPDATE USING (
                EXISTS (
                    SELECT 1 FROM profiles 
                    WHERE profiles.id = auth.uid() 
                    AND profiles.is_admin = true
                )
            );
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'contact_messages' 
        AND policyname = 'Allow admins to delete contact messages'
    ) THEN
        CREATE POLICY "Allow admins to delete contact messages" ON contact_messages
            FOR DELETE USING (
                EXISTS (
                    SELECT 1 FROM profiles 
                    WHERE profiles.id = auth.uid() 
                    AND profiles.is_admin = true
                )
            );
    END IF;
END $$;

-- 3. Update job_applications table to add status column if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'job_applications' 
        AND column_name = 'status'
    ) THEN
        ALTER TABLE job_applications ADD COLUMN status TEXT DEFAULT 'pending';
    END IF;
END $$;

-- Enable RLS on job_applications
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Create policies for job_applications (only if they don't exist)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'job_applications' 
        AND policyname = 'Allow public to insert job applications'
    ) THEN
        CREATE POLICY "Allow public to insert job applications" ON job_applications
            FOR INSERT WITH CHECK (true);
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'job_applications' 
        AND policyname = 'Allow admins to view all job applications'
    ) THEN
        CREATE POLICY "Allow admins to view all job applications" ON job_applications
            FOR SELECT USING (
                EXISTS (
                    SELECT 1 FROM profiles 
                    WHERE profiles.id = auth.uid() 
                    AND profiles.is_admin = true
                )
            );
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'job_applications' 
        AND policyname = 'Allow admins to update job applications'
    ) THEN
        CREATE POLICY "Allow admins to update job applications" ON job_applications
            FOR UPDATE USING (
                EXISTS (
                    SELECT 1 FROM profiles 
                    WHERE profiles.id = auth.uid() 
                    AND profiles.is_admin = true
                )
            );
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'job_applications' 
        AND policyname = 'Allow admins to delete job applications'
    ) THEN
        CREATE POLICY "Allow admins to delete job applications" ON job_applications
            FOR DELETE USING (
                EXISTS (
                    SELECT 1 FROM profiles 
                    WHERE profiles.id = auth.uid() 
                    AND profiles.is_admin = true
                )
            );
    END IF;
END $$;

-- 4. Update blog_comments table to add status column if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'blog_comments' 
        AND column_name = 'status'
    ) THEN
        ALTER TABLE blog_comments ADD COLUMN status TEXT DEFAULT 'pending';
    END IF;
END $$;

-- Enable RLS on blog_comments
ALTER TABLE blog_comments ENABLE ROW LEVEL SECURITY;

-- Create policies for blog_comments (only if they don't exist)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'blog_comments' 
        AND policyname = 'Allow public to insert blog comments'
    ) THEN
        CREATE POLICY "Allow public to insert blog comments" ON blog_comments
            FOR INSERT WITH CHECK (true);
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'blog_comments' 
        AND policyname = 'Allow public to view approved blog comments'
    ) THEN
        CREATE POLICY "Allow public to view approved blog comments" ON blog_comments
            FOR SELECT USING (status = 'approved');
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'blog_comments' 
        AND policyname = 'Allow admins to view all blog comments'
    ) THEN
        CREATE POLICY "Allow admins to view all blog comments" ON blog_comments
            FOR SELECT USING (
                EXISTS (
                    SELECT 1 FROM profiles 
                    WHERE profiles.id = auth.uid() 
                    AND profiles.is_admin = true
                )
            );
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'blog_comments' 
        AND policyname = 'Allow admins to update blog comments'
    ) THEN
        CREATE POLICY "Allow admins to update blog comments" ON blog_comments
            FOR UPDATE USING (
                EXISTS (
                    SELECT 1 FROM profiles 
                    WHERE profiles.id = auth.uid() 
                    AND profiles.is_admin = true
                )
            );
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'blog_comments' 
        AND policyname = 'Allow admins to delete blog comments'
    ) THEN
        CREATE POLICY "Allow admins to delete blog comments" ON blog_comments
            FOR DELETE USING (
                EXISTS (
                    SELECT 1 FROM profiles 
                    WHERE profiles.id = auth.uid() 
                    AND profiles.is_admin = true
                )
            );
    END IF;
END $$;

-- 5. Create indexes for better performance (only if they don't exist)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_indexes 
        WHERE indexname = 'idx_contact_messages_created_at'
    ) THEN
        CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at);
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_indexes 
        WHERE indexname = 'idx_job_applications_created_at'
    ) THEN
        CREATE INDEX idx_job_applications_created_at ON job_applications(created_at);
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_indexes 
        WHERE indexname = 'idx_blog_comments_created_at'
    ) THEN
        CREATE INDEX idx_blog_comments_created_at ON blog_comments(created_at);
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_indexes 
        WHERE indexname = 'idx_blog_comments_status'
    ) THEN
        CREATE INDEX idx_blog_comments_status ON blog_comments(status);
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_indexes 
        WHERE indexname = 'idx_job_applications_status'
    ) THEN
        CREATE INDEX idx_job_applications_status ON job_applications(status);
    END IF;
END $$;

-- 6. Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON contact_messages TO anon, authenticated;
GRANT ALL ON job_applications TO anon, authenticated;
GRANT ALL ON blog_comments TO anon, authenticated;
GRANT ALL ON profiles TO anon, authenticated;

-- 7. Insert admin user profile (replace with actual user ID)
-- Uncomment and update the line below with your admin user ID
-- INSERT INTO profiles (id, email, is_admin) 
-- VALUES ('your-admin-user-id', 'admin@envisionedgetech.com', true)
-- ON CONFLICT (id) DO UPDATE SET is_admin = true; 