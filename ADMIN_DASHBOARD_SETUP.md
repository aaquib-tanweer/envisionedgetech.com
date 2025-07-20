# Admin Dashboard Setup Guide

This guide will help you set up the admin dashboard for your Envision Edge Tech website.

## 🚀 Quick Start

### 1. **Create Admin User in Supabase**

1. Go to your Supabase project dashboard
2. Navigate to **Authentication** → **Users**
3. Click **"Add User"**
4. Enter the following details:
   - **Email**: `admin@envisionedgetech.com`
   - **Password**: `Admin$envision`
5. Click **"Create User"**
6. Copy the **User ID** (you'll need this for the next step)

### 2. **Run SQL Commands**

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Copy and paste the contents of `admin_setup.sql`
4. **Replace** the line with `your-admin-user-id` with the actual User ID you copied
5. Run the SQL commands

### 3. **Access the Admin Dashboard**

1. Start your development server:
   ```bash
   npm run start:dev
   ```

2. Navigate to: `http://localhost:5174/admin-dashboard`

3. Login with:
   - **Email**: `admin@envisionedgetech.com`
   - **Password**: `Admin$envision`

## 📊 Dashboard Features

### **Job Applications**
- View all job applications submitted through your careers page
- Update application status (Pending, Reviewed, Accepted, Rejected)
- Delete applications
- Search and filter applications

### **Blog Comments**
- View all blog comments submitted by users
- Approve/reject comments
- Delete comments
- Search and filter comments

### **Contact Messages**
- View all contact form submissions
- Delete messages
- Search and filter messages

## 🔧 Database Tables

The admin dashboard works with these Supabase tables:

### **job_applications**
- `id` (UUID, Primary Key)
- `job_title` (Text)
- `full_name` (Text)
- `email` (Text)
- `phone` (Text)
- `portfolio` (Text)
- `cover_letter` (Text)
- `resume_url` (Text)
- `status` (Text) - Default: 'pending'
- `created_at` (Timestamp)

### **blog_comments**
- `id` (UUID, Primary Key)
- `blog_id` (Integer)
- `comment` (Text)
- `email` (Text)
- `website` (Text, Optional)
- `status` (Text) - Default: 'pending'
- `created_at` (Timestamp)

### **contact_messages**
- `id` (UUID, Primary Key)
- `name` (Text)
- `email` (Text)
- `message` (Text)
- `created_at` (Timestamp)
- `archived` (Boolean) - Default: false

### **profiles**
- `id` (UUID, Primary Key, References auth.users)
- `email` (Text)
- `is_admin` (Boolean) - Default: false
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

## 🔒 Security Features

### **Authentication**
- Only users with `is_admin = true` can access the dashboard
- Email/password authentication through Supabase Auth
- Session management and automatic logout

### **Row Level Security (RLS)**
- All tables have RLS enabled
- Public users can only insert data
- Only admins can view, update, and delete data
- Blog comments are only visible to public when status = 'approved'

## 🎨 UI Features

### **Dashboard Overview**
- Statistics cards showing total counts
- Tabbed interface for different data types
- Search functionality across all fields
- Pagination for large datasets

### **Data Management**
- Real-time data updates
- Status management for applications and comments
- Delete functionality with confirmation
- Responsive design for mobile and desktop

## 🚨 Troubleshooting

### **Login Issues**
1. Verify the admin user exists in Supabase Auth
2. Check that the user has `is_admin = true` in the profiles table
3. Ensure the email and password match exactly

### **Data Not Loading**
1. Check browser console for errors
2. Verify RLS policies are correctly set up
3. Ensure tables exist and have the correct structure
4. Check Supabase connection in `src/lib/supabase.ts`

### **Permission Errors**
1. Run the SQL commands again to ensure all policies are created
2. Check that the admin user ID is correctly set in the profiles table
3. Verify RLS is enabled on all tables

## 🔄 Updating Data

### **Job Applications**
- Status can be: 'pending', 'reviewed', 'accepted', 'rejected'
- Changes are saved immediately to Supabase

### **Blog Comments**
- Status can be: 'pending', 'approved', 'rejected'
- Only approved comments are visible on the public blog

### **Contact Messages**
- Can be deleted permanently
- No status management (simple view/delete)

## 📱 Mobile Responsive

The admin dashboard is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🔐 Security Best Practices

1. **Change Default Password**: After first login, change the admin password
2. **Regular Backups**: Set up regular database backups in Supabase
3. **Monitor Access**: Check Supabase logs for unusual activity
4. **HTTPS Only**: Ensure the dashboard is only accessible over HTTPS in production

## 🚀 Production Deployment

When deploying to production:

1. **Environment Variables**: Ensure Supabase URL and key are set correctly
2. **Domain**: Consider using a subdomain like `admin.envisionedgetech.com`
3. **SSL**: Ensure HTTPS is enabled
4. **Monitoring**: Set up error monitoring and analytics

## 📞 Support

If you encounter any issues:

1. Check the browser console for error messages
2. Verify Supabase connection and permissions
3. Ensure all SQL commands were executed successfully
4. Test with a fresh browser session

---

**Your admin dashboard is now ready to manage all your website's backend data!** 🎉 