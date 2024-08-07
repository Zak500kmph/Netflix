import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/v1":"http://localhost:8080/api/",//localhost 8080 automatically append bhehind /api and it also fools the backend server that the request is made from this 8080 server
    }
  }
})
