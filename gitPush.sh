if [[ $# == 1 ]]; 
then
	git add .
	message = $1
	git commit -am "${1}"
	git push origin master
else
	echo '[usage]'
	echo 'gitPush [commit message]'
fi