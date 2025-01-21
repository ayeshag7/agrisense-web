import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "./firebaseConfig"; // Ensure firebaseConfig is correctly exported

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

/**
 * Signs up a new user with Firebase Authentication and stores additional user data in Firestore.
 * @param name Full name of the user
 * @param email Email address of the user
 * @param password Password for the account
 * @param confirmPassword Confirmation of the password
 * @param phoneNumber User's phone number
 * @returns Promise<void>
 */
export const signUpUser = async (
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
  phoneNumber: string
): Promise<void> => {
  try {
    // Check if passwords match
    if (password !== confirmPassword) {
      throw new Error("Passwords do not match.");
    }

    // Create a new user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Update user profile with the name
    await updateProfile(userCredential.user, {
      displayName: name,
    });

    // Add user data to Firestore (without role and organization)
    const userDoc = doc(db, "users", userCredential.user.uid);
    await setDoc(userDoc, {
      name,
      email,
      phoneNumber,
      verified: false, // Default value for verified
      createdAt: new Date().toISOString(),
    });

    console.log("User signed up and data stored successfully.");
  } catch (error: unknown) {
    // Safely handle error
    if (error instanceof Error) {
      console.error("Error signing up user:", error.message);
      throw new Error(error.message);
    } else {
      console.error("Unknown error occurred during signup.");
      throw new Error("An unknown error occurred during signup.");
    }
  }
};


/**
 * Logs in a user with Firebase Authentication.
 * @param email Email address of the user
 * @param password Password for the account
 * @returns Promise<void>
 */
export const loginUser = async (email: string, password: string): Promise<void> => {
  try {
    // Sign in with email and password
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    // Check if user is signed in successfully
    if (userCredential.user) {
      console.log("User logged in successfully.");
    }
  } catch (error: unknown) {
    // Safely handle error
    if (error instanceof Error) {
      console.error("Error logging in user:", error.message);
      throw new Error(error.message);
    } else {
      console.error("Unknown error occurred during login.");
      throw new Error("An unknown error occurred during login.");
    }
  }
};
