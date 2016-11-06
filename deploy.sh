gulp build
#sudo find ./dist -type f -exec chmod 664 {} +
#sudo find ./dist -type d -exec chmod 775 {} +
scp -r dist/* tofani:~/www/chofra/
