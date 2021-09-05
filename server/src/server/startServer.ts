import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';

import accessEnv from '#root/helpers/accessEnv';

const PORT = accessEnv('PORT', 3000);

const app = express();

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
