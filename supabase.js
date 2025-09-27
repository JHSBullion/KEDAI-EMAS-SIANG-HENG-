
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"
export const SUPABASE_URL = "https://mnzwqqxybhjqrfrzydwk.supabase.co"
export const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1uendxcXh5YmhqcXJmcnp5ZHdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0NzgzMzIsImV4cCI6MjA3MjA1NDMzMn0.Yo27vsFqgVM9wWKRgI-ErV2Fl6kjsYcQQPqbe8nGZOQ"
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession:true, autoRefreshToken:true, detectSessionInUrl:true }
})
export async function getSessionUser(){ const {data} = await supabase.auth.getSession(); return data.session?.user||null; }
export async function requireAuth(){ const u = await getSessionUser(); if(!u) window.location.href='login.html'; return u }
export async function logout(){ await supabase.auth.signOut(); window.location.href='login.html' }
