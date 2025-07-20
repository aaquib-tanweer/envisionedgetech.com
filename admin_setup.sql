-- Admin Dashboard Setup SQL Commands
-- Run these in your Supabase SQL Editor

-- 1. Create admin user (if not exists)
-- First, create the user through Supabase Auth UI or API
-- Then run this to set up the admin role

-- Create profiles table if it doesn't exist
CREATE TABLE IF NOT EXISTS profiles (
    id UUID REFERENCES auth.users(id) PRIMARY KEY,
    email TEXT,
    is_admin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policy for profiles
CREATE POLICY "Users can view own profile" ON profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
    FOR UPDATE USING (auth.uid() = id);

-- Insert admin user profile (replace with actual user ID from auth.users)
-- You'll need to get the user ID from your Supabase Auth dashboard
-- INSERT INTO profiles (id, email, is_admin) 
-- VALUES ('your-admin-user-id', 'admin@envisionedgetech.com', true);

-- 2. Create contact_messages table (if not exists)
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

-- Create policies for contact_messages
CREATE POLICY "Allow public to insert contact messages" ON contact_messages
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow admins to view all contact messages" ON contact_messages
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE profiles.id = auth.uid() 
            AND profiles.is_admin = true
        )
    );

CREATE POLICY "Allow admins to update contact messages" ON contact_messages
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE profiles.id = auth.uid() 
            AND profiles.is_admin = true
        )
    );

CREATE POLICY "Allow admins to delete contact messages" ON contact_messages
    FOR DELETE USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE profiles.id = auth.uid() 
            AND profiles.is_admin = true
        )
    );

-- 3. Update job_applications table (if exists) to add status column
ALTER TABLE job_applications 
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'pending';

-- Enable RLS on job_applications (if not already enabled)
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Create policies for job_applications
CREATE POLICY "Allow public to insert job applications" ON job_applications
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow admins to view all job applications" ON job_applications
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE profiles.id = auth.uid() 
            AND profiles.is_admin = true
        )
    );

CREATE POLICY "Allow admins to update job applications" ON job_applications
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE profiles.id = auth.uid() 
            AND profiles.is_admin = true
        )
    );

CREATE POLICY "Allow admins to delete job applications" ON job_applications
    FOR DELETE USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE profiles.id = auth.uid() 
            AND profiles.is_admin = true
        )
    );

-- 4. Update blog_comments table (if exists) to add status column
ALTER TABLE blog_comments 
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'pending';

-- Enable RLS on blog_comments (if not already enabled)
ALTER TABLE blog_comments ENABLE ROW LEVEL SECURITY;

-- Create policies for blog_comments
CREATE POLICY "Allow public to insert blog comments" ON blog_comments
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public to view approved blog comments" ON blog_comments
    FOR SELECT USING (status = 'approved');

CREATE POLICY "Allow admins to view all blog comments" ON blog_comments
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE profiles.id = auth.uid() 
            AND profiles.is_admin = true
        )
    );

CREATE POLICY "Allow admins to update blog comments" ON blog_comments
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE profiles.id = auth.uid() 
            AND profiles.is_admin = true
        )
    );

CREATE POLICY "Allow admins to delete blog comments" ON blog_comments
    FOR DELETE USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE profiles.id = auth.uid() 
            AND profiles.is_admin = true
        )
    );

-- 5. Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at);
CREATE INDEX IF NOT EXISTS idx_job_applications_created_at ON job_applications(created_at);
CREATE INDEX IF NOT EXISTS idx_blog_comments_created_at ON blog_comments(created_at);
CREATE INDEX IF NOT EXISTS idx_blog_comments_status ON blog_comments(status);
CREATE INDEX IF NOT EXISTS idx_job_applications_status ON job_applications(status);

-- 6. Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON contact_messages TO anon, authenticated;
GRANT ALL ON job_applications TO anon, authenticated;
GRANT ALL ON blog_comments TO anon, authenticated;
GRANT ALL ON profiles TO anon, authenticated; 