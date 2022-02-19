import dotenv from 'dotenv'

dotenv.config()

// Map necessary tridev's env vars as Vite only expose VITE_*
process.env.VITE_tridev_NODE_ENV = process.env.tridev_NODE_ENV
process.env.VITE_tridev_HOST = process.env.tridev_HOST
process.env.VITE_tridev_PORT = process.env.tridev_PORT

export default {
  root: 'app/src',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
}
