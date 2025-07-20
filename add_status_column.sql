-- Add status column to existing contact_messages table
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

-- Create index for status column if it doesn't exist
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status); 