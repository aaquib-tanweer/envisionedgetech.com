-- Comprehensive migration for contact_messages table
-- This script will add any missing columns and ensure the table structure is correct

-- Add missing columns if they don't exist
ALTER TABLE contact_messages 
ADD COLUMN IF NOT EXISTS phone VARCHAR(50);

ALTER TABLE contact_messages 
ADD COLUMN IF NOT EXISTS company VARCHAR(255);

ALTER TABLE contact_messages 
ADD COLUMN IF NOT EXISTS website VARCHAR(500);

ALTER TABLE contact_messages 
ADD COLUMN IF NOT EXISTS status VARCHAR(50) DEFAULT 'new';

-- Add check constraint for status values
ALTER TABLE contact_messages 
DROP CONSTRAINT IF EXISTS contact_messages_status_check;

ALTER TABLE contact_messages 
ADD CONSTRAINT contact_messages_status_check 
CHECK (status IN ('new', 'read', 'replied', 'archived'));

-- Update existing records to have 'new' status if they don't have one
UPDATE contact_messages 
SET status = 'new' 
WHERE status IS NULL;

-- Create indexes if they don't exist
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at);
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages(email);

-- Enable Row Level Security if not already enabled
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Admins can view all contact messages" ON contact_messages;
DROP POLICY IF EXISTS "Anyone can insert contact messages" ON contact_messages;

-- Policy to allow admins to view all contact messages
CREATE POLICY "Admins can view all contact messages" ON contact_messages
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.is_admin = true
    )
  );

-- Policy to allow anyone to insert contact messages
CREATE POLICY "Anyone can insert contact messages" ON contact_messages
  FOR INSERT WITH CHECK (true);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_contact_messages_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS update_contact_messages_updated_at ON contact_messages;

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_contact_messages_updated_at
  BEFORE UPDATE ON contact_messages
  FOR EACH ROW
  EXECUTE FUNCTION update_contact_messages_updated_at(); 