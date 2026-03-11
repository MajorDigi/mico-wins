import { getAllMicroWins, addMicroWin} from "../services/microWins.service.js";

export async function getMicroWins(req, res, next) {
    try {
        const data = await getAllMicroWins();
         //console.log("GET data:", data); // ← debugging

        res.status(200).json({
            success: true,
            data
        });

    } catch (error) {
        next(error);
    }
}
// POST a new micro win
export async function createMicroWin(req, res, next) {
    try {
        const newWin = req.body; // data from client
        const inserted = await addMicroWin(newWin);
        res.status(201).json({ success: true, data: inserted });
    } catch (error) {
        next(error); // passes to global error handler
    }
}