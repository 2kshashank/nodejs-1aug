module.exports = {
  apps : [{
    name   : "Edureka EComm",
    script : "./server.mjs",
    instances : 4,
    max_memory_restart : "60M",
    env : {
      PORT : 6000
    }
  }]
}
