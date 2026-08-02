export const MESSAGES = {
    // Authentication
    AUTH_LOGIN_SUCCESS: "Login successful",
    AUTH_REGISTRATION_SUCCESS: "Registration successful",
    AUTH_TOKEN_REFRESHED: "Token refreshed successfully",
    AUTH_LOGOUT_SUCCESS: "Logged out successfully",
  
    // OTP
    OTP_EMAIL_SENT: "OTP sent successfully to email",
    OTP_SMS_SENT: "OTP sent successfully to phone",
    OTP_EMAIL_VERIFIED: "Email OTP verified successfully",
    OTP_PHONE_VERIFIED: "Phone OTP verified successfully",
  
    // User
    USER_CREATED: "User created successfully",
    USER_UPDATED: "User updated successfully",
    USER_DELETED: "User deleted successfully",
    USER_RETRIEVED: "User retrieved successfully",
  
    // Admin
    ADMIN_USERS_RETRIEVED: "Users retrieved successfully",
    ADMIN_USER_RETRIEVED: "User retrieved successfully",
    ADMIN_USER_DELETED: "User deleted successfully",
    ADMIN_USER_BANNED: "User banned successfully",
    ADMIN_USER_UNBANNED: "User unbanned successfully",
    ADMIN_STATS_RETRIEVED: "Dashboard stats retrieved successfully",
  
    // Identity Linking
    IDENTITY_EMAIL_LINKED: "Email linked successfully",
    IDENTITY_PHONE_LINKED: "Phone linked successfully",
  
    // Generic
    REQUEST_SUCCESS: "Request successful",
    OPERATION_SUCCESS: "Operation completed successfully",
  
    // Media
    MEDIA_UPLOADED: "Media uploaded",
  
    // Chat
    GROUP_CHAT_CREATED: "Group chat created successfully",
    MUTUAL_FOLLOWERS_FETCHED: "Mutual follows fetched successfully",
    MESSAGE_FORWARDED: "Message forwarded",
  
    // Calls
    CALL_INITIATED: "Call initiated",
    CALL_INITIATED_GROUP: "Group call started",
    CALL_ACCEPTED: "Call accepted",
    CALL_REJECTED: "Call rejected",
    CALL_ENDED: "Call ended",
    CALL_LEFT: "Left the call",
    CALL_RETRIEVED: "Call retrieved",
    CALL_TOKEN_ISSUED: "Call token issued",
  } as const;
  
  export type MESSAGES = (typeof MESSAGES)[keyof typeof MESSAGES];
  