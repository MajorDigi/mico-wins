import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: path.resolve(process.cwd(), ".env")
});

let supabase = null;

export function getSupabaseClient() {
    if (supabase) return supabase;

    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_ANON_KEY;

    if (!url) throw new Error("SUPABASE_URL missing in environment variables");
    if (!key) throw new Error("SUPABASE_ANON_KEY missing in environment variables");

    supabase = createClient(url, key);

    return supabase;
}