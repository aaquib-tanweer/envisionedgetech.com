# Supabase Storage Setup Guide

This guide will help you set up the storage bucket for job application resumes in your Supabase project.

## 🚀 Quick Setup

### 1. **Create Storage Bucket**

1. Go to your Supabase project dashboard
2. Navigate to **Storage** in the left sidebar
3. Click **"Create a new bucket"**
4. Enter the following details:
   - **Name**: `job-applications`
   - **Public bucket**: ✅ Check this box (so resumes can be viewed)
   - **File size limit**: `50 MB` (or your preferred limit)
   - **Allowed MIME types**: `application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document`
5. Click **"Create bucket"**

### 2. **Set Up Storage Policies**

After creating the bucket, you need to set up Row Level Security (RLS) policies:

1. Go to **Storage** → **Policies**
2. Click on the `job-applications` bucket
3. Add the following policies:

#### **Policy 1: Allow Public Upload**
- **Policy Name**: `Allow public uploads`
- **Allowed operation**: `INSERT`
- **Target roles**: `anon, authenticated`
- **Policy definition**: `true`

#### **Policy 2: Allow Public Download**
- **Policy Name**: `Allow public downloads`
- **Allowed operation**: `SELECT`
- **Target roles**: `anon, authenticated`
- **Policy definition**: `true`

#### **Policy 3: Allow Admin Management**
- **Policy Name**: `Allow admin management`
- **Allowed operation**: `UPDATE, DELETE`
- **Target roles**: `authenticated`
- **Policy definition**: 
```sql
EXISTS (
  SELECT 1 FROM profiles 
  WHERE profiles.id = auth.uid() 
  AND profiles.is_admin = true
)
```

### 3. **Alternative: Use SQL Commands**

If you prefer to use SQL, run these commands in your Supabase SQL Editor:

```sql
-- Create the storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('job-applications', 'job-applications', true);

-- Create policies for the bucket
CREATE POLICY "Allow public uploads" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'job-applications');

CREATE POLICY "Allow public downloads" ON storage.objects
FOR SELECT USING (bucket_id = 'job-applications');

CREATE POLICY "Allow admin management" ON storage.objects
FOR UPDATE USING (
  bucket_id = 'job-applications' AND
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE profiles.id = auth.uid() 
    AND profiles.is_admin = true
  )
);

CREATE POLICY "Allow admin deletion" ON storage.objects
FOR DELETE USING (
  bucket_id = 'job-applications' AND
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE profiles.id = auth.uid() 
    AND profiles.is_admin = true
  )
);
```

## 🔧 Verification

### **Test Upload**
1. Go to your careers page
2. Submit a job application with a resume
3. Check if the file appears in the `job-applications` bucket

### **Test Download**
1. Go to your admin dashboard
2. Click "View Resume" on a job application
3. Verify the resume opens in a new tab

## 🛠 Troubleshooting

### **"Bucket not found" Error**
- Ensure the bucket name is exactly `job-applications` (with hyphen)
- Check that the bucket was created successfully in Storage dashboard
- Verify the bucket is public

### **"Permission denied" Error**
- Check that the storage policies are correctly set up
- Ensure the admin user has the correct permissions
- Verify RLS is enabled on the storage.objects table

### **"File not found" Error**
- Check that the resume_url in the database matches the file path in storage
- Verify the file was uploaded successfully
- Check the file path format in the database

## 📁 File Structure

The storage bucket will organize files as follows:
```
job-applications/
├── resumes/
│   ├── 1234567890.pdf
│   ├── 9876543210.docx
│   └── ...
```

## 🔒 Security Considerations

1. **Public Access**: The bucket is public so resumes can be viewed, but only admins can manage files
2. **File Types**: Only PDF and Word documents are allowed
3. **Size Limits**: Files are limited to 50MB (configurable)
4. **Admin Only**: Only authenticated admin users can delete or modify files

## 🚀 Next Steps

After setting up the storage bucket:

1. **Test the application form** on your careers page
2. **Verify resume uploads** work correctly
3. **Test resume viewing** in the admin dashboard
4. **Monitor storage usage** in your Supabase dashboard

---

**Your storage setup is now complete!** 🎉 