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
// POST / add a new micro win
export async function addMicroWin(newWin) {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
        .from("micro_wins")
        .insert([newWin])
        .select(); // return the inserted row

    if (error) throw new Error(error.message);
    return data[0]; // return single inserted row
}