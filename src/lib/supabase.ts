import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bfzpkgkuronfiwtbratp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmenBrZ2t1cm9uZml3dGJyYXRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1MDY5MjgsImV4cCI6MjA1ODA4MjkyOH0.OSdHo712YbH5qQnev7ZikHFu5J7oLPE-Vcj_rE_oH4k'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: sessionStorage,
    persistSession: false,
    autoRefreshToken: false
  }
}) 