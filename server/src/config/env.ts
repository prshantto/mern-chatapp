const getEnvVar = (key: string): string => {
  const value = process.env[key]; // Gets the value of the env var
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`); // Throws if not defined
  }
  return value; // Otherwise return the value (TypeScript now knows it's a string)
};

export const config = {
  PORT: parseInt(getEnvVar("PORT")), // Ensures PORT is present and parsed
  MONGO_URI: getEnvVar("MONGO_URI"), // Same for DB_URL, etc.
};
