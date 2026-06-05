import { createClient } from '@supabase/supabase-js';

// import.meta.env may not be recognized by TypeScript depending on project typings.
// Cast to any to avoid the "Property 'env' does not exist on type 'ImportMeta'" error.
const _meta: any = import.meta;
const supabaseUrl = _meta.env.VITE_SUPABASE_URL;
const supabaseKey = _meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);