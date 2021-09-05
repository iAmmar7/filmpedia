const cache: { [key: string]: any } = {};

// This function returns the key from the processe.env
const accessEnv = (key: string, defaultValue?: any) => {
  if (!(key in process.env)) {
    if (defaultValue) return defaultValue;
    throw new Error(`${key} not found in process.env`);
  }

  if (cache[key]) return cache[key];

  cache[key] = process.env[key];

  return process.env[key];
};

export default accessEnv;

// Process.env is a heavy task that is the reason we are doing this cache thing
