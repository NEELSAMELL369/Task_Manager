import cluster from "cluster";
import os from "os";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

if (cluster.isPrimary) {
  const numCPUs = os.cpus().length;
  console.log(`Primary process is running. Forking ${numCPUs} workers...`);

  for (let i = 0; i < numCPUs; i++) cluster.fork();

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Spawning a new one.`);
    cluster.fork();
  });
} else {
  app.listen(PORT, () => {
    console.log(`Worker ${process.pid} listening on port ${PORT}`);
  });
}
