"use server";

export const onFollow = async (id: string) =>{
  try {
    console.log("Following user with ID:", id);
  }catch(error) {
    console.error("Error following user:", error);
    throw new Error("Failed to follow user");
  }
}