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
  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutFormInputs>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: CheckoutFormInputs) => {
    setLoading(true);
    try {
      console.log("Submitting data:", data);
      router.push("/success");
    } catch (error) {
      console.error("Error during checkout:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="text"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          <Input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />
          <Input
            type="text"
            placeholder="Address"
            {...register("address", { required: "Address is required" })}
          />
          <Input
            type="text"
            placeholder="City"
            {...register("city", { required: "City is required" })}
          />
          <Input
            type="text"
            placeholder="State"
            {...register("state", { required: "State is required" })}
          />
          <Input
            type="text"
            placeholder="Zip Code"
            {...register("zip", { required: "Zip code is required" })}
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium">Payment Method</label>
          <select
            {...register("paymentMethod", { required: "Payment method is required" })}
            className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          >
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
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
