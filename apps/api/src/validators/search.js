import { z } from 'zod';

export const searchQuerySchema = z.object({
  q: z.string()
    .max(256, 'Search query too long')
    .min(1, 'Search query cannot be empty')
    .trim()
});

export const validateSearchQuery = (req, res, next) => {
  try {
    searchQuerySchema.parse(req.query);
    next();
  } catch (error) {
    res.status(400).json({
      error: 'Invalid search query',
      details: error.errors
    });
  }
};
