module.exports = {
  apps: [{
    name: 'poetry',
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
  }],
  deploy: {
    production: {
      user: 'www',
      // host: [{
      //   host: '106.14.122.74',
      //   port: 110
      // }],
      host: '106.14.122.74:110',
      ref: 'origin/master',
      repo: 'git@github.com:HongYangHT/poetry-server.git',
      path: '/home/www/node/poetry-server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.json --env production'
    },
    dev: {
      user: 'www',
      // host: [{
      //   host: '106.14.122.74',
      //   port: 110
      // }],
      host: '106.14.122.74:110',
      ref: 'origin/master',
      repo: 'git@github.com:HongYangHT/poetry-server.git',
      path: '/home/www/node/poetry-server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.json --env dev',
      env: {
        NODE_ENV: 'dev'
      }
    }
  }
}
