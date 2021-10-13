# Starting a new project

## Setting up the repository

To start a project from this boilerplate follow the steps below:

 - run the following command:

```shell
git clone git@github.com:perimetre/wordpress-boilerplate.git <NOME-DO-PROJETO> && cd <NOME-DO-PROJETO>/ 
```

- Create an empty repository on GitHub with \<PROJECT-NAME> and then restart the local repository:

```shell 
rm -rf .git && git init
```

- Add remote repository address:

```shell 
git remote add origin git@github.com:perimetre/<PROJECT-NAME>.git 
```

- Commit and push

```shell
git add . && git commit -m "First commit" && git push --set-upstream origin master
```

## Installing Wordpress

- Start docker container:

```shell 
docker-compose up -d 
```

- To fix the permission of the directories run the script as below:

```shell
sh fix_permissions.sh  
```

- Create an empty database called ``wordpress`` in phpMyAdmin at http://localhost:3002/

- Install essential plugins running:

```shell
php composer.phar update 
```

- Change the name of the `` / new-theme `` folder to the name corresponding to the project, do the same with the `` Theme name: `` in the file `` new-theme / style.css``

- Finish the installation at http://localhost:3000/

- Activate the theme and plugins

## Developing the theme

- On /wp-content/themes/\<THEME-NAME> install dependencies:

```shell
npm i 
```

- Start developing 

```shell 
npm run dev
```
