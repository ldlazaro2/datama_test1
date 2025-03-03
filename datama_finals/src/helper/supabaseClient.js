import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vdefkqccbueaoylrlsqx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkZWZrcWNjYnVlYW95bHJsc3F4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxOTY2NDgsImV4cCI6MjA1Mzc3MjY0OH0.NbczYrUd2M1Bxg2XTfC32DCAr5EnNpv3-mePqd1rsiQ'

const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;