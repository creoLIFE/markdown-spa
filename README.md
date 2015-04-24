# React Flux Simple App

1. Download GIT repo
2. Run > npm install
3. Instance webserver (example Apache) and point domain "markdown-spa.local" to /public folder of SPA
4. Run > gulp
5. run browser and type markdown-spa.local

P.S. If you want to use different domain/port for Markdown API than "markdown-spa.local:8080"
     then update /src/js/config/config.js apiDomain and apiPort parameter.

P.S. Please remember that if you will use for Markdown SPA different domain name than "markdown-spa.local"
     you need also update Markdown API config parameter "accessControlAllowOriginDomain" in Markdown API
     config located in /app/config/config.js for Access-Control-Allow-Origin parameters.
     Its required then because of cross-domain calls.