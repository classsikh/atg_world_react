import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
<<<<<<< HEAD
    port:3000||env.port,
=======
    port:3000||ENV.PORT
>>>>>>> 739566a157e385c88ce6ef458687b15759b7b142
  },
})
