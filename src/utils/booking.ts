import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "./firebaseConfig"; // Ensure firebaseConfig is correctly exported

// Initialize Firebase services
const db = getFirestore(app);

export const makeBooking = async (bookingData: {
  name: string;
  email: string;
  date: string;
  time: string;
}) => {
  try {
    const bookingsCollection = collection(db, "bookings");
    const docRef = await addDoc(bookingsCollection, bookingData);
    return docRef.id; // Return the document ID for confirmation
  } catch (error) {
    console.error("Error adding booking: ", error);
    throw new Error("Failed to book the appointment.");
  }
};
