"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { makeBooking } from "../utils/booking"; 

const BookAppointment: React.FC = () => {
  const router = useRouter(); // Initialize router
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage(null); // Clear error message on input change
  };

  const validateForm = () => {
    const newErrors: typeof errors = {
      name: "",
      email: "",
      date: "",
      time: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }
    if (!formData.date) {
      newErrors.date = "Date is required";
    }
    if (!formData.time) {
      newErrors.time = "Time is required";
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await makeBooking(formData);
        setFormData({ name: "", email: "", date: "", time: "" });
        router.push("/bookingpending"); // Navigate to booking pending page
      } catch (error: any) {
        setErrorMessage(error.message || "An error occurred while booking.");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-sm shadow-[#59981A]">
      <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
        Book an Appointment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.name ? "border-red-500 focus:ring-red-500" : "focus:ring-[#59981A]"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.email ? "border-red-500 focus:ring-red-500" : "focus:ring-[#59981A]"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="date" className="block font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.date ? "border-red-500 focus:ring-red-500" : "focus:ring-[#59981A]"
            }`}
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date}</p>
          )}
        </div>

        <div>
          <label htmlFor="time" className="block font-medium text-gray-700">
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.time ? "border-red-500 focus:ring-red-500" : "focus:ring-[#59981A]"
            }`}
          />
          {errors.time && (
            <p className="text-red-500 text-sm mt-1">{errors.time}</p>
          )}
        </div>

        {errorMessage && (
          <p className="text-red-500 text-center mt-2">{errorMessage}</p>
        )}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-[#59981A] text-white font-medium rounded-md hover:bg-[#4d8717] transition"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;
