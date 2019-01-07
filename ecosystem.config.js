module.exports = {
  apps : [{
    name: 'Poetry-server',
    script: './app.js',
    instances: 3,
    instance_var: '$404',
    autorestart: true,
    watch: false,
    max_memory_restart: '300M',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    },
    output: '/dev/null',
    error: '/dev/null'
  }]
};
