import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export const SupabaseTest = () => {
  const [message, setMessage] = useState<string>('')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Query to test connection and get data from the 'test' table
        const { data, error } = await supabase
          .from('test')
          .select('*')
          .limit(1)

        if (error) {
          if (error.message.includes('relation "public.test" does not exist')) {
            setError('Please create a table named "test" in your Supabase database with the following SQL:\n\n' +
              'CREATE TABLE public.test (\n' +
              '  id SERIAL PRIMARY KEY,\n' +
              '  name TEXT NOT NULL,\n' +
              '  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE(\'utc\'::text, NOW()) NOT NULL\n' +
              ');\n\n' +
              'INSERT INTO public.test (name) VALUES (\'Test Entry\');')
            return
          }
          setError(error.message)
          return
        }

        // If no error, use the data from the query
        if (data && data.length > 0) {
          setMessage(`Successfully connected to Supabase! First test entry: ${data[0].name}`)
        } else {
          setMessage('Successfully connected to Supabase, but no entries found in the "test" table.')
        }
      } catch (err) {
        console.error('Connection error:', err)
        setError('Failed to connect to Supabase')
      }
    }

    testConnection()
  }, [])

  return (
    <div className="p-4 rounded-lg bg-card border border-border">
      <h2 className="text-xl font-semibold mb-4">Supabase Connection Test</h2>
      {message && (
        <div className="text-green-500 mb-2">{message}</div>
      )}
      {error && (
        <div className="text-red-500 whitespace-pre-line">{error}</div>
      )}
    </div>
  )
}
