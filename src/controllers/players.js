import errorResponse from '../utils/errorResponse';
import asyncHandler from '../middleware/async';
import { Player } from '../models/Player';

// @desc      Get players
// @route     GET /api/v1/players
// @route     GET /api/v1/teams/:teamId/players
// @access    Public
export const getPlayers = asyncHandler(async (req, res, next) => {
  let query;

  const teamId = req.params.teamId;

  if (teamId) {
    query = Player.find({ team: teamId });
  } else {
    query = Player.find();
  }

  const players = await query;

  res.status(200).json({ success: true, count: players.length, players });
});