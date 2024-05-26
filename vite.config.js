import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	// Директория, в которой находятся статические файлы
	publicDir: 'public',
	// Папка, куда будут скопированы статические файлы
	build: {
		outDir: 'dist',
	},
})
