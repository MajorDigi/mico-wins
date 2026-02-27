import { getSupabaseClient } from "../config/supabase.js";

const supabase = getSupabaseClient();

export async function getAllMicroWins() {
    const { data, error } = await supabase
        .from("micro_wins")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) throw new Error(error.message);

    return data;
}