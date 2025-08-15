import clerkClient from "../config/clerkClient.js";

export const onBoarding = async (req, res) => {
  try {
    const userId = req?.auth?.userId;
    const { pfp } = req.body;

    if (!userId) {
      return res
        .status(401)
        .json({ success: false, message: "UNAUTHORIZED ACCESS" });
    }

    if (!pfp) {
      return res
        .status(400)
        .json({ success: false, message: "profile picture required" });
    }

    const existing = await clerkClient.users.getUser(userId);
    const mergedPublicMetadata = {
      ...(existing?.publicMetadata ?? {}),
      onBoarded: true,
      pfp,
    };

    await clerkClient.users.updateUser(userId, {
      publicMetadata: mergedPublicMetadata,
    });

    res
      .status(200)
      .json({ success: true, message: "User onboarded successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Unable to onboard" });
  }
};
