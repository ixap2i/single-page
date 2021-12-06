import { EnvType, load } from 'ts-dotenv';

export type Env = EnvType<typeof schema>;

export const schema = {
  NODE_ENV: String,
  REQ_TKN_URL: String,
  ACS_TKN_URL: String,
  AUTH_URL: String,
  CONSUMER_KEY: String,
  CONSUMER_SECRET: String
};

export let env: Env;

export function loadEnv(): void {
  env = load(schema);
}
