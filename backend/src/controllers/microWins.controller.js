import { getAllMicroWins } from "../services/microWins.service.js";

export async function getMicroWins(req, res, next) {
    try {
        const data = await getAllMicroWins();

        res.status(200).json({
            success: true,
            data
        });

    } catch (error) {
        next(error);
    }
}