module.exports = {
    apps: [
      {
        name: 'parcel-dev',
        script: 'npx',
        args: 'parcel src/index.html --no-cache --no-autoinstall',
        interpreter: 'none',
        max_restarts: 5,
        restart_delay: 1000,
        watch: true,
        autorestart: true
      }
    ]
  };
  