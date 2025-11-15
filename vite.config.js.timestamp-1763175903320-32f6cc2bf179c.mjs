// vite.config.js
import { defineConfig } from "file:///home/workspace/node_modules/vite/dist/node/index.js";
import react from "file:///home/workspace/node_modules/@vitejs/plugin-react/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Exclude packages that shouldn't be pre-bundled
    exclude: [],
    // Entries point for dependency pre-bundling
    entries: ["./src/**/*.{js,jsx,ts,tsx}"],
    // Hold the first optimizeDeps run until all dependencies are discovered
    holdUntilCrawlEnd: true
  },
  server: {
    port: 3e3,
    host: "0.0.0.0",
    strictPort: true,
    hmr: false,
    watch: false,
    cors: {
      origin: "*",
      credentials: true
    },
    allowedHosts: [
      ".modal.host",
      "localhost",
      "127.0.0.1"
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS93b3Jrc3BhY2VcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3dvcmtzcGFjZS92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS93b3Jrc3BhY2Uvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIC8vIEV4Y2x1ZGUgcGFja2FnZXMgdGhhdCBzaG91bGRuJ3QgYmUgcHJlLWJ1bmRsZWRcbiAgICBleGNsdWRlOiBbXSxcbiAgICAvLyBFbnRyaWVzIHBvaW50IGZvciBkZXBlbmRlbmN5IHByZS1idW5kbGluZ1xuICAgIGVudHJpZXM6IFsnLi9zcmMvKiovKi57anMsanN4LHRzLHRzeH0nXSxcbiAgICAvLyBIb2xkIHRoZSBmaXJzdCBvcHRpbWl6ZURlcHMgcnVuIHVudGlsIGFsbCBkZXBlbmRlbmNpZXMgYXJlIGRpc2NvdmVyZWRcbiAgICBob2xkVW50aWxDcmF3bEVuZDogdHJ1ZVxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDAwLFxuICAgIGhvc3Q6ICcwLjAuMC4wJyxcbiAgICBzdHJpY3RQb3J0OiB0cnVlLFxuICAgIGhtcjogZmFsc2UsXG4gICAgd2F0Y2g6IGZhbHNlLFxuICAgIGNvcnM6IHtcbiAgICAgIG9yaWdpbjogJyonLFxuICAgICAgY3JlZGVudGlhbHM6IHRydWVcbiAgICB9LFxuICAgIGFsbG93ZWRIb3N0czogW1xuICAgICAgJy5tb2RhbC5ob3N0JyxcbiAgICAgICdsb2NhbGhvc3QnLFxuICAgICAgJzEyNy4wLjAuMSdcbiAgICBdXG4gIH1cbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErTixTQUFTLG9CQUFvQjtBQUM1UCxPQUFPLFdBQVc7QUFFbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLGNBQWM7QUFBQTtBQUFBLElBRVosU0FBUyxDQUFDO0FBQUE7QUFBQSxJQUVWLFNBQVMsQ0FBQyw0QkFBNEI7QUFBQTtBQUFBLElBRXRDLG1CQUFtQjtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixLQUFLO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsTUFDSixRQUFRO0FBQUEsTUFDUixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0EsY0FBYztBQUFBLE1BQ1o7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
