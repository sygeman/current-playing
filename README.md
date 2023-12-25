# Current Playing (OBS)
1. [Install Ext](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked)
2. Run service with [Docker](https://docs.docker.com/get-docker/) 

`docker run -d -p 5644:5644 --name=current-playing --restart=always ghcr.io/sygeman/current-playing:main`

3. Make [OBS Browser](https://obsproject.com/kb/browser-source) with url - `http://localhost:5644/`

## TODO
1. Publish Chrome Ext (popup config: whitelist sites, data endpoint)