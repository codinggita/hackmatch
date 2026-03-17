const User = require('../models/User');
const { asyncHandler, ApiError } = require('../middleware/errorHandler');

// ----------------------------------------------------
// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
// ----------------------------------------------------
const getUserProfile = asyncHandler(async (req, res, next) => {
  // req.user is attached by the protect middleware and excludes the password
  res.status(200).json({
    success: true,
    data: req.user
  });
});

// ----------------------------------------------------
// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
// ----------------------------------------------------
const updateUserProfile = asyncHandler(async (req, res, next) => {
  const { name, bio, skills, experienceLevel, githubLink, portfolioLink } = req.body;

  const user = await User.findById(req.user._id);
  if (!user) return next(new ApiError('User not found', 404));

  // Only update fields that were actually sent
  if (name) user.name = name;
  if (bio !== undefined) user.bio = bio;
  if (skills) user.skills = Array.isArray(skills) ? skills : skills.split(',').map(s => s.trim()).filter(Boolean);
  if (experienceLevel) user.experienceLevel = experienceLevel;
  if (githubLink !== undefined) user.githubLink = githubLink;
  if (portfolioLink !== undefined) user.portfolioLink = portfolioLink;

  const updatedUser = await user.save();

  res.status(200).json({
    success: true,
    message: 'Profile updated successfully',
    data: {
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      bio: updatedUser.bio,
      skills: updatedUser.skills,
      experienceLevel: updatedUser.experienceLevel,
      githubLink: updatedUser.githubLink,
      portfolioLink: updatedUser.portfolioLink
    }
  });
});

module.exports = {
  getUserProfile,
  updateUserProfile
};
