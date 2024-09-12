"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CheckoutFormInputs {
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  paymentMethod: string;
}

const Checkout = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<CheckoutFormInputs>();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const onSubmit = async (data: CheckoutFormInputs) => {
    setLoading(true);
    setSuccess(false);
    setErrorMessage("");
    try {
      console.log("Submitting data:", data);
      // Simulate a successful submission
      setSuccess(true);
      reset(); // Reset the form fields
      router.push("/success");
    } catch (error) {
      console.error("Error during checkout:", error);
      setErrorMessage("An error occurred during checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      {success && <p className="text-green-500 mb-4">Your order was successful!</p>}
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <Input
              id="name"
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
              className="mt-1"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="mt-1"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium">Address</label>
            <Input
              id="address"
              type="text"
              placeholder="Address"
              {...register("address", { required: "Address is required" })}
              className="mt-1"
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium">City</label>
            <Input
              id="city"
              type="text"
              placeholder="City"
              {...register("city", { required: "City is required" })}
              className="mt-1"
            />
            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium">State</label>
            <Input
              id="state"
              type="text"
              placeholder="State"
              {...register("state", { required: "State is required" })}
              className="mt-1"
            />
            {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
          </div>
          <div>
            <label htmlFor="zip" className="block text-sm font-medium">Zip Code</label>
            <Input
              id="zip"
              type="text"
              placeholder="Zip Code"
              {...register("zip", { required: "Zip code is required" })}
              className="mt-1"
            />
            {errors.zip && <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>}
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="paymentMethod" className="block text-sm font-medium">Payment Method</label>
          <select
            id="paymentMethod"
            {...register("paymentMethod", { required: "Payment method is required" })}
            className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          >
            <option value="">Select a payment method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="stripe">Stripe</option>
            <option value="solanaPay">Solana Pay</option>
          </select>
          {errors.paymentMethod && (
            <p className="text-red-500 text-sm mt-1">{errors.paymentMethod.message}</p>
          )}
        </div>
        <div className="mt-6">
          <Button type="submit" disabled={loading}>
            {loading ? "Processing..." : "Complete Purchase"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
