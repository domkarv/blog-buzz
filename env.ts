import { z } from 'zod';

const envVariables = z.object({
  NODE_ENV: z.string(),
  DB_HOST: z.string(),
  DB_USER: z.string(),
  DB_PASS: z.string(),
  DB_PORT: z.number(),
  DB_INITIAL_NAME: z.string(),
});

envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
