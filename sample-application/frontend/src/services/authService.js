import {
  signUp,
  confirmSignUp,
  signIn,
  signOut,
  resetPassword,
  confirmResetPassword,
} from "aws-amplify/auth";

// ==========================
// Register User
// ==========================

export async function register(email, password) {
  try {
    const response = await signUp({
      username: email,
      password,
      options: {
        userAttributes: {
          email,
        },
      },
    });

    return response;
  } catch (error) {
    console.error("Signup Error:", error);
    throw error;
  }
}

// ==========================
// Verify Account
// ==========================

export async function verifyAccount(email, code) {
  try {
    const response = await confirmSignUp({
      username: email,
      confirmationCode: code,
    });

    return response;
  } catch (error) {
    console.error("Verification Error:", error);
    throw error;
  }
}

// ==========================
// Login
// ==========================

export async function login(email, password) {
  try {
    console.log("================================");
    console.log("EMAIL:", email);
    console.log("PASSWORD:", password);

    const response = await signIn({
      username: email.trim(),
      password,
    });

    console.log("SUCCESS:", response);

    return response;

  } catch (error) {

    console.log("FULL ERROR OBJECT");
    console.log(error);

    throw error;
  }
}

// ==========================
// Logout
// ==========================

export async function logout() {
  try {
    await signOut();
  } catch (error) {
    console.error("Logout Error:", error);
    throw error;
  }
}

// ==========================
// Forgot Password
// ==========================

export async function forgotPassword(email) {
  try {
    return await resetPassword({
      username: email,
    });
  } catch (error) {
    console.error("Forgot Password Error:", error);
    throw error;
  }
}

// ==========================
// Confirm New Password
// ==========================

export async function confirmForgotPassword(
  email,
  code,
  newPassword
) {
  try {
    return await confirmResetPassword({
      username: email,
      confirmationCode: code,
      newPassword,
    });
  } catch (error) {
    console.error("Reset Password Error:", error);
    throw error;
  }
}