if [ ! -d "./db-dump" ]; then
    mkdir dump-db
fi

docker exec -i wordpress-bc-demo_phpmyadmin_1 mysqldump -h mysql -u wordpress -pwordpress --add-drop-table wordpress | gzip > "./db-dump/wordpress.sql.zip"