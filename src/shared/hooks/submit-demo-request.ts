/* eslint-disable @typescript-eslint/no-explicit-any */
export async function submitDemoRequest(payload: {
    name: string;
    email: string;
    phone: string;
    company: string;
    package: "lite" | "professional" | "enterprise";
  }) {
    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productCode: "fixwork",
          name: payload.name,
          phoneNumber: payload.phone,
          email: payload.email,
          companyName: payload.company,
          package: payload.package,
        }),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result?.message || "Failed to submit request");
      }
  
      return result;
    } catch (error: any) {
      throw new Error(error.message || "Something went wrong");
    }
  }